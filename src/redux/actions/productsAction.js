import { getAllProducts } from '../../../services/product';

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

export const fetchProductsRequest = () => ({
	type: 'FETCH_PRODUCT_REQUEST',
});

export const fetchProductsSuccess = (products) => ({
	type: 'FETCH_PRODUCT_SUCCESS',
	payload: products,
});

export const fetchProductsError = (error) => ({
	type: 'FETCH_PRODUCT_ERROR',
	payload: error,
});

export const fetchProducts = (skip, take) => {
	return async (dispatch) => {
		dispatch(fetchProductsRequest());
		try {
			const data = await getAllProducts(skip, take);
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsError(error.message));
		}
	};
};
