/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0356a3',
          light: '#02a0df',
        },
      },
      boxShadow: {
        soft: '0 20px 50px rgba(2, 160, 223, 0.12)',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(3,86,163,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(3,86,163,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
