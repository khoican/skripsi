import CryptoJS from 'crypto-js';
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const encryptData = (name, data) => {
	const encryptedData = CryptoJS.AES.encrypt(
		JSON.stringify(data),
		SECRET_KEY,
	).toString();
	localStorage.setItem(name, encryptedData);
};

export const decryptData = (name) => {
	const encryptedData = localStorage.getItem(name);
	const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
	const originalData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	return originalData;
};
