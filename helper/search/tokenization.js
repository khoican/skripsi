export const tokenize = (text) => {
	return text
		.toLowerCase()
		.replace(/[^\w\s]/g, '')
		.split(' ');
};
