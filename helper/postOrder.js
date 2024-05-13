import {
	postOrderHistoryProduct,
	postOrderProduct,
} from '../services/orderProduct';

export const postOrder = async (data) => {
	const user = JSON.parse(localStorage.getItem('user'));

	orderData = {
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
