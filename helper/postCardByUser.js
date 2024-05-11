import { postCartProduct } from '../services/cartProduct';

const postCardByUser = async (qty, note, userId, productId) => {
	const data = {
		quantity: qty,
		notes: note,
		userId: userId,
		productId: productId,
	};

	const response = await postCartProduct(data);
	console.log(response);
	localStorage.setItem('cart', JSON.stringify(response));
};

export default postCardByUser;
