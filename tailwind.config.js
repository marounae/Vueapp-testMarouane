/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "weather-primary":"#00668A",
        "weather-secondary":"#004E71",
        "grow":"#5E6FE1"
      },
    },
    fontFamily:{
      Jost : ["Jost, sans-serif"]
    },
    container : {
      padding :"20px",
      center:true,
    },
    screens:{
      sm: '640px',
      md:'768px',
    },
  },
  plugins: [],
}

