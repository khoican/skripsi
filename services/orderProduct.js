import { getAppUrl } from '../config/app';
import axios from 'axios';

export const getAllOrderByUserId = async (id) => {
	try {
		const response = await axios.get(
			`${getAppUrl()}api/orders?userId=${id}`,
		);
		console.log(response.data);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const postOrderProduct = async (data) => {
	try {
		const response = await axios.post(`${getAppUrl()}api/orders`, data);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const postOrderHistoryProduct = async (data) => {
	try {
		const response = await axios.post(`${getAppUrl()}/api/orderhistory`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getOrderProduct = async (id) => {
	try {
		const response = await axios.get(`${getAppUrl()}api/orders/${id}`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getOrderHistoryProduct = async (id) => {
	try {
		const response = await axios.get(
			`${getAppUrl()}api/orderhistory?orderid=${id}`,
		);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
