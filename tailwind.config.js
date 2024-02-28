/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
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
				success: '#79C314',
				red: '#E45F2B',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
