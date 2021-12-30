<template lang="pug">
div 
  .title
    .outrun.small.glow {{ subtitle }}
    .chrome.medium.shine(:data-text="title") {{ title }}

  .container
    em &laquo;{{ quote }}&raquo;
    #timeline
      .timeline-item(
        v-for="(project, i) in projectlist.slice().reverse()",
        :key="i",
        :datetime="project.datetime"
      )
        h2 {{ project.title }}
        p {{ project.description }}
        a.button(v-if="project.link", :href="project.link") more infos

  .footer
    NuxtLink.navbutton(to="/") {{ homeLink }}
    NuxtLink.navbutton(to="/profile") {{ profileLink }}
    NuxtLink.navbutton(to="/skills") {{ skillLink }}
    NuxtLink.navbutton(to="/certification") {{ certificationLink }}
</template>

<script>
import life from "../life";
export default {
  head: {
    title: life.projects.title,
  },
  data() {
    return {
      title: life.projects.title,
      subtitle: life.projects.subtitle,
      quote: life.projects.quote,
      projectlist: life.projects.projectlist,
      homeLink: life.home.link,
      profileLink: life.profile.link,
      skillLink: life.skills.link,
      certificationLink: life.certification.link,
      projectLink: life.projects.link,
    };
  },
};
</script>

<style scoped>
.container {
  color: white;
  width: 80%;
  margin: auto;
  margin-top: 25vh;
  margin-bottom: 20vh;
  padding: auto;
  text-align: center;
}
.container em {
  margin: 20px;
}
#timeline {
  max-width: 1600px;
  margin: 50px auto;
}
.timeline-item {
  padding: 3em 2em 2em;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
  border-left: 6px solid rgba(0, 0, 0, 0.4);
}
.timeline-item h2 {
  background: linear-gradient(
    32deg,
    #e1217bde 0%,
    #670558de 23%,
    #343a80de 39%,
    #0092dbde 59%,
    #6668aade 62%,
    #3d4a75de 77%,
    #a20e69de 86%,
    #27034bde 100%
  );
  color: rgb(211, 255, 253);
  padding: 10px 0 10px 0;
  margin: 0 0 0 0;
  border-radius: 15px 15px 0 0;
  animation: background-flicker 6s linear infinite;
}
.timeline-item p {
  text-align: left;
  margin: 0 0 20px 0;
  padding: 15px;
  font-size: calc(15px + 1vh);
  background-color: rgba(231, 231, 231, 0.9);
  border-radius: 0 0 15px 15px;
}
.timeline-item::before {
  content: attr(datetime);
  position: absolute;
  left: 1em;
  top: 1em;
  display: block;
  font-weight: 700;
  font-size: 0.785rem;
  color: black;
  background-color: white;
  padding: 2px 7px;
  border-radius: 0 10% 10% 0;
}
.timeline-item::after {
  width: 10px;
  height: 10px;
  display: block;
  top: 1em;
  position: absolute;
  left: -7px;
  border-radius: 10px;
  content: "";
  border: 2px solid rgba(0, 0, 0, 0.3);
  background: white;
}
.timeline-item:last-child {
  border-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0)
    )
    1 100%;
}
</style>