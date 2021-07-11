<template>
  <Products
    :pending="$fetchState.pending"
    :error="$fetchState.error"
    :products="products"
    :storeUrl="storeUrl"
  />
</template>

<script>
import Products from "~/components/Products.vue";

export default {
  data() {
    return {
      products: [],
      storeUrl: process.env.storeUrl,
      error: null,
    };
  },
  async fetch() {
    try {
      this.products = await this.$strapi.$products.find();
    } catch (error) {
      this.error = error;
    }
  },
  fetchOnServer: false,
  components: {
    Products,
  },
};
</script>
