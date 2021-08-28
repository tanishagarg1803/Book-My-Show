module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tanisha: {
          50: '#ffe8e3',
          100: '#febfb4',
          200: '#fb9582',
          300: '#f96b51',
          400: '#f94221',
          500: '#df2b09',
          600: '#ae2006',
          700: '#7d1604',
          800: '#4b0c01',
          900: '#1d0200',
        },
        bms: {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#2b3147',
          900: '#0a0a16',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
