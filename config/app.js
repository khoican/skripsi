export function getAppUrl() {
	const api = import.meta.env.VITE_API_URL;

	return api;
}
