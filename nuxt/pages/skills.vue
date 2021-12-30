<template lang="pug">
div 
  .title
    .outrun.small.glow {{ subtitle }}
    .chrome.medium.shine(:data-text="title") {{ title }}

  .container
    em &laquo;{{ quote }}&raquo;

    .row.skills
      h3.chrome.small.shine(:data-text="hireme") {{ hireme }}
      .progress-bar(v-for="skill in skills", :key="skill.title")
        .skill-bar
          .progress(v-bind:style="{ width: skill.progress + '%' }")
        h4 {{ skill.title }}

    .row
      .chrome.small.shine(:data-text="myTools") {{ myTools }}
      .column(v-for="tool of tools", :key="tool.name", :class="tool.kategory")
        a.card(:href="tool.link")
          img(:src="`icons/${tool.logo}`")
  .footer
    NuxtLink.navbutton(to="/") {{ homeLink }}
    NuxtLink.navbutton(to="/profile") {{ profileLink }}
    NuxtLink.navbutton(to="/projects") {{ projectLink }}
    NuxtLink.navbutton(to="/certification") {{ certificationLink }}
</template>

<script>
import life from "../life";
export default {
  head: {
    title: life.skills.title,
  },
  data() {
    return {
      title: life.skills.title,
      subtitle: life.skills.subtitle,
      quote: life.skills.quote,
      hireme: life.skills.hireme,
      myTools: life.skills.myTools,
      kategorys: life.skills.kategoryList,
      skills: life.skills.skillList,
      tools: life.skills.toolList,
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
.skills h3.chrome {
  margin-bottom: 0;
  padding-bottom: 5px;
}
.skills {
  margin-bottom: 100px;
}
.progress-bar {
  text-align: left;
  width: 80%;
  margin: 30px auto;
  padding: 0;
}
.skill-bar {
  width: 20%;
  height: 20px;
  background-color: rgba(126, 117, 115, 0.6);
  display: inline-block;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  margin: 0 auto;
  padding: 5px;
}
.progress {
  margin: 4px;
  padding: 0;
  min-width: 1%;
  max-width: 99%;
  height: 12px;
  animation: progress 3s linear infinite;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  background-image: linear-gradient(
    -45deg,
    #92ce72 25%,
    #70c542 25%,
    #70c542 50%,
    #92ce72 50%,
    #92ce72 75%,
    #70c542 75%,
    #70c542
  );
  background-size: 20px 20px;
}
.progress-bar h4 {
  font-size: 15px;
  width: 70%;
  padding: 0 15px;
  margin: 0;
  display: inline-block;
  background-color: rgba(76, 0, 130, 0.3);
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
}
@keyframes progress {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}

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
.column {
  float: left;
  width: 10%;
  min-height: 100px;
  padding: 2%;
}
.card img {
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15%;
  height: 50px;
  max-width: 100%;
  border-radius: 10%;
  -webkit-box-shadow: 0px 0px 28px 4px rgba(113, 22, 218, 0.705);
  -moz-box-shadow: 0px 0px 28px 4px rgba(113, 22, 218, 0.705);
  box-shadow: 0px 0px 28px 4px rgba(113, 22, 218, 0.705);
}

@media screen and (max-width: 600px) {
  .column {
    width: 40%;
    display: block;
    margin: auto auto 10px auto;
    min-height: 100px;
  }
  .skills .progress-bar {
    text-align: center;
  }
}
</style>
