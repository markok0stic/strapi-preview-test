import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('test-preview-button')
      .service('myService')
      .getWelcomeMessage();
  },
});
