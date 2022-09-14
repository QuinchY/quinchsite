/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: "'Bebas Neue', cursive",
      },
      spacing: {
        'bottom-25': '6.25rem',
      }
    },
  },
  plugins: [],
}
