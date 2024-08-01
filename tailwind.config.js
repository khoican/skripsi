/** @type {import('tailwindcss').Config} */
import { Flowbite as flowbite } from 'flowbite-react';

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			dropShadow: {
				top: [
					'0 -4px 3px rgb(0 0 0 / 0.07)',
					'0 -2px 2px rgb(0 0 0 / 0.06)',
				],
			},
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
				danger: '#E45F2B',
				red: '#FF0000',
				secondary: '#F6C445',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), [flowbite]],
};
