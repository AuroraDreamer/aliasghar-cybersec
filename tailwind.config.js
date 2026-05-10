/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#15201B",
        cream: "#FAF8F5",
        amber: "#FBBF24",
      },
    },
  },
  plugins: [],
}
