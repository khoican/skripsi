import { updatedCartProduct } from '../services/cartProduct';

export const updateCart = async (id, notes, quantity, productId) => {
	try {
		const response = await updatedCartProduct(id, {
			quantity: quantity,
			notes: notes,
			cartId: id,
			productId: productId,
		});

		setLocalStorage(response.data);

		return {
			status: 'success',
			message: 'Barang ditambahkan ke keranjang',
		};
	} catch (error) {
		console.log(error);

		return {
			status: 'error',
			message: 'Barang gagal ditambahkan ke keranjang',
		};
	}
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
