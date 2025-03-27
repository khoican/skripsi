import { tokenize } from './tokenization';

const termFrequency = (term, doc) => {
	const tokens = tokenize(doc);
	const termCount = tokens.filter((token) => token === term).length;
	return termCount / tokens.length;
};

const inverseDocumentFrequency = (term, docs) => {
	const docsContainingTerm = docs.filter((doc) =>
		tokenize(doc).includes(term),
	).length;
	return Math.log(docs.length / (1 + docsContainingTerm));
};

export const tfidf = (term, doc, docs) => {
	return termFrequency(term, doc) * inverseDocumentFrequency(term, docs);
};
