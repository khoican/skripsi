import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from '../reducer/productDetailReducer';
import productsReducer from '../reducer/productsReducer';

export default configureStore({
	reducer: {
		productDetail: productDetailReducer,
		fetchProducts: productsReducer,
	},
});
