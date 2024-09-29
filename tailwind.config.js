/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E7496",
      },
      fontFamily: {
        wagon: ["Wagon", "sans-serif"],
        varent: ["VarentGrotesk", "sans-serif"],
        "le-murmure": ["Le Murmure", "sans-serif"],
      },
    },
  },
  plugins: [],
};
