import axios from "axios";
import { getAppUrl } from "../config/app";

export const postUser = async (body) => {
	const response = await axios.post(`${getAppUrl()}api/users/register`, body)
	.then(res => {if(res.status == 201) console.log(res.data)})
	.catch (e => console.log(e))
	return response
};

export const editUser = async (id, body) => {
	const response = await axios.patch(`${getAppUrl()}api/users/${id}`, body)
	.then(res => {if(res.status == 201) console.log(res.data)})
	.catch (e => console.log(e))
	return response
};

export const getUserById = async (id) => {
	const response = await axios({
		method: 'get',
		url: `${getAppUrl()}api/users/${id}`,
	}).then((res) => {
		return res.data.data;
	});
	return response;
};

export const getAllUsers = async () => {
	const response = await axios.get(`${getAppUrl()}api/users`);
	return response.data.data;
};
