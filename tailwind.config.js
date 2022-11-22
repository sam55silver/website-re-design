/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'serif': ['PT Serif Caption', 'Playfair Display'],
      'title': ['Playfair Display'],
    },
    extend: {
      colors: {
        'foreground': '#6a9478',
        'foreground-darker': '#4c6b56',
        'focus': '#d9bd8f',
      },
    },
  },
  plugins: [],
};
