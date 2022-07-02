<template>
  <div class="container flex flex-wrap mx-auto ml-4 mr-6 mt-8">
    <div v-if="$fetchState.pending">
      <button
        v-for="n in 5"
        :key="n"
        class="bg-gray-300 py-4 px-8 ml-2 rounded"
      ></button>
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <template v-else>
      <div>
        <nuxt-link
          v-for="category in categories"
          :to="`/categories/${category.slug}`"
          :key="category.id"
          class="
            bg-white
            hover:bg-gray-100
            text-gray-800
            font-semibold
            py-2
            px-4
            ml-2
            border border-gray-400
            rounded
            shadow
          "
        >
          {{ category.name }}
        </nuxt-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      error: null,
    };
  },
  async fetch() {
    try {
      this.categories = await this.$strapi.find("categories");
    } catch (error) {
      this.error = error;
    }
  },
  fetchOnServer: false,
};
</script>

<style lang="css" scoped>
</style>
