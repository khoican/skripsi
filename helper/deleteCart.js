import { deleteCartProduct } from '../services/cartProduct';

export const deleteCart = async (id) => {
	const existingCart = JSON.parse(localStorage.getItem('cart'));

	try {
		const response = await deleteCartProduct(id);

		if (response.status !== 200) {
			console.log('error :' + response.data);

			return {
				status: response.status,
				message: 'Produk gagal di hapus dari keranjang',
			};
		}

		if (Array.isArray(existingCart) && existingCart.length > 0) {
			const updatedCart = existingCart.filter((item) => item.id !== id);

			localStorage.setItem('cart', JSON.stringify(updatedCart));
		}

		return {
			status: response.status,
			message: 'Produk berhasil di hapus dari keranjang',
		};
	} catch (error) {
		console.log(error);
	}
};
