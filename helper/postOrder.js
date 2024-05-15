import {
	postOrderHistoryProduct,
	postOrderProduct,
} from '../services/orderProduct';
import { deleteCart } from './deleteCart';

export const postOrder = async (data) => {
	const user = JSON.parse(localStorage.getItem('user'));
	const carts = JSON.parse(localStorage.getItem('cart'));

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

		carts.forEach((cart) => {
			deleteCart(cart.id);
		});

		localStorage.removeItem('cart');
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
