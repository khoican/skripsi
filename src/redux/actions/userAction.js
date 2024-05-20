import { getAllUsers, postUser, editUser, getUserById } from '../../../services/user';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USERBYID_REQUEST = 'FETCH_USERBYID_REQUEST';
export const FETCH_USERBYID_SUCCESS = 'FETCH_USERBYID_SUCCESS';
export const FETCH_USERBYID_ERROR = 'FETCH_USERBYID_ERROR';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

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
export const fetchUserByIdRequest = () => ({
	type: 'FETCH_USERBYID_REQUEST',
});

export const fetchUserByIdSuccess = (users) => ({
	type: 'FETCH_USERBYID_SUCCESS',
	payload: users,
});

export const fetchUserByIdError = (error) => ({
	type: 'FETCH_USERBYID_ERROR',
	payload: error,
});

export const editUserRequest = () => ({
	type: 'EDIT_USER_REQUEST',
});
export const editUserSuccess = (id, user) => ({
	type: 'EDIT_USER_SUCCESS',
	payload: [id, user]
});
export const editUserError = (error) => ({
	type: 'EDIT_USER_ERROR',
	payload: error
});

export const createUserRequest = () => ({
	type: 'CREATE_USER_REQUEST',
});

export const createUserSuccess = (user) => ({
	type: 'CREATE_USER_SUCCESS',
	payload: user,
});

export const createUserError = (error) => ({
	type: 'CREATE_USER_ERROR',
	payload: error,
});

export const createNewUser = (body) => {
	return async (dispatch) => {
		dispatch(createUserRequest());
		try {
			await postUser(body);
			// dispatch(createUserSuccess(data));
		} catch (error) {
			dispatch(createUserError(error.message));
		}
	};
};

export const editUserById = (id, body) => {
	return async (dispatch) => {
		dispatch(editUserRequest());
		try {
			await editUser(id, body);
			// dispatch(editUserIdSuccess(data));
		} catch (error) {
			dispatch(editUserError(error.message));
		}
	}
}

export const fetchUserById = (id) => {
	return async (dispatch) => {
		dispatch(fetchUserByIdRequest());
		try {
			const data = await getUserById(id);
			console.log(data);
			dispatch(fetchUserByIdSuccess(data));
		} catch (error) {
			dispatch(fetchUserByIdError(error.message));
		}
	}
}

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
