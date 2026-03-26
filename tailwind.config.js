/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};
// @filename tailwind.config.js
module.exports = {
	theme: {
		// ...
	},
	plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}