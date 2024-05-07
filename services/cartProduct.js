import axios from 'axios';
import { getAppUrl } from '../config/app';

export const postCartProduct = async (data) => {
	await axios
		.post(`${getAppUrl()}api/cartproducts`, data)
		.then((res) => {
			if (res.status !== 200) {
				console.log('error :' + res.data);
			}

			console.log(res.data);
		})
		.catch((error) => {
			console.log(error);
		});
};
