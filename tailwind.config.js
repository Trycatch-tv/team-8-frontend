/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'banner-bg':'#2764E9',
        'banner-gray-bg':'#F3F4F6',
        'eclipse-img':'#695E98',
      },
      height: {
        '300': '300px',
      },
      width: {
        '300': '300px',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

