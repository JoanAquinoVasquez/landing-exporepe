import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        roja:          '#B8301E',
        rojaDeep:      '#8C2010',
        rojaLight:     '#FAEDE9',
        dorado:        '#D4A017',
        doradoLight:   '#F0C84A',
        teal:          '#2EC4B6',
        tealLight:     '#E1F7F5',
        bgPrimary:     '#FAF3E8',
        bgSecondary:   '#F0E8D8',
        bgDark:        '#1A0A08',
        bgDarkMid:     '#2E1612',
        textPrimary:   '#1A0A08',
        textSecondary: '#5C3A30',
        textTertiary:  '#9C7A6A',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
