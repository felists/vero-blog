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
    title: `Idea dumps`,
    author: `vernath`,
    description: `This is where i'm dumping my random ideas`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
