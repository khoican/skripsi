import axios from 'axios';
import { getAppUrl } from '../config/app';

export const postProduct = async (body) => {
	const formData = new FormData()

	formData.append('name', body.name)
	formData.append('description', body.description)
	formData.append('stock', body.stock)
	formData.append('subCategoryId', body.subCategoryId)
	formData.append('price', body.price)
	formData.append('image', body.image)

	await axios.post(`${getAppUrl()}api/products`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	}
	)
	.then(res => {
		if(res.status == 201) console.log(res.data)
	})
	.catch (e => console.log(e))
}

export const editProduct = async (id, body) => {
	const formData = new FormData()

	formData.append('name', body.name)
	formData.append('description', body.description)
	formData.append('stock', body.stock)
	formData.append('subCategoryId', body.subCategoryId)
	formData.append('price', body.price)
	formData.append('image', body.image)

	await axios.patch(`${getAppUrl()}api/products/${id}`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		}
	})
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

export const getAllProductsDashboard = async () => {
	const response = await axios.get(`${getAppUrl()}api/products`);
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

export const searchProductByName = async (query) => {
	const response = await axios({
		method: 'get',
		url: `${getAppUrl()}api/products?name=${query}`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then((res) => {
		return res.data.data;
	});

	return response;
};
