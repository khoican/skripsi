import axios from "axios";
import { getAppUrl } from "../config/app";

export const getAllUsers = async () => {
	const response = await axios.get(`${getAppUrl()}api/users`);
	return response.data.data;
};
