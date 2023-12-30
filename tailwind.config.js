/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Poppins',
					'sans-serif',
					...defaultTheme.fontFamily.sans,
				],
				montserrat: ['Montserrat'],
			},
			colors: {
				primary: '#046307',
				green: '#79C314',
			},
		},
	},
	plugins: [],
};
