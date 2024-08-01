import axios from "axios";
import { getAppUrl } from "../config/app";

export const getOrderOmzet = async () => {
	const response = await axios.get(`${getAppUrl()}api/ordersomzet`);
	return response.data.data;
}

export const getOrderCount = async () => {
	const response = await axios.get(`${getAppUrl()}api/orderscount`);
	return response.data.data;
}

export const getAllOrders = async () => {
	const response = await axios.get(`${getAppUrl()}api/orders`);
	return response.data.data;
};

export const getOrderById = async (id) => {
	try {
		const response = await axios.get(`${getAppUrl()}api/orders/${id}`);
		return response.data.data;
	} catch (error){
		console.log(error);
	}
};

export const editOrder = async (id, body) => {
	const response = await axios.patch(`${getAppUrl()}api/orders/${id}`, body)
	.then(res => {if(res.status == 201) console.log(res.data)})
	.catch (e => console.log(e))
	return response
}

export const deleteOrder = async (id) => {
	const response = await axios.delete(`${getAppUrl()}api/orders/${id}`)
	.then(res => {if(res.status == 201) console.log(res.data)})
	.catch (e => console.log(e))
	return response
}