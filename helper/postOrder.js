import {
	postOrderHistoryProduct,
	postOrderProduct,
} from '../services/orderProduct';

export const postOrder = async (data) => {
	const user = JSON.parse(localStorage.getItem('user'));

	const orderData = {
		name: data.name,
		phoneNumber: data.phoneNumber,
		address: data.address,
		notes: data.notes,
		userId: user.id,
		totalPrice: data.totalPrice,
		status: 'PROSES',
	};

	console.log(orderData);

	try {
		const response = await postOrderProduct(orderData);

		if (response.status !== 200) {
			console.log('error :' + response.data);
		}

		localStorage.removeItem('cart');
		console.log(response.data);

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
