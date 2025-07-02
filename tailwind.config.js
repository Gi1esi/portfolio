/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#208888',
          secondary: '#ff644f',
        },
        neutral: {
          bg: '#ffffff',
          text: '#1a1a1a',
          darkBg: '#0f172a',
          darkText: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
