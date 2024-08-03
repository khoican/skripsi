import {
	FETCH_ORDER_ERROR,
	FETCH_ORDER_REQUEST,
	FETCH_ORDER_SUCCESS,
	FETCH_ORDER_COUNT_REQUEST,
	FETCH_ORDER_COUNT_SUCCESS,
	FETCH_ORDER_COUNT_ERROR,
	FETCH_ORDER_OMZET_REQUEST,
	FETCH_ORDER_OMZET_SUCCESS,
	FETCH_ORDER_OMZET_ERROR,
} from '../actions/orderAction';

const initialState = {
	omzet: null,
	order: null,
	orders: [],
	loading: false,
	error: 'Order not found',
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ORDER_OMZET_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ORDER_OMZET_SUCCESS:
			return {
				...state,
				loading: false,
				omzet: action.payload,
				error: '',
			};
		case FETCH_ORDER_OMZET_ERROR:
			return {
				...state,
				loading: false,
				omzet: null,
				error: action.payload,
			};
		case FETCH_ORDER_COUNT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_ORDER_COUNT_SUCCESS:
			return {
				...state,
				loading: false,
				order: action.payload,
				error: '',
			};
		case FETCH_ORDER_COUNT_ERROR:
			return {
				...state,
				loading: false,
				order: null,
				error: action.payload,
			};
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
