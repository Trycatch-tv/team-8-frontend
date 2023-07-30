/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'banner-bg': '#2764E9',
        'banner-gray-bg': '#F3F4F6',
        'text-card': '#B3CFF2',
        'text-title-card': '#0455BF'
      },

      backgroundColor: {
        'primary-home': '#13161C',
        'secondary-home': '#fff',
        'primary-modal':'#2c323c',
        'secondary-modal':'#2c323c'
      },
      height: {
        '300': '300px',
      },
      width: {
        '300': '300px',
      },
      keyframes: {
        openModal: {
          '0%': { transform: 'translateX(2000px)' },
          '100%': { transform: 'translateX(0)' },
        },
        loadItem: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        openModal: 'openModal ease-in-out .8s',
        loadItem: 'loadItem ease-in-out .8s'
      }

    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

