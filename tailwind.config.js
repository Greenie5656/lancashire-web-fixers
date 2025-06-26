/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'imperial-red': {
          DEFAULT: '#ff0036',
          100: '#33000b',
          200: '#660016', 
          300: '#990021',
          400: '#cc002c',
          500: '#ff0036',
          600: '#ff335f',
          700: '#ff6687',
          800: '#ff99af',
          900: '#ffccd7'
        }
      },
      fontFamily: {
        'marble': ['Marble', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'extrabold': 800,
      }
    },
  },
  plugins: [],
}