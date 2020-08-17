<template>
<div class="flex justify-between m-6">
  <p class="text-xs font-semibold text-gray-600">Strapi Starter Nuxt.js E-commerce</p>
  <div class="flex">
    <a href="https://twitter.com/strapijs" class="max-w-xs ml-4">
      <Twitter />
    </a>
    <a href="https://facebook.com/strapijs" class="ml-3">
      <Facebook />
    </a>
    <a href="https://github.com/strapi/strapi-starter-nuxt-e-commerce" class="ml-3">
      <Github />
    </a>
  </div>
</div>
</template>
<script>
import Twitter from "~/components/icons/twitter.vue";
import Github from "~/components/icons/github.vue";
import Facebook from "~/components/icons/facebook.vue";

export default {
  components: {
    Twitter,
    Github,
    Facebook
  }
}
</script>

<style>
.emoji {
  font-size: 30px;
}
</style>
