module.exports = {
  siteMetadata: {
    title: "Garrett Green | Chicago Software Engineer",
    description: "Garrett Green - My Portfolio",
    author: "@garrettgreen",
    siteUrl: `http://www.garrettgreen.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Garrett Green Portfolio",
        short_name: "Garrett Green",
        start_url: "/",
        background_color: "#69359c",
        theme_color: "#69359c",
        display: "minimal-ui",
        icons: [
          {
            src: `/src/assets/favicon.ico`,
            sizes: `32x32`,
            type: `image/ico`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96738144-3",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
