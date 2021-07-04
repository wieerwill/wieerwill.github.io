<template lang="pug">
div 
  .title
    .outrun.small.glow Inventor &middot; Entrepreneur &middot; Student
    .chrome.medium.shine(data-text="Robert Jeutter") Robert Jeutter

  .container
    .siderow
      nuxt-img.card-image(src="pic.png")
      ul.card-list
        li
          a(href="mailto:jeutter@northscorp.de", target="_blank")
            span.material-icons mail
            span Mail
        li
          a(href="http://www.github.com/wieerwill", target="_blank")
            span.material-icons code
            span GitHub
        li
          a(href="http://www.northscorp.de", target="_blank")
            span.material-icons language
            span NorthScorp
        li
          a(href="http://www.tu-ilmenau.de", target="_blank")
            span.material-icons account_balance
            span TU Ilmenau
        li
          a(href="https://www.udemy.com/user/robert-jeutter/", target="_blank")
            span.material-icons school
            span Udemy
        li
          a(
            href="https://www.freecodecamp.org/robert-jeutter",
            target="_blank"
          )
            span.material-icons local_library
            span CodeCamp
    .card-text
      p Welcome to my Card,
        br
        | currently I am studying at&nbsp;
        i
          a(href="http://www.tu-ilmenau.de") Technical University of Ilmenau&nbsp;
        | in the fields of Computer Sience and Biomechatronics.&nbsp;
        | In addition i am an active member of the&nbsp;
        a(href="https://www.bi-club.de") student club
        | ,
        a(href="https://ingenieure-ohne-grenzen.org/") &nbsp;Engineers without Borders&nbsp;
        |
        | and building up my own business&nbsp;
        a(href="https://www.northscorp.de") NorthScorp
        | .&nbsp;
        br
        | My Hobbies include Programming, building Robots ever since my&nbsp;
        a(href="https://www.robocup.org/") RoboCup&nbsp;
        | Qualifications and electromechanical Machines.

  .footer
    NuxtLink.navbutton(to="/") Home
    NuxtLink.navbutton(to="/skills") Skills
    NuxtLink.navbutton(to="/projects") Projects
    NuxtLink.navbutton(to="/certification") Certification
</template>

<script>
export default {
  head: {
    title: 'Profile'
  },
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  margin-top: 25vh;
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
