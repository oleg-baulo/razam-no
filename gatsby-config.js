/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/posts/`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          //posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
  siteMetadata: {
    title: `RAZAM`,
    menuLinks: [
      {
        name: `Hjem`,
        url: `/`,
      },
      {
        name: `Kontakt`,
        url: `/contact`,
      },
    ],
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/razam.norge`,
      },
    ],
  },
}
