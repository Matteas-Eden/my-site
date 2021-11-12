module.exports = {
  siteMetadata: {
    title: 'Matteas Eden',
    author: 'Matteas Eden',
    description: 'Software Developer, Computer Engineer and Linux Enthusiast',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'matteas-eden',
        short_name: 'matteas',
        start_url: '/',
        background_color: '#004a7f',
        theme_color: '#004a7f',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
