import axios from 'axios';
import { getAppUrl } from '../config/app';

export const login = async (data) => {
	try {
		const response = await axios.post(
			`${getAppUrl()}api/users/login`,
			data,
		);
		if (response.status !== 200) {
			console.log('error :' + response.data);

			return response.data;
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const updateUser = async (id, data) => {
	try {
		const response = await axios.patch(
			`${getAppUrl()}api/users/${id}`,
			data,
		);
		if (response.status !== 200) {
			console.log('error :' + response.data);

			return response.data;
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const logout = async (body) => {
	try {
		const response = await axios.post(
			`${getAppUrl()}api/users/logout`,
			body,
		);
		if (response.status !== 200) {
			console.log('error :' + response.data);
		}

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
