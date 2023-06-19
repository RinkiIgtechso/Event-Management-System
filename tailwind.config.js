/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs':"425px"
    },
    extend: {
      
      colors:{
        primary:{
          100:'#131416',
          200:'#2386bd',
          300:'#f7f7f7',
        },
        secondary:{
          100:'#1c1e21',
          200:'#68e1fd',
          300:'rgb(255 255 255 / 10%)'
        },
      },
      fontFamily:{
        'sans':'Raleway, sans-serif'
      },
      animation:{
        'slow':"spin 0.6s infinite linear"
      }
    }
    },
  plugins: [],
}