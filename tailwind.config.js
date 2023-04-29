/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				opensans: ["'Open Sans'", "sans - serif"],
				roboto: ["'Roboto'", "sans - serif"],
			},
			colors: {
				primary: "#1565D8",
				dark: {
					thick: "#0D2436",
					soft: "#183B56",
					light: "#5A7184",
				},
			},
		},
	},
	plugins: [],
};
