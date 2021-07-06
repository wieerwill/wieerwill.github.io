<template lang="pug">
div 
  .title
    .outrun.small.glow all you need
    .chrome.medium.shine(data-text="Skills & Tools") Skills & Tools

  .container
    em &laquo;With the right tools, everything is possible&raquo;

    .row.skills
      h3.chrome.small.shine(data-text="Hire me to get") Hire me to get
      .progress-bar(v-for="skill in skills", :key="skill.title")
        .skill-bar
          .progress(v-bind:style="{ width: skill.progress + '%' }")
        h4 {{ skill.title }}

    .row
      .chrome.small.shine(data-text="my Tools") my Tools
      .column(v-for="tool of tools", :key="tool.name", :class="tool.kategory")
        a.card(:href="tool.link")
          img(:src="`icons/${tool.logo}`")
  .footer
    NuxtLink.navbutton(to="/") Home
    NuxtLink.navbutton(to="/profile") Profile
    NuxtLink.navbutton(to="/projects") Projects
    NuxtLink.navbutton(to="/certification") Certification
</template>

<script>
export default {
  head: {
    title: "Skills",
  },
  data() {
    return {
      kategorys: ["Design", "WebDev", "Programming", "Divers"],
      skills: [
        {
          title:
            "Solid background and advanced knowledge in computer development software including C++, Python and JavaScript",
          progress: 90,
        },
        {
          title:
            "Skilled in working with big databases and database management tools such as MySQL and MongoDB",
          progress: 70,
        },
        {
          title:
            "Highly organized with exceptional commitment to task completion and quality assurance",
          progress: 80,
        },
        {
          title:
            "Committed to delivering company objectives to projects and improving each version of software I engage with",
          progress: 60,
        },
        {
          title:
            "Ability to solve complex problems successfully with minimal guidance or help using a logical reasoning technique and a strong attention to detail",
          progress: 80,
        },
        {
          title:
            "Leading teams and creating a proactive selforganising structure",
          progress: 90,
        },
        { title: "Creativity involved in each project", progress: 100 },
        { title: "Motivation to gain more", progress: 100 },
      ],
      tools: [
        {
          name: "Adobe Photoshop",
          kategory: "Design",
          logo: "photoshop.jpg",
          link: "https://www.adobe.com/de/products/photoshop.html",
          description:
            "Adobe Photoshop is an image processing program for pixel graphics from the US software house Adobe Inc. In the field of image processing and pre-press, the program is the world market leader and dominates the market.",
        },
        {
          name: "Angular",
          kategory: "Frontend",
          logo: "angular.png",
          link: "https://angular.io",
          description:
            "Angular is a TypeScript-based front-end web application framework. Achieve the maximum speed possible on the Web platform today and take it to the next level with the help of Web workers and server-side rendering.",
        },
        {
          name: "Anime.js",
          kategory: "Design",
          logo: "animejs.gif",
          link: "https://animejs.com",
          description:
            "Anime.js is a lightweight JavaScript animation library with a simple but powerful API. With the help of CSS properties, SVG, DOM attributes and Javascript objects, complex web pages, animations and moving graphics can be created quickly.",
        },
        {
          name: "Blender",
          kategory: "Design",
          logo: "blender.png",
          link: "https://www.blender.org",
          description:
            "Blender is one of the best among the open source programs, because it leaves hardly any wishes unfulfilled. Designing and modeling 3D objects and animations is no problem, so Blender can be used for videos, pictures or games. Blender's features include object and figure sculpting, modeling with N-gon and script support, rigging for figure movement, animation with sound synchronization and automatically or individually defined movements. Complex particle simulations, a complete game engine and a video editing and effects tool complete this.",
        },
        {
          name: "Bootstrap",
          kategory: "Frontend",
          logo: "bootstrap.jpg",
          link: "https://getbootstrap.com",
          description:
            "Bootstrap, a comprehensive yet lightweight mobile first frond end framework for easier and faster development on the web.",
        },
        {
          name: "C",
          kategory: "Programming",
          logo: "code_c.png",
          link: "https://de.wikipedia.org/wiki/C_(Programmiersprache)",
          description:
            "C is an imperative and procedural programming language developed by computer scientist Dennis Ritchie at Bell Laboratories in the early 1970s. Since then it has become one of the most widely used programming languages.",
        },
        {
          name: "C++",
          kategory: "Programming",
          logo: "cpp.png",
          link: "https://de.wikipedia.org/wiki/C%2B%2B",
          description:
            "C++ enables both efficient and machine-oriented programming and programming at a high level of abstraction. The standard also defines a standard library for which various implementations exist.",
        },
        {
          name: "C#",
          kategory: "Programming",
          logo: "code_csharp.jpg",
          link: "https://de.wikipedia.org/wiki/C-Sharp",
          description:
            "C# is a type-safe, object-oriented general-purpose programming language. The language is platform-independent in itself, but was developed within the framework of the .NET strategy, is optimized for it and is usually found in its context.",
        },
        {
          name: "CSS",
          kategory: "Websites",
          logo: "css.png",
          link: "https://de.wikipedia.org/wiki/Cascading_Style_Sheets",
          description:
            "Cascading Style Sheets, or CSS for short, is a stylesheet language for electronic documents and, together with HTML and DOM, one of the core languages of the World Wide Web.",
        },
        {
          name: "Django",
          kategory: "Backend",
          logo: "django.png",
          link: "https://www.djangoproject.com",
          description:
            "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. Developed by experienced programmers, it takes care of much of the hassle of web development, so we can focus on writing your app without having to reinvent the wheel. It is free and open source.",
        },
        {
          name: "GatsbyJS",
          kategory: "Backend",
          logo: "gatsby.png",
          link: "https://www.gatsbyjs.org",
          description:
            "GatsbyJS was born in May 2015 as an easy way to create a website with React. Over the past three years, tens of thousands of developers have used Gatsby to create websites from blogs and portfolio pages to corporate homepages and e-commerce applications.",
        },
        {
          name: "GIMP",
          kategory: "Design",
          logo: "gimp.jpg",
          link: "https://www.gimp.org",
          description:
            "GIMP (GNU Image Manipulation Program) is a pixel-based graphics program that includes functions for image processing and digital painting of raster graphics. GIMP supports more than thirty file formats.",
        },
        {
          name: "HTML",
          kategory: "Websites",
          logo: "html.png",
          link: "https://de.wikipedia.org/wiki/Hypertext_Markup_Language",
          description:
            "The Hypertext Markup Language, abbreviated HTML, is a text-based markup language for structuring electronic documents such as texts with hyperlinks, images and other content. HTML documents are the basis of the World Wide Web and are displayed by web browsers.",
        },
        {
          name: "Inkscape",
          kategory: "Design",
          logo: "incscape.jpg",
          link: "https://inkscape.org",
          description:
            "The Vector graphics program Inkscape is an open source drawing program with which logos, banners, posters and much more can be designed. The program is compatible with the SVG format, but can also import EPS, Postscript, JPG, PNG, BMP or TIF images and export them to PNG or other vector-based formats. Even direct editing of XML codes in the XML editor is possible.",
        },
        {
          name: "Java",
          kategory: "Programming",
          logo: "java.jpg",
          link: "https://de.wikipedia.org/wiki/Java_(Programmiersprache)",
          description:
            "Within the Java technology, the programming language Java is mainly used to formulate programs. The Java compiler, which is part of the development tool, translates the source code of the program into the machine-understandable Java byte code for later execution.",
        },
        {
          name: "JavaScript",
          kategory: "Websites",
          logo: "javascript.png",
          link: "https://de.wikipedia.org/wiki/JavaScript",
          description:
            "JavaScript is a scripting language originally developed in 1995 by Netscape for dynamic HTML in web browsers to evaluate user interactions, modify, reload or generate content and thus extend the possibilities of HTML and CSS. Today, JavaScript is also used outside browsers, for example on servers and in microcontrollers.",
        },
        {
          name: "Magento",
          kategory: "Shop",
          logo: "magento.jpg",
          link: "https://magento.com",
          description:
            "Magento is an online shop software and was released in 2008 as an open source e-commerce platform. Magento is used on 1.3% of all websites and is therefore the most widely used pure online shop software.",
        },
        {
          name: "Markdown",
          kategory: "Websites",
          logo: "markdown.png",
          link: "https://markdown.de",
          description:
            "Markdown is a simple syntax for generating HTML code from text documents, similar to the formatting of plain text email. One goal of Markdown is that the original form is already easily readable without further conversion.",
        },
        {
          name: "Materialize",
          kategory: "Frontend",
          logo: "materialize.jpg",
          link: "https://materializecss.com",
          description:
            "A modern responsive front-end framework based on material design",
        },
        {
          name: "MongoDB",
          kategory: "Backend",
          logo: "mongodb.png",
          link: "https://www.mongodb.com",
          description:
            "MongoDB is a document-oriented NoSQL database written in the programming language C++. Because the database is document-oriented, it can manage collections of JSON-like documents.",
        },
        {
          name: "NodeJs",
          kategory: "Backend",
          logo: "nodejs.jpg",
          link: "https://nodejs.org",
          description:
            "Node.js is a server-side platform in software development for operating network applications. In particular, web servers can be realized with it.",
        },
        {
          name: "OpenCart",
          kategory: "Shop",
          logo: "opencart.jpg",
          link: "https://www.opencart.com",
          description:
            "The OpenCart marketplace offers over 13000 modules and themes to start, grow and expand your shop. Here you will find nice topics for almost every industry, service integrations, payment providers, shipping methods, social media, marketing, accounting, reporting, sales and language packs.",
        },
        {
          name: "OpenSCAD",
          kategory: "Design",
          logo: "openscad.jpg",
          link: "http://openscad.org",
          description:
            "In the free CAD software, 3D models are created with a text-based description language. The objects consist of simple geometric basic bodies and are combined with transformations and modifications to a complex 3D model. The modelling is based on CSG technology. Animations can also be realized with OpenSCAD.",
        },
        {
          name: "PayPal",
          kategory: "Shop",
          logo: "paypal.png",
          link: "https://paypal.com",
          description:
            "PayPal is a listed operator of an online payment service that can be used for the payment of medium and small amounts, for example when buying and selling in online commerce.",
        },
        {
          name: "PHP",
          kategory: "Backend",
          logo: "php.png",
          link: "https://php.net",
          description:
            "PHP is a scripting language with a syntax similar to C and Perl, which is mainly used to create dynamic websites or web applications. PHP is distributed as free software under the PHP license. NorthScorp uses both PHP version 5 and version 7 and, in addition to self-developed frameworks, Laravel.",
        },
        {
          name: "Phyton",
          kategory: "Programming",
          logo: "phyton.jpg",
          link: "https://www.python.org",
          description:
            "Python is a dynamic, object-oriented programming language for scripts and rapid application development. Python offers extensive support for the integration of other languages as well as tools and contains numerous standard libraries.",
        },
        {
          name: "React",
          kategory: "Frontend",
          logo: "react.png",
          link: "https://reactjs.org",
          description:
            "React is a JavaScript software library that provides a basic framework for the output of user interface components of web pages.",
        },
        {
          name: "Semantic UI",
          kategory: "Frontend",
          logo: "semantic.png",
          link: "https://semantic-ui.com",
          description:
            "Semantic is a development framework that helps to create beautiful and appealing layouts with human friendly HTML. Concise HTML classes use syntax from natural languages such as noun/modifier relationships, word order and plurality to intuitively connect concepts.",
        },
        {
          name: "SQL",
          kategory: "Backend",
          logo: "sql.png",
          link: "https://de.wikipedia.org/wiki/SQL",
          description:
            "SQL is a database language for the definition of data structures in relational databases as well as for processing and querying data sets based on them. MySQL and NoSQL are two of the most common relational database management systems in the world.",
        },
        {
          name: "Woo Commerce",
          kategory: "Shop",
          logo: "woo.png",
          link: "https://woocommerce.com/",
          description:
            "WooCommerce is a free plug-in for WordPress, which adds the functionality of an online shop to the content management system. It has been downloaded more than 15 million times.",
        },
        {
          name: "Vue",
          kategory: "Frontend",
          logo: "Vue.png",
          link: "https://vuejs.org",
        },
      ],
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
