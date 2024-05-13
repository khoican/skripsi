import axios from 'axios';
import { getAppUrl } from '../config/app';

export const getAllCategories = async () => {
	const response = await axios.get(`${getAppUrl()}api/category`);
	return response.data.data;
};

export const getAllSubCategories = async () => {
	const response = await axios.get(`${getAppUrl()}api/subCategory`);
	return response.data.data;
};

export const getSubCategoriesBySlug = (callback, slug) => {
	axios({
		method: 'get',
		url: `${getAppUrl()}api/subCategory/${slug}`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(function (response) {
		callback(response.data);
	});
};
