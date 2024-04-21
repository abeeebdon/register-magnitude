/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': {
            top: 0,
          },
          '100%': {
            top: '50%',
          },
        },
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}
