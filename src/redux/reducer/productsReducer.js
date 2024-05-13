import {
	FETCH_PRODUCT_ERROR,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_REQUEST,
} from '../actions/productsAction';

const initialState = {
	products: [],
	loading: false,
	error: 'Products not found',
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};

export default productsReducer;
