module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        indigo:{
          50: '#FF47FF'

        },
        black: {
          700: "#161616"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
