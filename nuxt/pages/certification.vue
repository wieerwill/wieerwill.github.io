<template lang="pug">
div 
  .title
    .outrun.small.glow {{ subtitle }}
    .chrome.medium.shine(:data-text="title") {{ title }}

  .container
    em &laquo;{{ quote }}&raquo;
    .gallery
      article(v-for="cert in certification", :key="cert.title")
        h4 {{ cert.title }}
        p(v-for="text in cert.text") {{ text }}
  .footer
    NuxtLink.navbutton(to="/") {{ homeLink }}
    NuxtLink.navbutton(to="/profile") {{ profileLink }}
    NuxtLink.navbutton(to="/skills") {{ skillLink }}
    NuxtLink.navbutton(to="/projects") {{ projectLink }}
</template>

<script>
import life from "../life";

export default {
  head: {
    title: life.certification.title,
  },
  data() {
    return {
      show: false,
      title: life.certification.title,
      subtitle: life.certification.subtitle,
      quote: life.certification.quote,
      certification: life.certification.list,
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
  text-align: center;
}
.container em {
  margin: 20px;
}
.gallery {
  margin: 100px 0;
}
.gallery article {
  width: 60%;
  margin: 30px auto;
  min-height: 60px;
  background: linear-gradient(
    95deg,
    #343a80de 0%,
    #3d4a75de 13%,
    #6668aade 18%,
    #0092dbde 39%,
    #e1217bde 54%,
    #a20e69de 63%,
    #670558de 83%,
    #27034bde 100%
  );
  border-radius: 60px 60px 60px 60px;
  animation: scanner 2s ease-in-out alternate both infinite;
}
.gallery article:nth-child(2) {
  animation-delay: 1s;
}
.gallery article:nth-child(3) {
  animation-delay: 0.5s;
}
.gallery article:nth-child(4) {
  animation-delay: 1.5s;
}
@keyframes scanner {
  0% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 0%,
      #6668aade 5%,
      #e1217bde 10%,
      #a20e69de 15%,
      #670558de 50%,
      #27034bde 100%
    );
  }
  15% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 5%,
      #6668aade 10%,
      #e1217bde 15%,
      #a20e69de 20%,
      #670558de 60%,
      #27034bde 100%
    );
  }
  25% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 10%,
      #6668aade 20%,
      #e1217bde 25%,
      #a20e69de 35%,
      #670558de 70%,
      #27034bde 100%
    );
  }
  33% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 10%,
      #6668aade 27%,
      #e1217bde 33%,
      #a20e69de 40%,
      #670558de 73%,
      #27034bde 100%
    );
  }
  40% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 10%,
      #6668aade 35%,
      #e1217bde 40%,
      #a20e69de 45%,
      #670558de 75%,
      #27034bde 100%
    );
  }
  50% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 20%,
      #6668aade 45%,
      #e1217bde 50%,
      #a20e69de 55%,
      #670558de 80%,
      #27034bde 100%
    );
  }
  60% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 35%,
      #6668aade 55%,
      #e1217bde 60%,
      #a20e69de 65%,
      #670558de 85%,
      #27034bde 100%
    );
  }
  67% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 30%,
      #6668aade 62%,
      #e1217bde 67%,
      #a20e69de 77%,
      #670558de 87%,
      #27034bde 100%
    );
  }
  75% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 25%,
      #6668aade 70%,
      #e1217bde 75%,
      #a20e69de 80%,
      #670558de 90%,
      #27034bde 100%
    );
  }
  85% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 35%,
      #6668aade 80%,
      #e1217bde 85%,
      #a20e69de 90%,
      #670558de 95%,
      #27034bde 100%
    );
  }
  100% {
    background: linear-gradient(
      90deg,
      #343a80de 0%,
      #3d4a75de 50%,
      #6668aade 85%,
      #e1217bde 90%,
      #a20e69de 95%,
      #670558de 100%,
      #27034bde 100%
    );
  }
}
article h4 {
  padding: 10px auto 0 auto;
  margin: 10px auto;
}
article p {
  width: 80%;
  font-size: 20px;
  padding-top: 0;
  margin: 0 auto;
}
@media screen and (max-width: 600px) {
  .gallery {
    margin: 10px 0;
  }
  .gallery article {
    width: 100%;
  }
  article h4 {
    font-size: 15px;
  }
  article p {
    font-size: 10px;
  }
}
</style>
