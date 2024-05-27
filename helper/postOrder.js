import {
	postOrderHistoryProduct,
	postOrderProduct,
} from '../services/orderProduct';
import { decryptData } from './cryptoData';
import { deleteCart } from './deleteCart';

export const postOrder = async (data) => {
	const user = decryptData('user');

	const orderData = {
		name: data.name,
		phoneNumber: data.phoneNumber,
		address: data.address,
		notes: data.notes,
		userId: user.id,
		totalPrice: data.totalPrice,
		status: 'PROSES',
	};

	try {
		const response = await postOrderProduct(orderData);

		if (response.status !== 200) {
			console.log('error :' + response.data);
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const orderHistory = async (data) => {
	try {
		const response = await postOrderHistoryProduct(data);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
