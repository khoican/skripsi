import {
	FETCH_CATEGORY_ERROR,
	FETCH_CATEGORY_REQUEST,
	FETCH_CATEGORY_SUCCESS,
} from '../actions/categoryAction';

const initialState = {
	category: [],
	loading: false,
	error: 'Category not found',
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CATEGORY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_CATEGORY_SUCCESS:
			return {
				...state,
				loading: false,
				category: action.payload,
				error: '',
			};
		case FETCH_CATEGORY_ERROR:
			return {
				...state,
				loading: false,
				category: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default categoryReducer;
