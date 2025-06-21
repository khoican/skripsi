// worker.js

const textProcessor = {
  caseFold: (text) => text.toLowerCase(),
  clean: (text) => text.replace(/\s+/g, ' ').replace(/[^\w\s]/g, ' '),
  tokenize: (text) => text.split(/\s+/).filter(token => token.length > 0),
  
  preprocess: (text) => {
    if (!text) return [];
    let processed = textProcessor.caseFold(text);
    processed = textProcessor.clean(processed);
    let tokens = textProcessor.tokenize(processed);
    return tokens;
  }
};

const levenshteinDistance = (str1, str2) => {
  const matrix = [];
  const len1 = str1.length;
  const len2 = str2.length;

  for (let i = 0; i <= len2; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len1; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[len2][len1];
};

const fuzzyMatch = (query, target, threshold = 0.6) => {
  const distance = levenshteinDistance(query.toLowerCase(), target.toLowerCase());
  const maxLength = Math.max(query.length, target.length);
  const similarity = 1 - (distance / maxLength);
  return similarity >= threshold ? similarity : 0;
};

class TFIDF {
  constructor() {
    this.documents = [];
    this.vocabulary = new Set();
    this.idf = new Map();
    this.isIndexed = false;
  }

  addDocument(doc, id, productData) {
    const tokens = textProcessor.preprocess(doc);
    this.documents.push({ tokens, id, originalText: doc, productData });
    tokens.forEach(token => this.vocabulary.add(token));
  }

  buildIndex() {
    const docCount = this.documents.length;
    this.vocabulary.forEach(term => {
      const docsWithTerm = this.documents.filter(doc => 
        doc.tokens.includes(term)
      ).length;
      this.idf.set(term, Math.log(docCount / (docsWithTerm + 1)));
    });
    this.isIndexed = true;
  }

  calculateTF(tokens) {
    const tf = new Map();
    const totalTokens = tokens.length;
    
    tokens.forEach(token => {
      tf.set(token, (tf.get(token) || 0) + 1);
    });
    
    tf.forEach((count, term) => {
      tf.set(term, count / totalTokens);
    });
    
    return tf;
  }

  calculateTFIDF(tokens) {
    const tf = this.calculateTF(tokens);
    const tfidf = new Map();
    
    tf.forEach((tfValue, term) => {
      const idfValue = this.idf.get(term) || 0;
      tfidf.set(term, tfValue * idfValue);
    });
    
    return tfidf;
  }

  search(query, options = {}) {
    const {
      minScore = 0.1,
      maxResults = 50,
      exactMatchBonus = 2,
      similarityThreshold = 0.6
    } = options;

    if (!this.isIndexed) {
      this.buildIndex();
    }

    const startTime = performance.now();
    const queryTokens = textProcessor.preprocess(query);
    const results = [];

    const batchSize = 100;
    let processed = 0;

    const processBatch = () => {
      const endIndex = Math.min(processed + batchSize, this.documents.length);
      
      for (let i = processed; i < endIndex; i++) {
        const doc = this.documents[i];
        let score = 0;
        const docTFIDF = this.calculateTFIDF(doc.tokens);
        
        queryTokens.forEach(queryToken => {
          if (docTFIDF.has(queryToken)) {
            score += docTFIDF.get(queryToken) * exactMatchBonus;
          } else {
            let bestMatch = 0;
            doc.tokens.forEach(docToken => {
              const similarity = fuzzyMatch(queryToken, docToken, similarityThreshold);
              if (similarity > bestMatch) {
                bestMatch = similarity;
              }
            });
            score += bestMatch * 0.8;
          }
        });

        const queryTermsInDoc = queryTokens.filter(token => 
          doc.tokens.some(docToken => 
            token === docToken || fuzzyMatch(token, docToken, 0.7) > 0
          )
        ).length;
        
        score += (queryTermsInDoc / queryTokens.length) * 1.5;

        const productName = doc.productData.name || '';
        if (productName.toLowerCase().includes(query.toLowerCase())) {
          score += 3;
        }

        if (score >= minScore) {
          results.push({ 
            ...doc.productData, 
            searchScore: score,
            matchedTerms: doc.tokens.filter(token =>
              queryTokens.some(qToken => 
                token === qToken || fuzzyMatch(qToken, token, 0.7) > 0
              )
            )
          });
        }
      }
      
      processed = endIndex;
      
      self.postMessage({
        type: 'SEARCH_PROGRESS',
        progress: (processed / this.documents.length) * 100
      });
    };

    while (processed < this.documents.length) {
      processBatch();
    }

    const endTime = performance.now();
    const sortedResults = results
      .sort((a, b) => b.searchScore - a.searchScore)
      .slice(0, maxResults);

    return {
      results: sortedResults,
      totalResults: results.length,
      executionTime: Math.round(endTime - startTime),
      query: query
    };
  }
}

let searchEngine = null;

self.onmessage = function(e) {
  const { type, data } = e.data;

  switch (type) {
    case 'INIT_SEARCH_ENGINE':
      try {
        searchEngine = new TFIDF();
        
        data.products.forEach(product => {
          const searchableText = [
            product.name || '',
          ].join(' ');
          
          searchEngine.addDocument(searchableText, product.id, product);
        });

        searchEngine.buildIndex();
        
        self.postMessage({
          type: 'INIT_SUCCESS',
          message: `Search engine initialized with ${data.products.length} products`
        });
      } catch (error) {
        self.postMessage({
          type: 'INIT_ERROR',
          error: error.message
        });
      }
      break;

    case 'SEARCH':
      try {
        if (!searchEngine) {
          throw new Error('Search engine not initialized');
        }

        const searchResults = searchEngine.search(data.query, data.options);
        
        self.postMessage({
          type: 'SEARCH_SUCCESS',
          results: searchResults
        });
      } catch (error) {
        self.postMessage({
          type: 'SEARCH_ERROR',
          error: error.message
        });
      }
      break;

    case 'TERMINATE':
      self.close();
      break;

    default:
      self.postMessage({
        type: 'ERROR',
        error: `Unknown message type: ${type}`
      });
  }
};