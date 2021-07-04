<template lang="pug">
div
  .titleview
    .outrun.glow(v-if="error.statusCode === 404") {{ pageNotFound }}
    .outrun.glow(v-else) {{ otherError }}
  .buttonrow
    NuxtLink(to="/")
      button
        span Home page
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
