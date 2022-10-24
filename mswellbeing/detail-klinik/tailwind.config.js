/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#129898",
        secondary: "#41B89B",
        mental: "#5CB50F",
        meds: "#1CC9C9",
      },
      screens: {
        "2xl": "1360px",
      },
    },
  },
  plugins: [],
};
