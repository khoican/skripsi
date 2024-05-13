import {
	FETCH_SUB_CATEGORY_REQUEST,
	FETCH_SUB_CATEGORY_SUCCESS,
	FETCH_SUB_CATEGORY_ERROR,
} from '../actions/subCategoryAction';

const initialState = {
	category: [],
	loading: false,
	error: 'Category not found',
};

const subCategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SUB_CATEGORY_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_SUB_CATEGORY_SUCCESS:
			return {
				...state,
				loading: false,
				category: action.payload,
				error: '',
			};
		case FETCH_SUB_CATEGORY_ERROR:
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

export default subCategoryReducer;
