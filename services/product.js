import axios from 'axios';
import { getAppUrl } from '../config/app';

export const getAllProducts = (callback) => {
	axios({
		method: 'get',
		url: `${getAppUrl()}api/products`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(function (response) {
		callback(response.data);
	});
};

export const getProductBySlug = (slug, callback) => {
	axios({
		method: 'get',
		url: `${getAppUrl()}api/products/${slug}`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(function (response) {
		callback(response);
	});
};
