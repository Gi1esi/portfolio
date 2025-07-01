/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#208888',
          secondary: '#ff644f',
        },
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
