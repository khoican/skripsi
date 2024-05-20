import { postCartProduct } from '../services/cartProduct';

const postCardByUser = async (qty, note, productId) => {
	const user = JSON.parse(localStorage.getItem('user'));

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
