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
      transparent: 'transparent',
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
      height: {
        'dashboard-content': 'calc(100vh - 131px)',
        'xl:dashboard-content': 'calc(100vh - 100px)'
      },
      gridTemplateColumns: {
        'card-trailers': 'repeat(2, minmax(285px, 1fr))',
        'card-movies': 'repeat(5, minmax(205px, 1fr))',
        'background-images': '266px 370px 430px'
      },
      gridTemplateRows: {
        'card-trailers': 'repeat(6, minmax(128.5px, 1fr))',
        'xl:card-trailers': 'repeat(2, minmax(180px, 1fr))',
        'background-images': 'repeat(2, minmax(200px, 1fr))'
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [],
}
