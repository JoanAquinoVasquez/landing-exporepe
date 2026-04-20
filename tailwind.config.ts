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
        rojo: {
          DEFAULT: '#B8301E', // Rojo Mochica
          dark:    '#8C2010', // Rojo Deep
          soft:    '#D45A42', // Rojo Soft
        },
        dorado: {
          DEFAULT: '#D4A017', // Dorado Sipán
          light:   '#F0C84A', // Dorado Light
        },
        turquesa: {
          DEFAULT: '#2EC4B6', // Turquesa Pacífico
          dark:    '#1A8A80', // Turquesa Deep
        },
        arena: {
          DEFAULT: '#E6C79C', // Arena Desierto
          light:   '#FAF3E8', // Blanco Arena
        },
        carbon: {
          DEFAULT: '#1A0A08', // Carbón Huaca
          mid:     '#2E1612', // Carbón Mid
        },
        // Helpers for semantic usage
        bgPrimary:     '#FAF3E8',
        bgDark:        '#1A0A08',
        textPrimary:   '#1A0A08',
        textOnDark:    '#FFFFFF',
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
