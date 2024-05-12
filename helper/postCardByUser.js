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
		console.log(response);
		setLocalStorage(response, qty);
	} catch (error) {
		console.log(error);
	}
};

const setLocalStorage = (response, qty) => {
	let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

	let existingData = false;
	existingCart = existingCart.map((item) => {
		if (item.productId === response.productId) {
			existingData = true;
			item.notes = response.notes;
			item.quantity += qty;
		}

		return item;
	});
	if (existingData === false) {
		existingCart.push(response);
	}

	localStorage.setItem('cart', JSON.stringify(existingCart));
};

export default postCardByUser;
