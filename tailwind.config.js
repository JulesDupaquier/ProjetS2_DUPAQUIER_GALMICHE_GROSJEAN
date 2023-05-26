/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src//*.{vue,js,ts,jsx,tsx}'],
  theme: {
    
    colors: {
  'Primary/100': '#ffe9bf',
  'Primary/200': '#ffda93',
  'Primary/300': '#ffcb67',
  'Primary/400': '#ffbc3b',
  'Primary/500': '#dd9f28',
  'Primary/600': '#bb8318',
  'Primary/700': '#99690c',
  'Primary/800': '#774f03',
  'Primary/900': '#553800',
  'Secondary/100': '#148d44',
  'Secondary/500': '#1a5e08',
  'Greyscale/10': '#f5f5f5',
  'Greyscale/30': '#cccccc',
  'Greyscale/50': '#a3a3a3',
  'Greyscale/70': '#7a7a7a',
  'Greyscale/90': '#3d3d3d',
  'Greyscale/100': '#000000'
 },
 fontSize: {
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.25rem',
  'xl': '1.5625rem',
  '2xl': '2.5rem'
 },
 fontFamily: {
  'helvetica-neue-lt-pro': 'Helvetica Neue LT Pro'
 },
 borderRadius: {
  'none': '0',
  'xs': '0.1875rem',
  'sm': '0.25rem',
  'default': '0.3125rem',
  'lg': '0.375rem',
  'xl': '0.5rem',
  '2xl': '0.625rem',
  '3xl': '1rem',
  '4xl': '1.5625rem',
  '5xl': '3.3621575832366943rem',
  '6xl': '3.7897727489471436rem',
  '7xl': '4.670040130615234rem',
  'full': '9999px'
 },
    extend: {
      spacing: {

      },
      borderRadius: {

      }
    }
  },
  
  plugins: []
}
