module.exports = {
  '*/1 * * * *': async () => {

    // Fetch articles to publish
    const draftProductsToPublish = await strapi.api.product.services.product.find({
      status: 'draft',
      published_at_lt: new Date(),
    });

    // Update status of articles
    draftProductsToPublish.forEach(async product => {
      await strapi.api.product.services.product.update({ id: product.id }, { status: 'published' });
    })
  }
};
