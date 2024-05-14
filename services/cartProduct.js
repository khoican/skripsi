import axios from 'axios';
import { getAppUrl } from '../config/app';

export const getCartByUserId = async (id) => {
	const response = await axios.get(
		`${getAppUrl()}api/cartproducts?userid=${id}`,
	);

	return response.data.data;
};

export const postCartProduct = async (data) => {
	try {
		const response = await axios.post(
			`${getAppUrl()}api/cartproducts`,
			data,
		);
		if (response.status !== 200) {
			console.log('error :' + response.data);
		}

		let responseData = response;
		return responseData;
	} catch (error) {
		console.log(error);
	}
};

export const updatedCartProduct = async (id, data) => {
	try {
		const response = await axios.patch(
			`${getAppUrl()}api/cartproducts/${id}`,
			data,
		);
		if (response.status !== 200) {
			console.log('error :' + response.data);
		}

		let responseData = response.data;
		return responseData;
	} catch (error) {
		console.log(error);
	}
};

export const deleteCartProduct = async (id) => {
	try {
		const response = await axios.delete(
			`${getAppUrl()}api/cartproducts/${id}`,
		);
		if (response.status !== 200) {
			console.log('error :' + response.data);
		}

		return response;
	} catch (error) {
		console.log(error);
	}
};
