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
}

export const postUser = async (body) => {
	const response = await axios.post(`${getAppUrl()}api/users/register`, body)
	.then(res => {if(res.status == 201) console.log(res.data)})
	.catch (e => console.log(e))
	return response
};

export const deleteUser = async (id) => {
	const response = await axios.delete(`${getAppUrl()}api/users/${id}`)
	.then(res => {if(res.status == 201) console.log(res.data)})
	.catch (e => console.log(e))
	return response
};

export const editUser = async (id, body) => {
	await axios.patch(`${getAppUrl()}api/users/${id}`, body)
	.then(res => {if(res.status == 201) console.log(res.data)})
	.catch (e => console.log(e))
};

export const getUserById = async (id) => {
	try {
		const response = await axios.get(`${getAppUrl()}api/users/${id}`);
		return response.data.data;
	} catch (error){
		console.log(error);
	}
};

export const getAllUsers = async () => {
	const response = await axios.get(`${getAppUrl()}api/users`);
	return response.data.data;
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
