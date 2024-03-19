/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main": "linear-gradient(to left top, blue, aqua)",
        "dark": "linear-gradient(to left top, red, blue)",
        "light": "linear-gradient(to left top, orange, yellow)",
      }
    },
  },
  plugins: [],
}