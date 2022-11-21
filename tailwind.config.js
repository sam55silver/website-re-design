/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'serif': ['PT Serif Caption'],
    },
    extend: {
      colors: {
        'foreground': '#749f82',
        'focus': '#d9bd8f',
      },
    },
  },
  plugins: [],
};
