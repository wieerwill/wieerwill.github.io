<template lang="pug">
div
  .titleview
    .outrun.glow
      a(href="https://github.com/wieerwill") GitHub.io
    .chrome.large.shine(data-text="Wieerwill") Wie
      span.spark
      | erwill
  .buttonrow
    NuxtLink(to="/profile")
      button
        span#offset St
        span art
</template>

<script>
export default {
  head: {
    title: 'Welcome'
  },
}
</script>