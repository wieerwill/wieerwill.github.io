const life = {
    home: {
        link: "Home",
        title1: "Wie", //splitted to fit star
        title2: "erwill",
        subtitle: "GitHub.io",
        button1: "St", //splitted cause of effect blink
        button2: "art",
        githubLink: "https://github.com/wieerwill"
    },
    certification: {
        link: "Certificaton",
        title: "Certifications",
        subtitle: "show me what you got",
        quote: "What is a piece of paper else a note in time?",
        list: [{
                title: "FullStack Web Developer",
                text: [
                    "Frontend with Angular, Vue and more",
                    "Backend with NodeJS, C++ and more",
                ],
            },
            {
                title: "Software Developer",
                text: ["Trained C/C++ Dev with agil and unified approach"],
            },
            {
                title: "Data Protection Officer",
                text: ["trained & qualified specialist", "BDSG & GDPR"],
            },
            {
                title: "SixSigma Yellow Belt",
                text: ["trained project management, improvment and quality ensurance"],
            },
        ]
    },
    profile: {
        link: "Profile",
        title: "Robert Jeutter",
        subtitle: "Developer &middot; Dataprotector &middot; Photographer",
        text: `Welcome to my Card,<br/>
      currently I am working at <a href="https://www.aracom.de"> AraCom It Service AG</a> in the fields of Computer Science and Development. <br/> 
      In addition i am working on different projects at my free time here on Github and else. <br/>
      My Hobbies include programming, building robots ever since my <a href="https://www.robocup.org/"> RoboCup </a> Qualifications and electromechanical machines.`,
        linklist: [{
                link: "mailto:jeutter@northscorp.de",
                icon: "mail",
                text: "Mail"
            },
            {
                link: "http://www.github.com/wieerwill",
                icon: "code",
                text: "GitHub"
            },
            {
                link: "https://www.udemy.com/user/robert-jeutter/",
                icon: "school",
                text: "Udemy"
            },
            {
                link: "https://www.freecodecamp.org/wieerwill",
                icon: "local_library",
                text: "CodeCamp"
            },
            {
                link: "https://instagram.com/wieerwill",
                icon: "photo_camera",
                text: "Instagram"
            }
        ]
    },
    projects: {
        link: "Projects",
        title: "Projects",
        subtitle: "work and stuff",
        quote: "Do what you love and work is a hobby",
        projectlist: [ //list will be printed in reverse, start with your oldest entry, this will be put at the bottom and the newest entry will be put on top
            {
                datetime: "...future",
                title: "more is coming soon",
                description: "be sure to check my github page from time to time"
            },
            {
                datetime: "2012 - 2016",
                title: "RoboCup participants",
                description: "With a team up to four we build and programmed multiple robots to play football against each other or 2v2.With much fun and learning we worked together for several years and remain our friendships.",
                link: "https://robocupgermanopen.de/de/junior/soccer",
            },
            {
                datetime: "2016 - 2019",
                title: "UNIKAT",
                description: "My first club at University of Ilmenau: UNIKAT, the makerspace for students and scholars.Here i worked for nearly three years on 3d - printers, CNC - milling - machines and much more.Each semester we also made a workshop week and gave our knowledge to further students.I retired at the end of 2019 but am still visiting and sometimes working there.",
                link: "https://www.tu-ilmenau.de/unikat",
            },
            {
                datetime: "2018 - today",
                title: "Robocup Volunteer",
                description: "During school taking part at RoboCup Soccer 1v1 and 2v2 for ~7 years. After school my university didn't have a robotics contest so i am currently volunteering as referee and helping hand for the organizers.",
                link: "https://robocupgermanopen.de/de",
            },
            {
                datetime: "2018 - 2023",
                title: "Engineers without borders ",
                description: "Who are we? Engineering students! What are we doing ? Helping other people! As some of us are planning and working on projects down in africa i am responsible for the repair cafe to keep things running.",
                link: "https://ingenieure-ohne-grenzen.org/de/ilmenau",
            },
            {
                datetime: "2018",
                title: "Python Intro",
                description: "I am programming for many years now and want to start making cheatsheets and introductions to several programming languages. Python wasn't my first language but i think is for most the easiest to begin with. Therefor i started this Project on Github.",
                link: "https://github.com/wieerwill/Python-Intro",
            },
            {
                datetime: "2018 - 2021",
                title: "BI Student Club",
                description: "Mainly because of the music i joined this club on my campus.With good old (and new) metal and rock we got some of the hardest partys and best members you can imagine. After some time i am one of our head technicans was responsible for our cultural programm and association communication.",
                link: "http://www.bi-club.de",
            },
            {
                datetime: "2019",
                title: "Project management",
                description: "Working with a team you get to know that nobody has that much of a overview what tools you can use to work and participate. This bilingual sheet is a short overview of tools and programms to make your cooperations and projects easier.",
                link: "https://github.com/wieerwill/Project-Management",
            },
            {
                datetime: "2019 - today",
                title: "GitHub Showcard",
                description: "You want to be seen and show people what you do? This page is an example of my business card project. Feel free to use it for your own. A description on how to get free webspace included.",
                link: "https://github.com/wieerwill/wieerwill.github.io",
            },
            {
                datetime: "2019 - 2022",
                title: "Informatik",
                description: "Ever been interested what they teach at university? Need help or are lost? Take a look at my notes from university that i and my commilitones write down during our studies.",
                link: "https://github.com/wieerwill/informatik",
            },
            {
                datetime: "2020",
                title: "NodeJS Boilerplate",
                description: "Start your NodeJS Project today with my simple but structured boilerplate. Don't get anything confused with this organized project map and documentation.",
                link: "https://github.com/wieerwill/nodejs-boilerplate",
            },
            {
                datetime: "2020",
                title: "DSGVO Templates",
                description: "Want to make use of your privacy rights? Use my templates for free and get all you need with little work.",
                link: "https://github.com/wieerwill/dsgvo-templates",
            },
            {
                datetime: "2020-2022",
                title: "Ilmenauer Studentenclub e.V.",
                description: "After being active in one of the sections for several years, I was elected to the board of the association. In this position, I manage, organise and plan four student clubs and a student café with three other board members in close cooperation with the individual sections. This work is more exciting than before in other associations, especially because of the Corona situation.",
                link: "http://il-sc.de",
            },
            {
                datetime: "2021",
                title: "CocktailShaker App",
                description: "This App works on the web, iOS and Android and lets you discover new and interesting drinks. It's build on Ionic, Vue and the CocktailDB. This App is part of a university project.",
                link: "https://github.com/wieerwill/CocktailShaker-App",
            },
            {
                datetime: "2021",
                title: "Berufsverband der Datenschutzbeauftragten Deutschlands e.V.",
                description: "Active Member of the Association of Data Protection Officers Germany (BvD). We represent the interests of data protection officers from all over Germany. The members consult companies and administrations on how they can integrate the complex requirements for effective data protection into their operational processes.",
                link: "https://www.bvdnet.de/"
            },
            {
                datetime: "2021",
                title: "AEGIS DoS Protection",
                description: "AEGIS aims to defend your system against denial-of-service attacks through efficient user-space packet processing. It was build during a software project at the TU Ilmenau.",
                link: "https://github.com/wieerwill/aegis-dos-protection"
            },
            {
                datetime: "2021-2022",
                title: "Objektposenschätzung",
                description: "Object-Pose-Estimation is a work for university regarding state of the art technologies to detect novel objects in RGB and RGB-D inputs and estimating their 3-dimensional scale, translation and rotation. Pre-Work for robot automation to be able to grab new objects.",
                link: "https://github.com/wieerwill/Objektposenschaetzung"
            },
            {
                datetime: "2021",
                title: "MobilePenBerry",
                description: "This is a little project aiming for a multi-purpose mobile Penetration, Pwning and Wifi-Testing Station on a RaspberryPi. Next to that i gather all snippets and helps related to RaspberryPi and additonal parts. Only for LAWFUL, ETHICAL AND EDUCATIONAL PURPOSES",
                link: "https://github.com/wieerwill/MobilePenBerry"
            },
            {
                datetime: "2021",
                title: "GO Playground",
                description: "With my PenBerry up and running well i wanted to get deeper into GO. This repository is a collection of tutorials and simple self-made programs to test and play with GO.",
                link: "https://github.com/wieerwill/go_playground"
            },
            {
                datetime: "2022",
                title: "C++ Playground",
                description: "Here you can find different C/C++ programms, compilers and tools to work with C++. Get to know and play with this great language i use now for over a decade.",
                link: "https://github.com/wieerwill/cpp_playground"
            },
            {
                datetime: "2023",
                title: "RoboCup Team @Home",
                description: "This year the AraCom IT Services GmbH got me funded to start a own RoboCup Team. We will take part in the @Home League and work together with variuos Universities."
            }
        ],
    },
    skills: {
        link: "Skills",
        title: "Skills & Tools",
        subtitle: "all you need",
        quote: "With the right tools, everything is possible",
        hireme: "",
        myTools: "my Tools",
        kategoryList: ["Design", "WebDev", "Programming", "Divers"],
        skillList: [{
                title: "Solid background and advanced knowledge in computer development software including C++, Python and JavaScript",
                progress: 90,
            },
            {
                title: "Skilled in working with big databases and database management tools such as MySQL and MongoDB",
                progress: 70,
            },
            {
                title: "Highly organized with exceptional commitment to task completion and quality assurance",
                progress: 80,
            },
            {
                title: "Committed to delivering company objectives to projects and improving each version of software I engage with",
                progress: 60,
            },
            {
                title: "Ability to solve complex problems successfully with minimal guidance or help using a logical reasoning technique and a strong attention to detail",
                progress: 80,
            },
            {
                title: "Leading teams and creating a proactive selforganising structure",
                progress: 90,
            },
            {
                title: "Creativity involved in each project",
                progress: 100
            },
            {
                title: "Motivation to gain more",
                progress: 100
            },
        ],
        toolList: [{
                name: "Adobe Photoshop",
                kategory: "Design",
                logo: "photoshop.jpg",
                link: "https://www.adobe.com/de/products/photoshop.html",
                description: "Adobe Photoshop is an image processing program for pixel graphics from the US software house Adobe Inc. In the field of image processing and pre-press, the program is the world market leader and dominates the market.",
            },
            {
                name: "Angular",
                kategory: "Frontend",
                logo: "angular.png",
                link: "https://angular.io",
                description: "Angular is a TypeScript-based front-end web application framework. Achieve the maximum speed possible on the Web platform today and take it to the next level with the help of Web workers and server-side rendering.",
            },
            {
                name: "Anime.js",
                kategory: "Design",
                logo: "animejs.gif",
                link: "https://animejs.com",
                description: "Anime.js is a lightweight JavaScript animation library with a simple but powerful API. With the help of CSS properties, SVG, DOM attributes and Javascript objects, complex web pages, animations and moving graphics can be created quickly.",
            },
            {
                name: "Blender",
                kategory: "Design",
                logo: "blender.png",
                link: "https://www.blender.org",
                description: "Blender is one of the best among the open source programs, because it leaves hardly any wishes unfulfilled. Designing and modeling 3D objects and animations is no problem, so Blender can be used for videos, pictures or games. Blender's features include object and figure sculpting, modeling with N-gon and script support, rigging for figure movement, animation with sound synchronization and automatically or individually defined movements. Complex particle simulations, a complete game engine and a video editing and effects tool complete this.",
            },
            {
                name: "Bootstrap",
                kategory: "Frontend",
                logo: "bootstrap.jpg",
                link: "https://getbootstrap.com",
                description: "Bootstrap, a comprehensive yet lightweight mobile first frond end framework for easier and faster development on the web.",
            },
            {
                name: "C",
                kategory: "Programming",
                logo: "code_c.png",
                link: "https://de.wikipedia.org/wiki/C_(Programmiersprache)",
                description: "C is an imperative and procedural programming language developed by computer scientist Dennis Ritchie at Bell Laboratories in the early 1970s. Since then it has become one of the most widely used programming languages.",
            },
            {
                name: "C++",
                kategory: "Programming",
                logo: "cpp.png",
                link: "https://de.wikipedia.org/wiki/C%2B%2B",
                description: "C++ enables both efficient and machine-oriented programming and programming at a high level of abstraction. The standard also defines a standard library for which various implementations exist.",
            },
            {
                name: "C#",
                kategory: "Programming",
                logo: "code_csharp.jpg",
                link: "https://de.wikipedia.org/wiki/C-Sharp",
                description: "C# is a type-safe, object-oriented general-purpose programming language. The language is platform-independent in itself, but was developed within the framework of the .NET strategy, is optimized for it and is usually found in its context.",
            },
            {
                name: "CSS",
                kategory: "Websites",
                logo: "css.png",
                link: "https://de.wikipedia.org/wiki/Cascading_Style_Sheets",
                description: "Cascading Style Sheets, or CSS for short, is a stylesheet language for electronic documents and, together with HTML and DOM, one of the core languages of the World Wide Web.",
            },
            {
                name: "Django",
                kategory: "Backend",
                logo: "django.png",
                link: "https://www.djangoproject.com",
                description: "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. Developed by experienced programmers, it takes care of much of the hassle of web development, so we can focus on writing your app without having to reinvent the wheel. It is free and open source.",
            },
            {
                name: "GatsbyJS",
                kategory: "Backend",
                logo: "gatsby.png",
                link: "https://www.gatsbyjs.org",
                description: "GatsbyJS was born in May 2015 as an easy way to create a website with React. Over the past three years, tens of thousands of developers have used Gatsby to create websites from blogs and portfolio pages to corporate homepages and e-commerce applications.",
            },
            {
                name: "GIMP",
                kategory: "Design",
                logo: "gimp.jpg",
                link: "https://www.gimp.org",
                description: "GIMP (GNU Image Manipulation Program) is a pixel-based graphics program that includes functions for image processing and digital painting of raster graphics. GIMP supports more than thirty file formats.",
            },
            {
                name: "HTML",
                kategory: "Websites",
                logo: "html.png",
                link: "https://de.wikipedia.org/wiki/Hypertext_Markup_Language",
                description: "The Hypertext Markup Language, abbreviated HTML, is a text-based markup language for structuring electronic documents such as texts with hyperlinks, images and other content. HTML documents are the basis of the World Wide Web and are displayed by web browsers.",
            },
            {
                name: "Inkscape",
                kategory: "Design",
                logo: "incscape.jpg",
                link: "https://inkscape.org",
                description: "The Vector graphics program Inkscape is an open source drawing program with which logos, banners, posters and much more can be designed. The program is compatible with the SVG format, but can also import EPS, Postscript, JPG, PNG, BMP or TIF images and export them to PNG or other vector-based formats. Even direct editing of XML codes in the XML editor is possible.",
            },
            {
                name: "Java",
                kategory: "Programming",
                logo: "java.jpg",
                link: "https://de.wikipedia.org/wiki/Java_(Programmiersprache)",
                description: "Within the Java technology, the programming language Java is mainly used to formulate programs. The Java compiler, which is part of the development tool, translates the source code of the program into the machine-understandable Java byte code for later execution.",
            },
            {
                name: "JavaScript",
                kategory: "Websites",
                logo: "javascript.png",
                link: "https://de.wikipedia.org/wiki/JavaScript",
                description: "JavaScript is a scripting language originally developed in 1995 by Netscape for dynamic HTML in web browsers to evaluate user interactions, modify, reload or generate content and thus extend the possibilities of HTML and CSS. Today, JavaScript is also used outside browsers, for example on servers and in microcontrollers.",
            },
            {
                name: "Magento",
                kategory: "Shop",
                logo: "magento.jpg",
                link: "https://magento.com",
                description: "Magento is an online shop software and was released in 2008 as an open source e-commerce platform. Magento is used on 1.3% of all websites and is therefore the most widely used pure online shop software.",
            },
            {
                name: "Markdown",
                kategory: "Websites",
                logo: "markdown.png",
                link: "https://markdown.de",
                description: "Markdown is a simple syntax for generating HTML code from text documents, similar to the formatting of plain text email. One goal of Markdown is that the original form is already easily readable without further conversion.",
            },
            {
                name: "Materialize",
                kategory: "Frontend",
                logo: "materialize.jpg",
                link: "https://materializecss.com",
                description: "A modern responsive front-end framework based on material design",
            },
            {
                name: "MongoDB",
                kategory: "Backend",
                logo: "mongodb.png",
                link: "https://www.mongodb.com",
                description: "MongoDB is a document-oriented NoSQL database written in the programming language C++. Because the database is document-oriented, it can manage collections of JSON-like documents.",
            },
            {
                name: "NodeJs",
                kategory: "Backend",
                logo: "nodejs.jpg",
                link: "https://nodejs.org",
                description: "Node.js is a server-side platform in software development for operating network applications. In particular, web servers can be realized with it.",
            },
            {
                name: "OpenCart",
                kategory: "Shop",
                logo: "opencart.jpg",
                link: "https://www.opencart.com",
                description: "The OpenCart marketplace offers over 13000 modules and themes to start, grow and expand your shop. Here you will find nice topics for almost every industry, service integrations, payment providers, shipping methods, social media, marketing, accounting, reporting, sales and language packs.",
            },
            {
                name: "OpenSCAD",
                kategory: "Design",
                logo: "openscad.jpg",
                link: "http://openscad.org",
                description: "In the free CAD software, 3D models are created with a text-based description language. The objects consist of simple geometric basic bodies and are combined with transformations and modifications to a complex 3D model. The modelling is based on CSG technology. Animations can also be realized with OpenSCAD.",
            },
            {
                name: "PayPal",
                kategory: "Shop",
                logo: "paypal.png",
                link: "https://paypal.com",
                description: "PayPal is a listed operator of an online payment service that can be used for the payment of medium and small amounts, for example when buying and selling in online commerce.",
            },
            {
                name: "PHP",
                kategory: "Backend",
                logo: "php.png",
                link: "https://php.net",
                description: "PHP is a scripting language with a syntax similar to C and Perl, which is mainly used to create dynamic websites or web applications. PHP is distributed as free software under the PHP license. NorthScorp uses both PHP version 5 and version 7 and, in addition to self-developed frameworks, Laravel.",
            },
            {
                name: "Phyton",
                kategory: "Programming",
                logo: "phyton.jpg",
                link: "https://www.python.org",
                description: "Python is a dynamic, object-oriented programming language for scripts and rapid application development. Python offers extensive support for the integration of other languages as well as tools and contains numerous standard libraries.",
            },
            {
                name: "React",
                kategory: "Frontend",
                logo: "react.png",
                link: "https://reactjs.org",
                description: "React is a JavaScript software library that provides a basic framework for the output of user interface components of web pages.",
            },
            {
                name: "Semantic UI",
                kategory: "Frontend",
                logo: "semantic.png",
                link: "https://semantic-ui.com",
                description: "Semantic is a development framework that helps to create beautiful and appealing layouts with human friendly HTML. Concise HTML classes use syntax from natural languages such as noun/modifier relationships, word order and plurality to intuitively connect concepts.",
            },
            {
                name: "SQL",
                kategory: "Backend",
                logo: "sql.png",
                link: "https://de.wikipedia.org/wiki/SQL",
                description: "SQL is a database language for the definition of data structures in relational databases as well as for processing and querying data sets based on them. MySQL and NoSQL are two of the most common relational database management systems in the world.",
            },
            {
                name: "Woo Commerce",
                kategory: "Shop",
                logo: "woo.png",
                link: "https://woocommerce.com/",
                description: "WooCommerce is a free plug-in for WordPress, which adds the functionality of an online shop to the content management system. It has been downloaded more than 15 million times.",
            },
            {
                name: "Vue",
                kategory: "Frontend",
                logo: "Vue.png",
                link: "https://vuejs.org",
            },
        ],
    }
}

export default life;