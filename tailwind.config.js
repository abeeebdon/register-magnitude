/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/NYSC.jpg')",
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
