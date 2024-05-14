import { getAllCategories } from '../../../services/category';

export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_ERROR = 'FETCH_CATEGORY_ERROR';

export const fetchCategoriesRequest = () => ({
	type: 'FETCH_CATEGORY_REQUEST',
});

export const fetchCategoriesSuccess = (category) => ({
	type: 'FETCH_CATEGORY_SUCCESS',
	payload: category,
});

export const fetchCategoriesError = (error) => ({
	type: 'FETCH_CATEGORY_ERROR',
	payload: error,
});

export const fetchCategories = () => {
	return async (dispatch) => {
		dispatch(fetchCategoriesRequest());
		try {
			const data = await getAllCategories();
			dispatch(fetchCategoriesSuccess(data));
		} catch (error) {
			dispatch(fetchCategoriesError(error.message));
		}
	};
};
