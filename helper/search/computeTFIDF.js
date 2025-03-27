import { tfidf } from './tfidf';
import { tokenize } from './tokenization';

let precomputedTFIDF = null;

export const computeTFIDF = (products) => {
	const allTerms = Array.from(
		new Set(products.flatMap((product) => tokenize(product.name))),
	);

	precomputedTFIDF = {};

	products.forEach((product) => {
		const tfidfValues = {};
		allTerms.forEach((term) => {
			tfidfValues[term] = tfidf(
				term,
				product.name,
				products.map((p) => p.name),
			);
		});
		precomputedTFIDF[product.name] = tfidfValues;
	});
};

export const getPrecomputedTFIDF = () => precomputedTFIDF;
