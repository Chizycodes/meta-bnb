/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			black: '#434343',
		},
		extend: {},
	},
	plugins: [require('daisyui')],
};
