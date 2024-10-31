/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E84545",
        secondary: "#2B2E4A",
        text_primary: "#938F99",
        text_secondary: "#E0E0E0",
        dark_primary: "#1E1E1E",
        dark_secondary: "#2B2B2B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
