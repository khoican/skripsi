import { deleteCartProduct, getCartByUserId } from '../services/cartProduct';
import { decryptData, encryptData } from './cryptoData';

export const deleteCart = async (id) => {
	let user = decryptData('user');
	try {
		const response = await deleteCartProduct(id);

		if (response.status !== 200) {
			console.log('error :' + response.data);

			return {
				status: response.status,
				message: 'Produk gagal di hapus dari keranjang',
			};
		}

		localStorage.removeItem('cart');
		const carts = await getCartByUserId(user.id);
		encryptData('cart', carts);

		return {
			status: response.status,
			message: 'Produk berhasil di hapus dari keranjang',
		};
	} catch (error) {
		console.log(error);
	}
};
