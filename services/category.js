import axios from 'axios';
import { getAppUrl } from '../config/app';


export const postCategory = async (body) => {
	await axios.post(`${getAppUrl()}api/category`, body)
    .then(res => {if(res.status == 201) console.log(res.data)}
    ).catch(e => console.log(e));  
}

export const deleteCategory = async (id) => {
    await axios.delete(`${getAppUrl()}api/category/${id}`)
    .then(res => {if(res.status == 200) console.log(res.data)}
    ).catch(e => console.log(e));  
}

export const editCategory = async (id, body) => {
    await axios.patch(`${getAppUrl()}api/category/${id}`, body)
    .then(res => {if(res.status == 200) console.log(res.data)}
    ).catch(e => console.log(e));  
}

export const postSubCategory = async (body) => {
	const response = await axios.post(`${getAppUrl()}api/subCategory`, body)
	console.log(response)

	return response
}

export const editSubCategory = async (id, body) => {
	await axios.patch(`${getAppUrl()}api/subCategory/${id}`, body)
	.then(res => {if(res.status == 200) console.log(res.data)}
	).catch(e => console.log(e));  
}

export const deleteSubCategory = async (id) => {
	await axios.delete(`${getAppUrl()}api/subCategory/${id}`)
	.then(res => {if(res.status == 200) console.log(res.data)}
	).catch(e => console.log(e));  
}

export const getAllCategories = async () => {
	const response = await axios.get(`${getAppUrl()}api/category`);
	return response.data.data;
};

export const getAllSubCategories = async () => {
	const response = await axios.get(`${getAppUrl()}api/subCategory`);
	return response.data.data;
};

export const getSubCategoriesBySlug = (callback, slug) => {
	axios({
		method: 'get',
		url: `${getAppUrl()}api/subCategory/${slug}`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(function (response) {
		callback(response.data);
	});
};
