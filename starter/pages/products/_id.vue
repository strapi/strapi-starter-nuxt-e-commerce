<template>
<div v-if="this.product !== null">
  <div class="m-6 mt-56 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
    <div class="rounded-t-lg pt-2 pb-2">
      <img :src="`${getStrapiMedia(product.image.formats.thumbnail.url)}`" class="m-auto">
    </div>
    <div class="w-full p-5 flex flex-col justify-between">
      <div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">{{product.title}} - ${{ product.price }}</h4>
        <div class="mt-1 text-gray-600">{{ product.description }}</div>
      </div>

      <button v-if="product.status === 'published'" class="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow" :data-item-id="product.id" :data-item-price="product.price"
        :data-item-url="`${this.$route.fullPath}`" :data-item-description="product.description" :data-item-image="`${getStrapiMedia(product.image.formats.thumbnail.url)}`" :data-item-name="product.title" v-bind="customFields">
        Add to cart
      </button>

      <div class="text-center mr-10 mb-1" v-else>
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Coming soon...</span>
          <span class="font-semibold mr-2 text-left flex-auto">This article is not available yet.</span>
        </div>
      </div>

    </div>
  </div>
</div>

<div v-else>
  {{ error }}
</div>
</template>

<script>
import {
  getStrapiMedia
} from '~/utils/medias'

export default {
  data() {
    return {
      product: null,
      error: null
    }
  },
  async mounted() {
    try {
      this.product = await this.$strapi.$products.findOne(this.$route.params.id)
    } catch (error) {
      this.error = error
    }
  },
  computed: {
    customFields() {
      return this.product["Custom_field"]
        .map(({
          title,
          required,
          options
        }) => ({
          name: title,
          required,
          options
        }))
        .map((x, index) => Object.entries(x)
          .map(([key, value]) => ({
            [`data-item-custom${index + 1}-${key.toString().toLowerCase()}`]: value
          })))
        .reduce((acc, curr) => acc.concat(curr), [])
        .reduce((acc, curr) => ({
          ...acc,
          ...curr
        }))
    }
  },
  methods: {
    getStrapiMedia
  }
}
</script>
