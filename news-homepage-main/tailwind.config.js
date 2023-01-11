/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'p-red': '#d74736',
        'p-white': '#d74736',
        'p-dark': '#1a1a3c',
        'p-light': '#999aa6',
        'p-orange': '#ea9e3d',
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  plugins: [],
}
