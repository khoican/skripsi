import { postCartProduct } from '../services/cartProduct';

const postCardByUser = (qty, note, userId, productId) => {
	const data = {
		quantity: qty,
		notes: note,
		userId: userId,
		productId: productId,
	};

	qty > 0 && postCartProduct(data).then((res) => console.log(res));
};

export default postCardByUser;
