<template>
<div>
  <div v-if="error">
    {{ error }}
  </div>
  <div class="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8" v-else>
    <div v-for="product in products" :key="product.id" class="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md">
      <nuxt-link :to="`/products/${product.slug}`">
        <div class="rounded-t-lg bg-white pt-2 pb-2">
          <img v-lazy class="crop mx-auto" src="~/assets/img/placeholder-image.png" :data-src="`${getStrapiMedia(product.image.formats.thumbnail.url)}`">
        </div>
        <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
          <h4 class="mt-1 font-semibold text-base leading-tight truncate text-gray-700">{{product.title}} sticker</h4>
          <div class="mt-1 text-sm text-gray-700">{{product.description}}</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import {
  getStrapiMedia
} from '~/utils/medias'

export default {
  props: {
    products: Array,
    error: Object,
    storeUrl: String
  },
  directives: {
    lazy: {
      inserted: (el) => {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              observer.unobserve(el);
            }
          });
        });
        observer.observe(el);
      },
    },
  },
  methods: {
    getStrapiMedia
  }
}
</script>

<style>
.crop {
  width: 180px;
  height: 180px;
}
</style>
