import { getCartByUserId, updatedCartProduct } from '../services/cartProduct';
import { decryptData, encryptData } from './cryptoData';

export const updateCart = async (id, notes, quantity, productId) => {
	let user = decryptData('user');

	if (!user) {
		return {
			status: 'error',
			message: 'User tidak ditemukan. Harap login kembali.',
		};
	}

	try {
		const response = await updatedCartProduct(id, {
			quantity: quantity,
			notes: notes,
			cartId: id,
			productId: productId,
		});

		if (response.status !== 'success') {
			return {
				status: 'error',
				message: 'Barang gagal ditambahkan ke keranjang',
			};
		}

		localStorage.removeItem('cart');
		const carts = await getCartByUserId(user.id);
		encryptData('cart', carts);

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
