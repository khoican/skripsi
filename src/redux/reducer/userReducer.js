import {
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR,
	FETCH_USERBYID_REQUEST,
	FETCH_USERBYID_SUCCESS,
	FETCH_USERBYID_ERROR,
	CREATE_USER_REQUEST,
	CREATE_USER_SUCCESS,
	CREATE_USER_ERROR,
	EDIT_USER_REQUEST,
	EDIT_USER_SUCCESS,
	EDIT_USER_ERROR,
} from '../actions/userAction';

const initialState = {
	users: [],
	id: '',
	loading: false,
	error: 'User not found',
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_REQUEST:
				return {
					...state,
					loading: true,
				};
		case FETCH_USER_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: '',
			};
		case FETCH_USER_ERROR:
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload,
			};
		case FETCH_USERBYID_REQUEST:
			return {
				...state,
				loading: false,

			};
		case FETCH_USERBYID_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: '',
			};
		case FETCH_USERBYID_ERROR:
			return {
				...state,
				loading: false,
				users: [],
				id: '',
				error: action.payload,
			};
		case CREATE_USER_REQUEST:
			return {
				...state,
				loading: true,
			}
		case CREATE_USER_SUCCESS:
			return {
				...state,
				loading: false,
				users: [...state.users, action.payload],
				error: '',
			}
		case CREATE_USER_ERROR:
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload,
			}
		case EDIT_USER_REQUEST:
			return {
				...state,
				loading: true,
				}
		case EDIT_USER_SUCCESS:
			return {
				...state,
				users: [...state.users, action.payload],
				id: [...state.id, action.payload],
				loading: true,
				error: ''
				}
		default:
			return state;
	}
};

export default userReducer;
