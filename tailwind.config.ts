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
        katana: {
          red: '#E31B23',
          black: '#000000',
          silver: '#C0C0C0',
          dark: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
};
export default config;