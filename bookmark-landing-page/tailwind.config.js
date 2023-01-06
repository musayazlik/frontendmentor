/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],

  theme: {
    extend: {
      colors: {
        'blue-600': '#5464db',
        'zinc-700': '#242843',
        'zinc-500': '#9694a6',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
