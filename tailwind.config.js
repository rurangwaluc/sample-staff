/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // covers app, components, pages
  ],
  theme: {
    extend: {
      colors: {
        stone: colors.stone, // ensures bg-stone-100 works
      },
    },
  },
  plugins: [],
};
