import { computeTFIDF } from './computeTFIDF';
import { searchProducts } from './index';

self.onmessage = function (e) {
	const { searchQuery, products } = e.data;

	// computeTFIDF(products);
	const result = searchProducts(searchQuery, products);
	self.postMessage(result);
};
