/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        '40': '10rem', // You can change this value
        '80': '20rem', // Add more as needed
      }
    },
  },
  plugins: [],
}