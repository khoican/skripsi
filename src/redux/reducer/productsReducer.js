import {
	FETCH_PRODUCT_ERROR,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_DASHBOARD_ERROR,
	FETCH_PRODUCT_DASHBOARD_SUCCESS,
	FETCH_PRODUCT_DASHBOARD_REQUEST,
	FETCH_PRODUCT_COUNT_REQUEST,
	FETCH_PRODUCT_COUNT_SUCCESS,
	FETCH_PRODUCT_COUNT_ERROR,
} from '../actions/productsAction';

const initialState = {
	product: null,
	products: [],
	loading: false,
	error: 'Products not found',
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_COUNT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCT_COUNT_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload,
				error: '',
			};
		case FETCH_PRODUCT_COUNT_ERROR:
			return {
				...state,
				loading: false,
				product: 0,
				error: action.payload,
			}
		case FETCH_PRODUCT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
				error: '',
			};
		case FETCH_PRODUCT_ERROR:
			return {
				...state,
				loading: false,
				products: [],
				error: action.payload,
			};
		case FETCH_PRODUCT_DASHBOARD_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCT_DASHBOARD_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
				error: '',
			};
		case FETCH_PRODUCT_DASHBOARD_ERROR:
			return {
				...state,
				loading: false,
				products: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default productsReducer;
