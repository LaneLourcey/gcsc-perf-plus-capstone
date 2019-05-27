module.exports = {
  siteMetadata: {
    title: 'Gatsby Modern Starter',
    language: 'en',
    // TODO: add metadata
  },
  plugins: [
    // 'gatsby-remark-smartypants',
    // ? 'gatsby-remark-responsive-iframe',
    // 'gatsby-remark-prismjs',
    // ?'gatsby-remark-autolink-headers',
    // 'gatsby-remark-copy-linked-files',
    // 'gatsby-plugin-eslint', !causes errors
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: { noInlineHighlight: false },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 80,
              withWebp: { quality: 80 },
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
            },
          },
        ],
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: { include: /assets/ },
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'modal',
      },
    },
  ],
};
