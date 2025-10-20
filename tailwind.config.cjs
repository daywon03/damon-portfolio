/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "sm": "480px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      }
    },
  },
  plugins: [],
}