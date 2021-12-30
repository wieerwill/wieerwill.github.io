<template lang="pug">
div
  .titleview
    .outrun.glow
      a(href="https://github.com/wieerwill") {{ subtitle }}
    .chrome.large.shine(:data-text="title1 + title2") {{ title1 }}
      span.spark
      | {{ title2 }}
  .buttonrow
    NuxtLink(to="/profile")
      button
        span#offset {{ button1 }}
        span {{ button2 }}
</template>

<script>
import life from "../life";
export default {
  head: {
    title: "Welcome",
  },
  data() {
    return {
      title1: life.home.title1,
      title2: life.home.title2,
      subtitle: life.home.subtitle,
      button1: life.home.button1,
      button2: life.home.button2,
      github: life.home.githubLink,
    };
  },
};
</script>