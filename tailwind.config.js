module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	backgroundImage: theme => ({
        'm-image-hero': "url('./helpers/images/mobile/image-hero.jpg')",
        'd-hero': "url('./helpers/images/desktop/image-hero.jpg')",
        'm-deep-earth': "url('./helpers/images/mobile/image-deep-earth.jpg')",
        'm-night-arcade': "url('./helpers/images/mobile/image-night-arcade.jpg')",
        'm-soccer-team': "url('./helpers/images/mobile/image-soccer-team.jpg')",
        'm-from-above': "url('./helpers/images/mobile/image-from-above.jpg')",
        'm-pocket-borealis': "url('./helpers/images/mobile/image-pocket-borealis.jpg')",
        'm-curiosity': "url('./helpers/images/mobile/image-curiosity.jpg')",
        'm-fisheye': "url('./helpers/images/mobile/image-fisheye.jpg')",
        'm-grid': "url('./helpers/images/mobile/image-grid.jpg')",

        // Desktop Images
        // 
        'd-deep-earth': "url('./helpers/images/desktop/image-deep-earth.jpg')",
        'd-night-arcade': "url('./helpers/images/desktop/image-night-arcade.jpg')",
        'd-soccer-team': "url('./helpers/images/desktop/image-soccer-team.jpg')",
        'd-from-above': "url('./helpers/images/desktop/image-from-above.jpg')",
        'd-pocket-borealis': "url('./helpers/images/desktop/image-pocket-borealis.jpg')",
        'd-curiosity': "url('./helpers/images/desktop/image-curiosity.jpg')",
        'd-fisheye': "url('./helpers/images/desktop/image-fisheye.jpg')",
        'd-grid': "url('./helpers/images/desktop/image-grid.jpg')",

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
