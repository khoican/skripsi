import axios from 'axios';
import { getAppUrl } from '../config/app';

export const getAllCategories = (callback) => {
	axios({
		method: 'get',
		url: `${getAppUrl()}api/category`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(function (response) {
		callback(response.data);
	});
};

export const getAllSubCategories = (callback) => {
	axios({
		method: 'get',
		url: `${getAppUrl()}api/subCategory`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(function (response) {
		callback(response.data);
	});
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
