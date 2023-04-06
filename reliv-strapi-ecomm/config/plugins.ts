module.exports = {
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::product.product',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'product',
              locale: '{locale}',
              slug: '{slug}',
              secret: process.env['STRAPI_PREVIEW_SECRET'],
            },
          },
          published: {
            url: 'http://localhost:3000/product/{slug}',
          },
        },
      ],
    },
  },
};
