import { computeTFIDF, getPrecomputedTFIDF } from './computeTFIDF';
import { levenshteinDistance } from './levenshtein';
import { tfidf } from './tfidf';
import { tokenize } from './tokenization';

const findClosestToken = (target, tokens) => {
	if (!tokens || tokens.length === 0) {
		return null;
	}

	if (!target) {
		return null;
	}

	const closestMatch = tokens
		.map((token) => ({
			token,
			distance: levenshteinDistance(target, token),
		}))
		.sort((a, b) => a.distance - b.distance)[0];

	if (!closestMatch) {
		return null;
	}

	return closestMatch && closestMatch.distance <= Math.ceil(target.length / 2)
		? closestMatch.token
		: null;
};

export const searchProducts = (query, products) => {
	const startTime = performance.now();

	const queryTokens = tokenize(query);

	const allTerms = Array.from(
		new Set(products.flatMap((product) => tokenize(product.name))),
	);

	const tfidfMatrix = products.map((product) => {
		const productTokens = tokenize(product.name);
		if (!productTokens || productTokens.length === 0) {
			return { product, score: 0, totalDistance: 0, exactMatchCount: 0 };
		}

		const tfidfValues = {};
		allTerms.forEach((term) => {
			tfidfValues[term] = tfidf(
				term,
				product.name,
				products.map((p) => p.name),
			);
		});

		let totalDistance = 0;

		const correctedTokens = queryTokens.map((token) => {
			const closestToken = findClosestToken(token, productTokens);

			if (closestToken) {
				const distance = levenshteinDistance(token, closestToken);
				totalDistance += distance;
				console.log(
					`Distance from "${token}" to "${closestToken}":`,
					distance,
				);
				return closestToken;
			}
			return token;
		});

		const exactMatchCount = correctedTokens.filter(
			(token) => productTokens && productTokens.includes(token),
		).length;

		const totalScore = correctedTokens.reduce((acc, token) => {
			return acc + (tfidfValues[token] || 0);
		}, 0);

		const exactMatchBonus = exactMatchCount * 2;

		const adjustedScore =
			totalScore + exactMatchBonus - totalDistance * 0.1;

		return {
			product,
			score: adjustedScore,
			totalDistance,
			exactMatchCount,
		};
	});

	console.log(tfidfMatrix);

	const data = tfidfMatrix
		.sort((a, b) => b.score - a.score)
		.filter((item) => item.score > 0)
		.map((item) => item.product);

	const endTime = performance.now();
	const executionTime = endTime - startTime;

	return { data, executionTime };
};

// export const searchProducts = (query, products) => {
// 	const startTime = performance.now();

// 	computeTFIDF(products);
// 	let tfidfCache = getPrecomputedTFIDF();

// 	if (!tfidfCache) {
// 		console.error('TF-IDF Cache tidak ditemukan!');
// 		return { data: [], executionTime: 0 };
// 	}

// 	const queryTokens = tokenize(query);
// 	const MIN_TFIDF_SCORE = 0.3;
// 	const MAX_DISTANCE = Math.ceil(query.length / 2);
// 	const MIN_MATCH_COUNT = 1;

// 	const tfidfMatrix = products.map((product) => {
// 		const productTokens = tokenize(product.name);
// 		if (!productTokens || productTokens.length === 0) {
// 			return {
// 				product,
// 				score: 0,
// 				totalDistance: 999,
// 				exactMatchCount: 0,
// 			};
// 		}

// 		let totalDistance = 0;
// 		const correctedTokens = queryTokens.map((token) => {
// 			const closestToken = findClosestToken(token, productTokens);
// 			if (closestToken) {
// 				const distance = levenshteinDistance(token, closestToken);
// 				totalDistance += distance;
// 				return closestToken;
// 			}
// 			return token;
// 		});

// 		const exactMatchCount = correctedTokens.filter((token) =>
// 			productTokens.includes(token),
// 		).length;

// 		const tfidfValues = tfidfCache[product.name] || {};
// 		const totalScore = correctedTokens.reduce((acc, token) => {
// 			return acc + (tfidfValues[token] || 0);
// 		}, 0);

// 		const exactMatchBonus = exactMatchCount * 2;
// 		const adjustedScore =
// 			totalScore + exactMatchBonus - totalDistance * 0.1;

// 		return {
// 			product,
// 			score: adjustedScore,
// 			totalDistance,
// 			exactMatchCount,
// 		};
// 	});

// 	const filteredData = tfidfMatrix
// 		.filter(
// 			(item) =>
// 				item.score >= MIN_TFIDF_SCORE &&
// 				item.totalDistance <= MAX_DISTANCE &&
// 				item.exactMatchCount >= MIN_MATCH_COUNT,
// 		)
// 		.sort((a, b) => b.score - a.score)
// 		.map((item) => item.product);

// 	const endTime = performance.now();
// 	const executionTime = endTime - startTime;

// 	return { data: filteredData, executionTime };
// };
