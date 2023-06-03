/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 10px 10px 0px rgba(0, 0, 0)',
        '4xl': '0px 5px 30px rgb(50,50,50)',
      },
      colors:{
          thatgreen: 'rgba(119,230,160,0.2)',
      }
    },
  },
  plugins: [],
};
