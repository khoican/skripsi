import _ from 'lodash';
import levenshtein from 'fast-levenshtein';
import { removeStopwords, ind, eng } from 'stopword';

export const preprocessText = (text) => {
  if (!text || typeof text !== 'string') return [];
  
  let processed = text
    .toLowerCase()
    .replace(/[^\w\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const tokens = processed.split(' ').filter(word => word.length > 0);
  const cleanTokens = removeStopwords(tokens, [...ind, ...eng]);
  
  return cleanTokens;
};

export const calculateSimilarity = (str1, str2) => {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 1;
  
  const distance = levenshtein.get(str1, str2);
  return 1 - (distance / maxLength);
};

export const findBestMatch = (queryTerm, vocabulary, threshold = 0.7) => {
  let bestMatch = queryTerm;
  let bestScore = 0;
  
  for (const vocabTerm of vocabulary) {
    const similarity = calculateSimilarity(queryTerm.toLowerCase(), vocabTerm.toLowerCase());
    if (similarity >= threshold && similarity > bestScore) {
      bestScore = similarity;
      bestMatch = vocabTerm;
    }
  }
  
  return {
    term: bestMatch,
    similarity: bestScore,
    isCorrected: bestMatch !== queryTerm
  };
};

export const processQueryWithCorrection = (query, vocabulary, options = {}) => {
  const { 
    typoThreshold = 0.7, 
    enablePhoneticMatching = true,
    maxCorrections = 3 
  } = options;
  
  const queryTokens = preprocessText(query);
  const processedQuery = {
    originalTokens: queryTokens,
    correctedTokens: [],
    corrections: [],
    suggestions: []
  };
  
  let correctionCount = 0;
  
  queryTokens.forEach(token => {
    if (vocabulary.has(token)) {
      processedQuery.correctedTokens.push(token);
      return;
    }
    
    if (correctionCount < maxCorrections) {
      const bestMatch = findBestMatch(token, vocabulary, typoThreshold);
      
      if (bestMatch.isCorrected && bestMatch.similarity >= typoThreshold) {
        processedQuery.correctedTokens.push(bestMatch.term);
        processedQuery.corrections.push({
          original: token,
          corrected: bestMatch.term,
          similarity: bestMatch.similarity
        });
        correctionCount++;
      } else {
        processedQuery.correctedTokens.push(token);
      }
    } else {
      processedQuery.correctedTokens.push(token);
    }
  });
  
  return processedQuery;
};

export const calculateTF = (term, document) => {
  const termCount = document.filter(word => word === term).length;
  return termCount / document.length;
};

export const calculateIDF = (term, allDocuments) => {
  const documentsWithTerm = allDocuments.filter(doc => doc.includes(term)).length;
  if (documentsWithTerm === 0) return 0;
  return Math.log(allDocuments.length / documentsWithTerm);
};

export class HybridSearchIndex {
  constructor() {
    this.documents = [];
    this.vocabulary = new Set();
    this.idfCache = new Map();
    this.productIndex = [];
    this.termPositions = new Map();
  }

  buildIndex(products) {
    this.documents = [];
    this.vocabulary = new Set();
    this.productIndex = [];
    this.termPositions = new Map();
    
    products.forEach((product, index) => {
      const nameTokens = preprocessText(product.name || '');
      const categoryTokens = preprocessText(product.subCategory?.name || '');
      const descTokens = preprocessText(product.description || '');
      
      const combinedDocument = [
        ...nameTokens, ...nameTokens, ...nameTokens,
        ...categoryTokens, ...categoryTokens,
        ...descTokens
      ];
      
      this.documents.push(combinedDocument);
      this.productIndex.push(index);
      
      [...nameTokens, ...categoryTokens, ...descTokens].forEach(token => {
        this.vocabulary.add(token);
      });
      
      const allTokens = [...nameTokens, ...categoryTokens, ...descTokens];
      allTokens.forEach((token, pos) => {
        if (!this.termPositions.has(token)) {
          this.termPositions.set(token, new Map());
        }
        if (!this.termPositions.get(token).has(index)) {
          this.termPositions.get(token).set(index, []);
        }
        this.termPositions.get(token).get(index).push(pos);
      });
    });
    
    this.vocabulary.forEach(term => {
      this.idfCache.set(term, calculateIDF(term, this.documents));
    });
  }

  calculatePhraseBonus(correctedTokens, productIndex) {
    if (correctedTokens.length < 2) return 0;
    
    let phraseBonus = 0;
    
    for (let i = 0; i < correctedTokens.length - 1; i++) {
      const term1 = correctedTokens[i];
      const term2 = correctedTokens[i + 1];
      
      const positions1 = this.termPositions.get(term1)?.get(productIndex) || [];
      const positions2 = this.termPositions.get(term2)?.get(productIndex) || [];
      
      for (const pos1 of positions1) {
        for (const pos2 of positions2) {
          if (Math.abs(pos1 - pos2) === 1) {
            phraseBonus += 0.5;
          } else if (Math.abs(pos1 - pos2) <= 3) {
            phraseBonus += 0.2;
          }
        }
      }
    }
    
    return Math.min(phraseBonus, 2.0);
  }

  search(query, products, options = {}) {
    const { 
      minScore = 0.1, 
      maxResults = 1000, 
      boostExactMatch = true,
      typoThreshold = 0.7,
      enablePhraseBonus = true,
      typoScorePenalty = 0.1 
    } = options;
    
    if (!query?.trim()) {
      return {
        data: products.slice(0, maxResults),
        processedQuery: null,
        totalResults: products.length
      };
    }
    
    const processedQuery = processQueryWithCorrection(query, this.vocabulary, {
      typoThreshold,
      maxCorrections: 3
    });
    
    const { correctedTokens, corrections } = processedQuery;
    
    if (correctedTokens.length === 0) {
      return {
        data: [],
        processedQuery,
        totalResults: 0
      };
    }
    
    const results = products.map((product, productIndex) => {
      let tfidfScore = 0;
      let exactMatchBonus = 0;
      let phraseBonus = 0;
      let typoScore = 0;
      
      correctedTokens.forEach(term => {
        const document = this.documents[productIndex];
        const tf = calculateTF(term, document);
        const idf = this.idfCache.get(term) || 0;
        tfidfScore += tf * idf;
      });
      
      if (corrections.length > 0) {
        const totalSimilarity = corrections.reduce((sum, corr) => sum + corr.similarity, 0);
        const avgSimilarity = totalSimilarity / corrections.length;
        typoScore = avgSimilarity * typoScorePenalty * corrections.length;
      }
      
      if (enablePhraseBonus && correctedTokens.length > 1) {
        phraseBonus = this.calculatePhraseBonus(correctedTokens, productIndex);
      }
      
      if (boostExactMatch) {
        const fullQuery = query.toLowerCase();
        const correctedQuery = correctedTokens.join(' ').toLowerCase();
        const productName = (product.name || '').toLowerCase();
        const categoryName = (product.subCategory?.name || '').toLowerCase();
        const description = (product.description || '').toLowerCase();
        
        if (productName.includes(fullQuery) || productName.includes(correctedQuery)) {
          exactMatchBonus += 3.0;
        } else if (categoryName.includes(fullQuery) || categoryName.includes(correctedQuery)) {
          exactMatchBonus += 2.0;
        } else if (description.includes(fullQuery) || description.includes(correctedQuery)) {
          exactMatchBonus += 1.0;
        }
      }
      
      const finalScore = tfidfScore + exactMatchBonus + phraseBonus - typoScore;
      
      return {
        ...product,
        _searchScore: finalScore,
        _tfidfScore: tfidfScore,
        _exactMatchBonus: exactMatchBonus,
        _phraseBonus: phraseBonus,
        _typoScore: typoScore,
        _corrections: corrections
      };
    })
    .filter(product => product._searchScore >= minScore)
    .sort((a, b) => b._searchScore - a._searchScore)
    .slice(0, maxResults);
    
    return {
      data: results,
      processedQuery,
      totalResults: results.length
    };
  }

  getSuggestions(partialQuery, maxSuggestions = 5) {
    if (!partialQuery?.trim()) return [];
    
    const query = partialQuery.toLowerCase();
    const suggestions = [];
    
    this.vocabulary.forEach(term => {
      if (term.startsWith(query)) {
        suggestions.push({
          text: term,
          type: 'exact',
          score: term.length
        });
      } else if (term.includes(query)) {
        suggestions.push({
          text: term,
          type: 'contains',
          score: term.length + 1
        });
      } else {
        const similarity = calculateSimilarity(query, term);
        if (similarity >= 0.6) {
          suggestions.push({
            text: term,
            type: 'similar',
            score: 1 / similarity
          });
        }
      }
    });
    
    return suggestions
      .sort((a, b) => a.score - b.score)
      .slice(0, maxSuggestions)
      .map(s => s.text);
  }
}