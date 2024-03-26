import axios from 'axios';
import { getAppUrl } from '../config/app';

export const getAllProducts = async () => {
	const response = await axios.get(`${getAppUrl()}api/products`);
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
