import axios from 'axios';
import { getAppUrl } from '../config/app';

export const getAllProducts = async (skip = 0, take = 10) => {
	const response = await axios.get(
		`${getAppUrl()}api/products?skip=${skip}&take=${take}`,
	);
	return response.data.data;
};

export const getProductBySlug = async (id) => {
	const response = await axios({
		method: 'get',
		url: `${getAppUrl()}api/products/${id}`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((res) => {
		return res.data.data;
	});

	return response;
};

export const searchProductByName = async (query) => {
	const response = await axios({
		method: 'get',
		url: `${getAppUrl()}api/products?name=${query}`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((res) => {
		return res.data.data;
	});

	return response;
};
