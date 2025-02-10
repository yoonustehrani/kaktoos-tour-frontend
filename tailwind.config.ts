import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				eerieBlack: "#212121",
				raisinBlack: {
					dark: "#26282C",
					darker: "#1F1F23"
				},
				appleGreen: "#87ab2b",
				"dark-moss-green": "#5F6B39",
				avocado: "#648334",
				// "cambridge-blue": "#75B49A",
				olivine: "#AFBC81",
				vanilla: "#D5D09F",
				cream: {
					DEFAULT: "#FFFDC4",
					light: "#FFFFD8"
				},
				lemmonChiffon: "#FAF5CE",
				butterscotch: "#CD9045",
				"raw-umber": "#916751",
				lion: "#B3864C",
				"persian-orange": {
					dark: "#DC996B",
					light: "#DF8E49"
				},
				buff: "#DEA379",
				darkBlue: {
					oxford: "#0D1A2F",
					delft: "#142F66",
					marian: {
						dark: "#203880",
						light: "#274494"
					},
				},
				lightBlue: {
					yin: "#3752A1",
					celtic: "#4278CE",
					silverLake: "#6388BD",
				},
				antiFlashWhite: "#F0F3F8"
			},
			fontFamily: {
				vazir: 'Vazirmatn'
			}
		},
	},
	plugins: [],
} satisfies Config;
