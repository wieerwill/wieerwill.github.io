<template lang="pug">
div 
  .title
    .outrun.small.glow(v-html="subtitle")
    .chrome.medium.shine(:data-text="title") {{ title }}

  .container
    .siderow
      img.card-image(src="pic.png")
      ul.card-list
        li(v-for="link in linklist", :key="link.text")
          a(:href="link.link", target="_blank")
            span.material-icons {{ link.icon }}
            span {{ link.text }}
    .card-text
      p(v-html="text")

  .footer
    NuxtLink.navbutton(to="/") {{ homeLink }}
    NuxtLink.navbutton(to="/skills") {{ skillLink }}
    NuxtLink.navbutton(to="/projects") {{ projectLink }}
    NuxtLink.navbutton(to="/certification") {{ certificationLink }}
</template>

<script>
import life from "../life";
export default {
  head: {
    title: life.profile.title,
  },
  data() {
    return {
      title: life.profile.title,
      subtitle: life.profile.subtitle,
      text: life.profile.text,
      linklist: life.profile.linklist,
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
  width: 80%;
  margin: auto;
  margin-top: 25vh;
  margin-bottom: 20vh;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(
    172deg,
    #e1217bde 0%,
    #670558de 23%,
    #343a80de 39%,
    #0092dbde 59%,
    #6668aade 62%,
    #3d4a75de 77%,
    #a20e69de 86%,
    #27034bde 100%
  );
  color: white;
  font-size: calc(20px + 1vh);
  text-align: center;
  animation: background-flicker 5s linear infinite;
}
.siderow {
  width: 25%;
  height: 100%;
  display: inline-block;
}
.siderow .card-image {
  margin: auto;
  padding: auto;
  max-width: 90%;
  height: auto;
  animation: letter-flicker 7s linear infinite;
  display: block;
  border-radius: 20%;
  border-style: solid;
}
.siderow .card-image:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.siderow ul {
  margin: 0;
  padding: 0;
}
.siderow .card-list,
.card-list a {
  text-align: left;
  text-decoration: none;
  list-style: none;
  color: white;
}
.siderow .card-list a span {
  padding-left: 5px;
  font-size: 15px;
}
.card-text {
  width: 75%;
  height: 100%;
  display: inline-block;
}
.card-text p {
  text-align: left;
  padding: 0 0 0 15px;
  margin: 0;
}

@media screen and (max-width: 600px) {
  .container {
    width: 85%;
    font-size: calc(10px + 1vh);
  }
  .siderow {
    margin: auto;
    width: 90%;
    display: block;
  }
  .siderow .card-image {
    width: 90%;
    margin: auto;
    padding: 4px;
  }
  .siderow li {
    text-align: center;
  }
  .card-text {
    display: block;
    margin: 20px 0 20px 0;
    width: 100%;
  }
}
</style>
