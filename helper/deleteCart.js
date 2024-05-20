import { deleteCartProduct } from '../services/cartProduct';

export const deleteCart = async (id) => {
	try {
		const response = await deleteCartProduct(id);

		if (response.status !== 200) {
			console.log('error :' + response.data);

			return {
				status: response.status,
				message: 'Produk gagal di hapus dari keranjang',
			};
		}

		return {
			status: response.status,
			message: 'Produk berhasil di hapus dari keranjang',
		};
	} catch (error) {
		console.log(error);
	}
};
