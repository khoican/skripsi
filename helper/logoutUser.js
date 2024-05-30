import { logout } from '../services/user';
import { decryptData } from './cryptoData';

export const logoutUser = async () => {
	const user = decryptData('user');

	try {
		const response = await logout({
			id: user.id,
		});

		if (response.status !== 'success') {
			console.log(response);

			return {
				status: response.status,
				message: 'Logout gagal',
			};
		}

		localStorage.removeItem('user');
		return {
			status: response.status,
			message: 'Logout berhasil',
		};
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			message: 'Terjadi kesalahan saat melakukan logout',
		};
	}
};
