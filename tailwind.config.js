/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#046307",
        "light-red": "#E45F2B",
        "light-orange": "#F6C445",
      },
    },
  },
  plugins: [],
}

