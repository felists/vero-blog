module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {resolve: `gatsby-plugin-netlify-cms`},
  ],

  // Customize your site metadata:
  siteMetadata: {
    title: `Veronica's Blog`,
    author: `vernath`,
    description: `This is where i'm dumping my random ideas`,
    social: [
      {
        name: `instagram`,
        url: `https://twitter.com/vrncnthsy`,
      },
    ],
  },
}
