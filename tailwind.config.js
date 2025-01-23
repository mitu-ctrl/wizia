/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{center:true},
    extend: {
      colors:{
        primary:'#0FF1F6',
        secondary:'#FFFFFF',
      },
      fontFamily:{
        font: '"Arima", serif'
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

