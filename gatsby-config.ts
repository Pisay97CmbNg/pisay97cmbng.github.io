import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv'

// causes GraphQL error
// dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`
// })

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CMB Natatanging Guro`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "articles",
        "path": "./src/content/articles/"
      }
    },
  ]
};

export default config;
