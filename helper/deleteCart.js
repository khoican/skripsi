import { deleteCartProduct } from '../services/cartProduct';

export const deleteCart = async (id) => {
	const existingCart = JSON.parse(localStorage.getItem('cart'));

	try {
		const response = await deleteCartProduct(id);

		if (response.status !== 200) {
			console.log('error :' + response.data);
		}

		if (Array.isArray(existingCart) && existingCart.length > 0) {
			const updatedCart = existingCart.filter((item) => item.id !== id);

			localStorage.setItem('cart', JSON.stringify(updatedCart));
		}

		return response.status;
	} catch (error) {
		console.log(error);
	}
};
