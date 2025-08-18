/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0071BC",
        secondary: '#FFCC00',
        'light-blue':'#E9F4FA',
        greyText: "#D1D1D1",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        instrument: ["'Instrument Sans'", "sans-serif"],
      },
       screens: {
        xl1: '1440px'
      }
    },
  },
  plugins: [],
};