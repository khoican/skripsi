import { getCartByUserId, postCartProduct } from '../services/cartProduct';
import { decryptData, encryptData } from './cryptoData';

const postCardByUser = async (qty, note, productId) => {
	const user = decryptData('user');

	const data = {
		quantity: qty,
		notes: note,
		userId: user.id,
		productId: productId,
	};

	try {
		const response = await postCartProduct(data);

		if (response.status !== 200) {
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

const setLocalStorage = (response, qty) => {
	let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

	let existingData = false;
	existingCart = existingCart.map((item) => {
		if (item.productId === response.data.productId) {
			existingData = true;
			item = {
				...item,
				quantity: item.quantity + qty,
			};
		}

		return item;
	});
	if (existingData === false) {
		existingCart.push(response.data);
	}

	localStorage.setItem('cart', JSON.stringify(existingCart));
};

export default postCardByUser;
