/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'montserrat': ['Montserrat', 'sans-serif', 'Source Code Pro', 'monospace'], 
      },
      colors: {
        "dark-green": "#046307",
        "light-green": "#79C314",
        "light-red": "#E45F2B",
        "light-orange": "#F6C445",
      },
    },
  },
  plugins: [],
}

