<template lang="pug">
div 
  .title
    .outrun.small.glow work and stuff
    .chrome.medium.shine(data-text="Projects") Projects

  .container
    em &laquo;Do what you love and work is a hobby&raquo;
    #timeline
      .timeline-item(
        v-for="(project, i) in projects",
        :key="i",
        :datetime="project.datetime"
      )
        h2 {{ project.title }}
        p {{ project.description }}
        a.button(v-if="project.link", :href="project.link") more infos
      .timeline-item(datetime="today")
        h2 more is coming soon
        p be sure to check my github page

  .footer
    NuxtLink.navbutton(to="/") Home
    NuxtLink.navbutton(to="/profile") Profile
    NuxtLink.navbutton(to="/skills") Skills
    NuxtLink.navbutton(to="/certification") Certification
</template>


<style scoped>
.container {
  color: white;
  width: 80%;
  margin: auto;
  margin-top: 25vh;
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

<script>
export default {
  head: {
    title: 'Projects'
  },
  data() {
    return {
      projects: [
        {
          datetime: "2012 - 2016",
          title: "RoboCup participants",
          description:
            "With a team up to four we build and programmed multiple robots to play football against each other or 2v2.With much fun and learning we worked together for several years and remain our friendships.",
          link: "https://robocupgermanopen.de/de/junior/soccer",
        },
        {
          datetime: "2016 - 2019",
          title: "UNIKAT",
          description:
            "My first club at University of Ilmenau: UNIKAT, the makerspace for students and scholars.Here i worked for nearly three years on 3d - printers, CNC - milling - machines and much more.Each semester we also made a workshop week and gave our knowledge to further students.I retired at the end of 2019 but am still visiting and sometimes working there.",
          link: "https://www.tu-ilmenau.de/unikat",
        },
        {
          datetime: "2018 - today",
          title: "Robocup Volunteer",
          description:
            "After school my university didn't have a robotics contest so i am currently volunteering as referee and helping hand for the organizers.",
          link: "https://robocupgermanopen.de/de",
        },
        {
          datetime: "2018 - today",
          title: "Engineers without borders ",
          description:
            "Who are we? Engineering students! What are we doing ? Helping other people! As some of us are planning and working on projects down in africa i am responsible for the repair cafe to keep things running.",
          link: "https://ingenieure-ohne-grenzen.org/de/ilmenau",
        },
        {
          datetime: "2018",
          title: "Python Intro",
          description:
            "I am programming for many years now and want to start making cheatsheets and introductions to several programming languages. Python wasn't my first language but i think is for most the easiest to begin with. Therefor i started this Project on Github.",
          link: "https://github.com/wieerwill/Python-Intro",
        },
        {
          datetime: "2018 - today",
          title: "BI Student Club",
          description:
            "Mainly because of the music i joined this club on my campus.With good old (and new) metal and rock we got some of the hardest partys and best members you can imagine. After some time i am one of our head technicans was responsible for our cultural programm and association communication.",
          link: "http://www.bi-club.de",
        },
        {
          datetime: "2019",
          title: "Project management",
          description:
            "Working with a team you get to know that nobody has that much of a overview what tools you can use to work and participate. This bilingual sheet is a short overview of tools and programms to make your cooperations and projects easier.",
          link: "https://github.com/wieerwill/Project-Management",
        },
        {
          datetime: "2019 - today",
          title: "GitHub Showcard",
          description:
            "You want to be seen and show people what you do? This page is an example of my business card project. Feel free to use it for your own. A description on how to get free webspace included.",
          link: "https://github.com/wieerwill/wieerwill.github.io",
        },
        {
          datetime: "2019 - today",
          title: "Informatik",
          description:
            "Ever been interested what they teach at university? Need help or are lost? Take a look at my notes from university that i and my commilitones write down during our studies.",
          link: "https://github.com/wieerwill/informatik",
        },
        {
          datetime: "2020",
          title: "NodeJS Boilerplate",
          description:
            "Start your NodeJS Project today with my simple but structured boilerplate. Don't get anything confused with this organized project map and documentation.",
          link: "https://github.com/wieerwill/nodejs-boilerplate",
        },
        {
          datetime: "2020",
          title: "DSGVO Templates",
          description:
            "Want to make use of your privacy rights? Use my templates for free and get all you need with little work.",
          link: "https://github.com/wieerwill/dsgvo-templates",
        },
        {
          datetime: "2020",
          title: "Wandern bringt Wissen",
          description:
            "In collaboration with Engineers without Borders, this website is a fundraiser to encourage regional companies to support the 'Water for Nyamache' project and many other.",
          link: "",
        },
        {
          datetime: "2020",
          title: "Ilmenauer Studentenclub e.V.",
          description:
            "After being active in one of the sections for several years, I was elected to the board of the association. In this position, I manage, organise and plan four student clubs and a student café with three other board members in close cooperation with the individual sections. This work is more exciting than before in other associations, especially because of the Corona situation.",
          link: "http://il-sc.de",
        },
        {
          datetime: "2021",
          title: "CocktailShaker App",
          description:
            "This App works on the web, iOS and Android and lets you discover new and interesting drinks. It's build on Ionic, Vue and the CocktailDB. This App is part of a university project.",
          link: "https://github.com/wieerwill/CocktailShaker-App",
        },
      ],
    };
  },
};
</script>
