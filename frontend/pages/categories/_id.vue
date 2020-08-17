<template>
  <Products :products="this.category.products" :error="error" :storeUrl="storeUrl" />
</template>

<script>
import Products from "~/components/Products.vue"

export default {
  data() {
    return {
      category: {},
      storeUrl: process.env.storeUrl,
      error: null
    }
  },
  async mounted() {
    try {
      this.category = await this.$strapi.findOne('categories', this.$route.params.id)
    } catch (error) {
      this.error = error
    }
  },
  components: {
    Products
  }
}
</script>
