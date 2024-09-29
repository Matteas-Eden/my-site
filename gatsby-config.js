module.exports = {
  siteMetadata: {
    title: 'Matt Eden',
    author: 'Matt Eden',
    description: 'Software Developer, Computer Engineer and Linux Enthusiast',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'matt-eden',
        short_name: 'matt',
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
