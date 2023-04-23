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
        'text-card':'#B3CFF2',
        'text-title-card':'#0455BF'
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

