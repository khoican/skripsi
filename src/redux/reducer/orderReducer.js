import {
	FETCH_ORDER_ERROR,
	FETCH_ORDER_REQUEST,
	FETCH_ORDER_SUCCESS,
} from '../actions/orderAction';

const initialState = {
	orders: [],
	loading: false,
	error: 'Order not found',
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ORDER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ORDER_SUCCESS:
			return {
				...state,
				loading: false,
				orders: action.payload,
				error: '',
			};
		case FETCH_ORDER_ERROR:
			return {
				...state,
				loading: false,
				orders: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default orderReducer;
