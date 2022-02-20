require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Le Potentiel`,
    siteUrl: `https://lepotentiel.cd`,
    description: `Site de l'association Le Potentiel`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url:
          process.env.GATSBY_WPGRAPHQL_URL ||
          `https://backend.lepotentiel.cd/graphql`,
        schema: {
          requestConcurrency: 150,
        },
        html: {
          createStaticFiles: false,
          useGatsbyImage: false,
        },
        type: {
          MediaItem: {
            createFileNodes: false,
          },
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
