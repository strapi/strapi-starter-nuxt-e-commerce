<template>
<Products :products="products" :error="error" :storeUrl="storeUrl" />
</template>

<script>
import Products from "~/components/Products.vue"

export default {
  data() {
    return {
      products: [],
      storeUrl: process.env.storeUrl,
      error: null
    }
  },
  async mounted() {
    try {
      this.products = await this.$strapi.$products.find()
    } catch (error) {
      this.error = error
    }
  },
  components: {
    Products
  }
}
</script>
