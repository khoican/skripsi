import { getAllOrders } from '../../../services/order';

export const FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR';

export const fetchOrdersRequest = () => ({
	type: 'FETCH_ORDER_REQUEST',
});

export const fetchOrdersSuccess = (orders) => ({
	type: 'FETCH_ORDER_SUCCESS',
	payload: orders,
});

export const fetchOrdersError = (error) => ({
	type: 'FETCH_ORDER_ERROR',
	payload: error,
});

export const fetchOrders = () => {
	return async (dispatch) => {
		dispatch(fetchOrdersRequest());
		try {
			const data = await getAllOrders();
			console.log(data);
			dispatch(fetchOrdersSuccess(data));
		} catch (error) {
			dispatch(fetchOrdersError(error.message));
		}
	};
};
