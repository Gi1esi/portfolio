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
      backgroundImage: {
        'grid-squares': `repeating-linear-gradient(0deg, #e2e8f0 0 1px, transparent 1px 20px),
                       repeating-linear-gradient(90deg, #e2e8f0 0 1px, transparent 1px 20px)`,
      },
    },
  },
  plugins: [],
}
