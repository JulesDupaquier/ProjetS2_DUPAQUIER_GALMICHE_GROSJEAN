/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    colors: {
      ...colors,
      'primary': {
        100: '#ffe9bf',
        200: '#ffda93',
        300: '#ffcb67',
        400: '#ffbc3b',
        500: '#dd9f28',
        600: '#bb8318',
        700: '#99690c',
        800: '#774f03',
        900: '#553800',

      },
      'secondary': {
        100: '#148d44',
        500: '#1a5e08',
      },
      'greyscale' : {
        10: '#f5f5f5',
        30: '#cccccc',
        50: '#a3a3a3',
        70: '#7a7a7a',
        90: '#3d3d3d',
        100: '#000000',

      }
    },
     extend: {
      
  },
    fontSize: {
  'xxs': ['0.9rem'],
  'xs': ['1rem'],
  'sm': ['1.25rem'],
  'xl': ['1.563rem'],
  '2xl': ['2.5rem']
  
 },  
  fontFamily: {
    arimo: ['Arimo', 'sans-serif']
  },
 
 extend: {
  gridTemplateColumns: {
    principal: 'repeat(12, minmax(0, 64px))',
    secondary: 'repeat(auto-fit, minmax(0, 1fr))'
  }
}

},

  plugins: []
  }