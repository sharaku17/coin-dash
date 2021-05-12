module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    deliciousHamburgers: {
      size: '20px', // must be in px.
      color: '#586061',
      colorLight: '#fff8f4',
      padding: '0px', // must be in px.
      animationSpeed: 1,}
  },
  variants: {
    extend: {},
    backgroundColor: ['responsive','focus', 'hover' ,  'active']
  },
  plugins: [require('tailwindcss-delicious-hamburgers')],
}
