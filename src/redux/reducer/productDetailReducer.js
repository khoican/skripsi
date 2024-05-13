import {
	FETCH_PRODUCT_DETAIL_ERROR,
	FETCH_PRODUCT_DETAIL_REQUEST,
	FETCH_PRODUCT_DETAIL_SUCCESS,
} from '../actions/productDetailAction';

const initialState = {
	product: [],
	loading: false,
	error: '',
};

const productDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_DETAIL_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCT_DETAIL_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload,
				error: '',
			};
		case FETCH_PRODUCT_DETAIL_ERROR:
			return {
				...state,
				loading: false,
				product: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default productDetailReducer;
