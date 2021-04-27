module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	backgroundImage: theme => ({
        'm-image-hero': "url('./helpers/images/mobile/image-hero.jpg')",
    	})
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      
    },
  },
  plugins: [],
}
