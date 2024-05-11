import { postCartProduct } from '../services/cartProduct';

const postCardByUser = async (qty, note, productId) => {
	const user = JSON.parse(localStorage.getItem('user'));

	const data = {
		quantity: qty,
		notes: note,
		userId: user.id,
		productId: productId,
	};

	const response = await postCartProduct(data);
	console.log(response);
	localStorage.setItem('cart', JSON.stringify(response));
};

export default postCardByUser;
