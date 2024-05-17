import { getAllUsers } from '../../../services/user';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const fetchUsersRequest = () => ({
	type: 'FETCH_USER_REQUEST',
});

export const fetchUsersSuccess = (users) => ({
	type: 'FETCH_USER_SUCCESS',
	payload: users,
});

export const fetchUsersError = (error) => ({
	type: 'FETCH_USER_ERROR',
	payload: error,
});

export const fetchUsers = () => {
	return async (dispatch) => {
		dispatch(fetchUsersRequest());
		try {
			const data = await getAllUsers();
			dispatch(fetchUsersSuccess(data));
		} catch (error) {
			dispatch(fetchUsersError(error.message));
		}
	};
};
