import { getAllSubCategories } from '../../services/category';

export const FETCH_SUB_CATEGORY_REQUEST = 'FETCH_SUB_CATEGORY_REQUEST';
export const FETCH_SUB_CATEGORY_SUCCESS = 'FETCH_SUB_CATEGORY_SUCCESS';
export const FETCH_SUB_CATEGORY_ERROR = 'FETCH_SUB_CATEGORY_ERROR';

export const fetchSubCategoriesRequest = () => ({
	type: 'FETCH_SUB_CATEGORY_REQUEST',
});

export const fetchSubCategoriesSuccess = (subCategory) => ({
	type: 'FETCH_SUB_CATEGORY_SUCCESS',
	payload: subCategory,
});

export const fetchSubCategoriesError = (error) => ({
	type: 'FETCH_SUB_CATEGORY_ERROR',
	payload: error,
});

export const fetchSubCategories = () => {
	return async (dispatch) => {
		dispatch(fetchSubCategoriesRequest());
		try {
			const data = await getAllSubCategories();
			return dispatch(fetchSubCategoriesSuccess(data));
		} catch {
			return dispatch(fetchSubCategoriesError());
		}
	};
};
