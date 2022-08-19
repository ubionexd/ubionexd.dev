/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'FiraCode': ['"Fira Code"', 'monospace'],
			},
			colors: {
				'link': '#3273dc',
				'hlink': '#6399f0',
			}
		},
	},
	plugins: [],
}
