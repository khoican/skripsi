import axios from "axios";
import { getAppUrl } from "../config/app";

export const getAllOrders = async () => {
	const response = await axios.get(`${getAppUrl()}api/orders`);
	return response.data.data;

};
