/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},

		fontFamily: {
			jamjuree: "'Bai Jamjuree', 'sans-serif'",
			digital: "DS-Digital",
		},

		colors: {
			"black-300": "#040B11",
			"black-200": "#070E14",
			"black-100": "#141B22",
			white: "#FFFFFF",
			green: "#21E786",
			gray: "#C2C3C5",
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
