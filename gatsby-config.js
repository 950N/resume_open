module.exports = {
  pathPrefix: '/resume',
  siteMetadata: {
    title: 'My Resume',
    githubUrl: 'https://github.com/950N/resume_open',
    author: '950N',
    contact: 'https://github.com/950N',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      // https://developers.google.com/analytics/devguides/collection/gtagjs?hl=zh-cn
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: [''],
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'font-family': 'roboto-regular',
            'primary-color': '#2f5785',
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
