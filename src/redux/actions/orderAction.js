import { getAllOrders, getOrderCount, getOrderOmzet, editOrder} from '../../../services/order';

export const FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR';
export const FETCH_ORDER_COUNT_REQUEST = 'FETCH_ORDER_COUNT_REQUEST';
export const FETCH_ORDER_COUNT_SUCCESS = 'FETCH_ORDER_COUNT_SUCCESS';
export const FETCH_ORDER_COUNT_ERROR = 'FETCH_ORDER_COUNT_ERROR';
export const FETCH_ORDER_OMZET_REQUEST = 'FETCH_ORDER_OMZET_REQUEST';
export const FETCH_ORDER_OMZET_SUCCESS = 'FETCH_ORDER_OMZET_SUCCESS';
export const FETCH_ORDER_OMZET_ERROR = 'FETCH_ORDER_OMZET_ERROR';
export const EDIT_ORDER_REQUEST = 'EDIT_ORDER_REQUEST'
export const EDIT_ORDER_SUCCESS = 'EDIT_ORDER_SUCCESS'
export const EDIT_ORDER_ERROR = 'EDIT_ORDER_ERROR'

export const editOrderRequest = () => ({
	type: 'EDIT_ORDER_REQUEST',
})

export const editOrderSuccess = (id, status) => ({
	type: 'EDIT_ORDER_SUCCESS',
	payload: [id, status]
})

export const editOrderError = (error) => ({
	type: 'EDIT_ORDER_ERROR',
	payload: error
})

export const fetchOrderOmzetRequest = () => ({
	type: 'FETCH_ORDER_OMZET_REQUEST',
})

export const fetchOrderOmzetSuccess = (omzet) => ({
	type: 'FETCH_ORDER_OMZET_SUCCESS',
	payload: omzet
})

export const fetchOrderOmzetError = (error) => ({
	type: 'FETCH_ORDER_OMZET_ERROR',
	payload: error
})

export const fetchOrderCountRequest = () => ({
	type: 'FETCH_ORDER_COUNT_REQUEST',
})

export const fetchOrderCountSuccess = (order) => ({
	type: 'FETCH_ORDER_COUNT_SUCCESS',
	payload: order
})

export const fetchOrderCountError = (error) => ({
	type: 'FETCH_ORDER_COUNT_ERROR',
	payload: error
})

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

const editOrderStatus = () => {
	
}

export const fetchOrderOmzet = () => {
	return async (dispatch) => {
		dispatch(fetchOrderOmzetRequest());
		try {
			const data = await getOrderOmzet();
			dispatch(fetchOrderOmzetSuccess(data));
		} catch (error) {
			dispatch(fetchOrderOmzetError(error.message));
		}
	};
}

export const fetchOrderCount = () => {
	return async (dispatch) => {
		dispatch(fetchOrderCountRequest());
		try {
			const data = await getOrderCount();
			dispatch(fetchOrderCountSuccess(data));
		} catch (error) {
			dispatch(fetchOrderCountError(error.message));
		}
	};
}

export const fetchOrders = () => {
	return async (dispatch) => {
		dispatch(fetchOrdersRequest());
		try {
			const data = await getAllOrders();
			dispatch(fetchOrdersSuccess(data));
		} catch (error) {
			dispatch(fetchOrdersError(error.message));
		}
	};
};
