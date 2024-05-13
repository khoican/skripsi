import { updatedCartProduct } from '../services/cartProduct';

export const updateCart = async (id, notes, quantity, productId) => {
	const response = await updatedCartProduct(id, {
		quantity: quantity,
		notes: notes,
		cartId: id,
		productId: productId,
	});

	if (response.status !== 'success') {
		console.log('error :' + response.data);
	}

	setLocalStorage(response.data);
};

const setLocalStorage = (response) => {
	let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

	let existingData = false;
	existingCart = existingCart.map((item) => {
		if (item.productId === response.productId) {
			existingData = true;
			item.quantity = response.quantity;
			item.notes = response.notes;
		}

		return item;
	});
	if (existingData === false) {
		existingCart.push(response);
	}

	localStorage.setItem('cart', JSON.stringify(existingCart));
};
