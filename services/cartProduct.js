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

		let responseData = response.data.data;
		return responseData;
	} catch (error) {
		console.log(error);
	}
};
