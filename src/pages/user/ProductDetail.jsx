import { useEffect, useState } from 'react';
import { getProductBySlug } from '../../../services/product';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
	const [getProduct, setGetProduct] = useState([]);
	const location = useLocation();
	const productId = location.state;

	console.log(useLocation().state);

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 flex gap-5 mt-5">
			<h1>Product Detail</h1>
		</main>
	);
};

export default ProductDetail;
