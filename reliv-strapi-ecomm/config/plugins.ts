module.exports = {
  'example-preview': {
    // my-plugin is going to be the internal name used for this plugin
    enabled: true,
    resolve: './src/plugins/example-preview',
    config: {
      // user plugin config goes here
    },
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::product.product',
          draft: {
            url: `${process.env['STRAPI_PREVIEW_FRONT']}/preview`,
            query: {
              type: 'product',
              locale: '{locale}',
              slug: '{slug}',
              secret: process.env['STRAPI_PREVIEW_SECRET'],
              reqType: "preview"
            },
            headers: {
              Authorization: process.env['STRAPI_PREVIEW_SECRET'],
            }
          },
          published: {
            url: `${process.env['STRAPI_PREVIEW_FRONT']}/api`,
            query: {
              type: 'product',
              locale: '{locale}',
              slug: '{slug}',
            },
          }
        },
      ],
    },
  },
};
