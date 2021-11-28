
function formatDate(date: any) {
  return date.toLocaleString("en-us", { year: "numeric", month: "long" })
}
const items = [
  {
    title: "Senior Front-end Developer",
    company: "Explorado",
    companyLogo: 'explorado',
    period: {
      start: formatDate(new Date("Jan 08, 2021")),
      end: 'Present',
    },
    location: "Bucharest, Romania",
    intro: `I've started a comradeship with some ambitious and talented people aiming to make eCommerce modern and up to meet user's expectations for shopping in the age of AI, 5G, and streaming video content.`,
    technologies: [
      "JS", "React", "Redux", "TailwindCSS", "and all mentioned in my previous experiences"
    ]
  },
  {
    title: "Senior Front-end Developer",
    company: "IBM",
    companyLogo: 'ibm',
    period: {
      start: formatDate(new Date("Jan 01, 2018")),
      end: formatDate(new Date("May 01, 2020")),
    },
    location: "Bucharest, Romania",
    intro: `Worked on a financial planning application build on the concept of micro frontends and microservices using the latest technologies, but also legacy code. My role was to implement new features into the app, mentor, and innovate.`,
    milestones: [
      {
        title: 2018,
        items: [
          `Implemented the designs and features for the main financial planning application`,
          `Developed a library where each team can publish their own react components and use across the organization`,
          `Won an innovation award for building a grid-like component that needed to handle around 30-40 thousand of nodes all on a single render`,
          `Participated in an IBM program called "Everyday Leadership" that helped me develop my soft skills like speaking in public, communicating with colleagues, and many more`,
          `Mentored a few colleagues`
        ]
      }
    ],
    technologies: [
      "JS", "React", "Redux", "CSS/SASS", "Webpack", "Typescript", "Unit Tests (Jest and react-testing-library)", "Docker", "Travis CI", "NPM", "Semantic-Release"
    ]
  },
  {
    title: "Front-end Developer",
    company: "Vivre",
    companyLogo: 'vivre',
    period: {
      start: formatDate(new Date("Feb 01, 2015")),
      end: formatDate(new Date("Dec 01, 2017")),
    },
    location: "Bucharest, Romania",
    intro: `My goal here was to make the online shopping experience a breeze on Vivre apps. Worked on multiple platforms/disciplines. Not only design and front-end but also into the native capabilities of your mobile phone with Cordova.
    `,
    milestones: [{
      title: 2017,
      items: [
        'Moved all front-end to Node/JavaScript and released a fully responsive layout',
        'Designed and implemented the client-side functionality for the new "Return Form" where users can quickly return products bought on our website',
        'Introduced automated E2E testing with CasperJS'
      ]
    }, {
      title: 2016,
      items: [
        "Migrated the front-end to NODE.js with server-side rendering and client-side hydration (Backbone and Handlebars)",
        "Migrated (for some pages) the view engine from Handlebars to Vue.js",
        "Better development flows with NPM and Webpack (Hot Reload for Vue pages, CSS injection)",
        "Started implementing a new responsive design project with the technologies above"
      ]
    },
    {
      title: 2015,
      items: [
        "Built and launched the Vivre hybrid Mobile App",
        "Designed and implemented features and sections of the website/app",
        "Implemented build tools for minification and SASS pre-processing, or email generators. (Webpack, Gulp, NPM)"
      ]
    }],
    technologies: [
      "Vue.js", "Backbone.js", "CSS/SASS", "Gulp", "Webpack", "Node", "Testing with CasperJS", "Cordova", "Git", "Sketch", "Photoshop"
    ]

  },
  {
    title: "Front-end Developer",
    company: "adrianf.com",
    companyLogo: "adrianf",
    period: {
      start: formatDate(new Date("Apr 01, 2013")),
      end: formatDate(new Date("Jan 01, 2015")),
    },
    location: "Bucharest, Romania",
    intro: `
Worked from the comfort of my home like it was 2020 🙃

All this time I've been working with my past employers, LandmarkGroup, Prologue, and Ten.ro on some wonderful projects like landmarkshops.com, dbi2015romania.com, prices.ae, and others.
`,
    technologies: ["JS/jQuery", "HTML/CSS/SASS", "WordPress", "PHP", 'Git', "Photoshop"]
  },
  {
    title: "Front-end Engineer",
    company: "Landmark Group",
    companyLogo: "landmark",
    period: {
      start: formatDate(new Date("May 01, 2012")),
      end: formatDate(new Date("Apr 01, 2013")),
    },
    location: "Dubai, UAE",
    intro: `
Worked on launching the LandmarkShops.com project. 

My main role was to convert the designs into HTML, CSS, and JS. I also designed some of the modules of the website. 

It was a challenging experience and I've learned a ton of JS while building the user interactions, shopping basket experience, store locator, wishlist, etc.

    `,
    technologies: ["JS/jQuery", "HTML/CSS/SASS", "WordPress", "PHP", 'Git', "Photoshop", "Illustrator"]
  },
  {
    title: "Web designer / Front-end developer",
    company: "Prologue Advertising",
    companyLogo: "prologue",
    period: {
      start: formatDate(new Date("Dec 01, 2011")),
      end: formatDate(new Date("May 01, 2012")),
    },
    location: "Bucharest, Romania",
    intro: `Excited to be working on lots of projects, always having something new to do, and being challenged by coworkers. I had two hats, a designer's hat, and a Developer's hat.`,
    milestones: [
      {
        title: 2011,
        items: [
          `Designer - I was pushing pixels in Photoshop to create beautiful websites`,
          `Developer - Taking the pixels and converting them into clean & semantic HTML, CSS and JS/jQuery and for some projects even going a step forward and integrating all this into WordPress`
        ]
      }
    ],
    technologies: ["JS/jQuery", "HTML/CSS/SASS", "WordPress", "PHP", 'Git', "Photoshop", "Illustrator"]
  },

  {
    title: "Designer & Developer",
    company: "Freelancer",
    companyLogo: "freelancer",
    period: {
      start: formatDate(new Date("Jan 01, 2007")),
      end: formatDate(new Date("Dec 01, 2011")),
    },
    location: "Bucharest, Romania",
    intro: `
Working my way through college while designing websites & building them into HTML, CSS & JS.
I also did a lot of print designs for banners.
Working for free and learning things online at the beginning made me realize that the web is fun and I wanted to start doing this as something more than just a hobby.
`,
    technologies: ["JS/jQuery", "HTML/CSS/SASS", "WordPress", "PHP", "Photoshop", "Illustrator", "InDesign"]
  },
]

export default items;
