const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    colors: {
      white: '#FFFFFF',
      orange: '#FA5302',
      wine: '#91204D',
      yellow: '#F2C94C',
      gray: {
        100: '#F6F5FB',
        500: '#8B8A90',
        800: '#3A3A3A'
      },
      black: '#2F2F2F'
    },
    extend: {
      spacing: {
        '108': '38rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
