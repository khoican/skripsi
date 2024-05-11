import { login } from '../services/user';

export const postLogin = async (username, password) => {
	const data = {
		username: username,
		password: password,
	};

	try {
		const response = await login(data);

		if (response.status !== 'success') {
			console.log(response.status);

			return {
				status: response.status,
				message: 'Username atau password salah',
			};
		}

		const user = {
			id: response.data.id,
			token: response.data.token,
		};

		localStorage.setItem('user', JSON.stringify(user));

		return {
			status: response.status,
			message: 'Login berhasil',
		};
	} catch (error) {
		return {
			status: 500,
			message: 'Terjadi kesalahan saat melakukan login',
		};
	}
};
