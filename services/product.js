import axios from 'axios';
import { getAppUrl } from '../config/app';

export const postProduct = async (body, ) => {
	await axios.post(`${getAppUrl()}api/products`, body, {
		headers: {
			'Accept': '*/*',
			'Content-Type': 'multipart/form-data',
		},
	})
	.then(res => {
		if(res.status == 201) console.log(res.data)
	})
	.catch (e => console.log(e))
}

export const editProduct = async (id, body) => {
	await axios.patch(`${getAppUrl()}api/products/${id}`, body)
	.then(res => {if(res.status == 200) console.log(res.data)})
	.catch (e => console.log(e))
}

export const deleteProduct = async (id) => {
	await axios.delete(`${getAppUrl()}api/products/${id}`)
	.then(res => {if(res.status == 200) console.log(res.data)})
	.catch (e => console.log(e))
}

export const getAllProducts = async (skip = 0, take = 10) => {
	const response = await axios.get(
		`${getAppUrl()}api/products?skip=${skip}&take=${take}`,
	);
	return response.data.data;
};

export const getProductBySlug = async (id) => {
	const response = await axios({
		method: 'get',
		url: `${getAppUrl()}api/products/${id}`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((res) => {
		return res.data.data;
	});

	return response;
};
