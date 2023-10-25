/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Roboto Flex Variable", ...defaultTheme.fontFamily.sans],
			logo: ['Barlow Semi Condensed', 'Barlow', 'sans-serif'], 
		},
		extend: {
			colors: {
				'logo-yellow': '#f2cc8f',
			},
		},
		screens: {
			xxs: '360px',
			xs: '480px',
			sm: '768px',
			md: '992px',
			lg: '1200px',
			lgm: '1190px',
			mdl: '950px',
			smd: '710px'
		  },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
