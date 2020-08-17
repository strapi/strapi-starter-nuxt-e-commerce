<template>
<div class="flex justify-center bg-gray-200">
  <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
    <NavBar />
    <Buttons class="" />
    <Nuxt class="flex-grow" />
    <Footer />
  </div>
  <div hidden id="snipcart" data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"></div>
</div>
</template>

<script>
import NavBar from './../components/Navbar'
import Footer from './../components/Footer'
import Buttons from './../components/Buttons'

export default {
  data() {
    return {
      homepage: {},
      error: null
    }
  },
  components: {
    NavBar,
    Footer,
    Buttons
  },
  async mounted() {
    try {
      this.homepage = await this.$strapi.find('homepage')
    } catch (error) {
      this.error = error
    }
  }
}
</script>
