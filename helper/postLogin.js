import { getCartByUserId } from '../services/cartProduct';
import { login, postUser } from '../services/user';

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
			name: response.data.name,
			address: response.data.address,
			role: response.data.role,
			phoneNumber: response.data.phoneNumber,
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
			message: 'Usernmae atau password anda salah',
		};
	}
};

export const postLoginAsGuest = async () => {
	const randomInt = Math.floor(Math.random() * 10000000) + 1;

	const data = {
		name: `Guest-${randomInt}`,
		username: `guest-${randomInt}`,
	};

	try {
		const response = await postUser(data);

		if (response.status !== 'success') {
			console.log(response.status);
			return {
				status: response.status,
				message: 'Gagal login sebagai guest',
			};
		}

		const user = {
			id: response.data.id,
			name: response.data.name,
			address: response.data.address,
			role: response.data.role,
			phoneNumber: response.data.phoneNumber,
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
			message: 'Gagal login sebagai guest',
		};
	}
};

const getCartUser = async (id) => {
	const response = await getCartByUserId(id);

	localStorage.setItem('cart', JSON.stringify(response));
};
