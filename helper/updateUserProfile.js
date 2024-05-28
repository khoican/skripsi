import { getCartByUserId } from '../services/cartProduct';
import { updateUser } from '../services/user';
import { encryptData } from './cryptoData';

export const updateUserProfile = async (id, data) => {
	const profile = {
		name: data.name,
		oldPassword: data.oldPassword,
		newPassword: data.newPassword,
		phoneNumber: data.phoneNumber,
		address: data.address,
	};

	try {
		const response = await updateUser(id, profile);

		if (response.status !== 'success') {
			console.log(response);

			return {
				status: response.status,
				message: 'Gagal memperbarui profil',
			};
		}
		localStorage.removeItem('user');

		const carts = await getCartByUserId(response.data.id);
		let cartTotal;
		carts.forEach((cart) => {
			cartTotal = cartTotal ? cartTotal + cart.quantity : cart.quantity;
		});

		const user = {
			id: response.data.id,
			name: response.data.name,
			address: response.data.address,
			role: response.data.role,
			phoneNumber: response.data.phoneNumber,
			token: response.data.token,
			cart: cartTotal,
		};

		encryptData('user', user);

		return {
			status: response.status,
			message: 'Profil berhasil diperbarui',
		};
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			message: 'Terjadi kesalahan saat memperbarui profil',
		};
	}
};
