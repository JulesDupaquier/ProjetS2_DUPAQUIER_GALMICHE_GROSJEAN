/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
 
    extend: {
      colors: {
        
  'primary/100': '#ffe9bf',
  'primary/200': '#ffda93',
  'primary/300': '#ffcb67',
  'primary/400': '#ffbc3b',
  'primary/500': '#dd9f28',
  'primary/600': '#bb8318',
  'primary/700': '#99690c',
  'primary/800': '#774f03',
  'primary/900': '#553800',
  'secondary/100': '#148d44',
  'secondary/500': '#1a5e08',
  'greyscale/10': '#f5f5f5',
  'greyscale/30': '#cccccc',
  'greyscale/50': '#a3a3a3',
  'greyscale/70': '#7a7a7a',
  'greyscale/90': '#3d3d3d',
  'greyscale-100': '#123412'
 }
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
  gridTemplateColumns: {
    principal: 'repeat(12, minmax(0, 64px))',
    secondary: 'repeat(auto-fit, minmax(0, 1fr))'
  }
}

},

  plugins: []
  }