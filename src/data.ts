// eslint-disable-next-line import/no-anonymous-default-export

type PositionItem = {
  from: string;
  to: string;
  role: string;
  company: string;
  tools?: string;
  description?: string;
  responsibilities?: string;
};

type ProjectItem = {
  title: string;
  from: string;
  to: string;
  role: string;
  tools: string;
  description: string;
  link: string;
};

type EducationItem = {
  from: string;
  to: string;
  title: string;
  subtitle: string;
};

type AwardItem = {
  title: string;
  date: string;
  project: string;
  description: string;
};

type Vitae = {
  info: {
    name: string;
    date: string;
    languages: string;
    nationality: string;
    address: string;
    city: string;
    zip: string;
    country: string;
    intro: string;
    phone: string;
    email: string;
  };
  roles: {
    title: string;
    items: PositionItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  awards: {
    title: string;
    items: AwardItem[];
  };
  clients: string[];
};

const data: Vitae = {
  info: {
    name: "Daniel Schillat",
    date: "18.06.1977",
    languages: "Deutsch / Englisch",
    nationality: "german",
    address: "Naumannstr. 6",
    city: "Berlin",
    zip: "10829",
    country: "Germany",
    intro: `I am an experienced frontend developer and consultant with over 20 years in the field. My focus is on creating modern, scalable, and maintainable solutions by understanding and translating client needs into technical requirements.

I bring a track record of successful delivery of medium to large projects from various industries as well as skills in leading development teams, conducting code reviews and offering strategic guidance to clients.

I am committed to stay up to date in modern frontend technologies and development methodologies allows me to contribute to cutting edge applications and the success of diverse projects.`,

    phone: "+49 160 947 499 26",
    email: "ds@campsafari.de",
  },

  roles: {
    title: "Experience:",
    items: [
      {
        from: "01.11.2023",
        to: "",
        role: "Senior Software Engineer",
        company: "Saturn Mediamarkt",
        tools:
          "React, Styled Components, Typescript, ChartJS, Contentful, Apollo Client, Apollo Server, Type-GraphQl, GraphQL Codegen, Storybook, Playwright, Jest",
        description: "",
        responsibilities: `
* Analyzing the existing architecture in terms of code quality, maintainability, performance and developer experience
* Provide solutions and initiatives to improve the existing code base
* Analyzing the application for accessibility issues and provide solutions for improvement
        `,
      },
      {
        from: "01.07.2023",
        to: "31.10.2023",
        role: "Senior Frontend Developer",
        company: "The Quality Group",
        tools:
          "Remix, Shopify Oxygen, Shopify Hydrogen, Contentful, RadixUI, Tailwind, Tailwind Variants, Storybook, Playwright, Chromatic, GraphQl, GraphQL Codegen, Typescript",
        responsibilities: `
* Migration of multiple online shops built on different tech stacks to a single plattform based on Remix / Shopify Hydrogen & Oxygen
* Establishment of a robust component base with RadixUI and Tailwind
* Mentoring colleagues to be more productive with Remix, GraphQl, Tailwind and Contentful
`,
      },
      {
        from: "01.08.2021",
        to: "31.05.2023",
        role: "Senior Development Consultant",
        company: "Endava",
        tools:
          "NextJS, Apollo Server, Apollo Client, Tailwind, REST, CSS, VideoJS, OvermindJS, Storybook, Jest, NextAuth, Socket.io, HeadlessUI, ReactSpring, GraphQl Codegen, MSW, Typescript, React Admin, React Testing Library",
        responsibilities: `
* Guiding, mentoring and leading of a nearshore team to develop a german video streaming platform based on NextJS, multiple REST apis and a graphql middleware
* Creating a resilient application framework with an emphasis on performance and scalability
* UX and development consulting
* Validating client requests and translating them into technical requirements
* Assuring a clean and scalable code base by applying clean code principles through code reviews and pair programming 
`,
      },
      {
        from: "01.04.2020",
        to: "31.06.2021",
        role: "Lead Developer",
        company: "AXA",
        tools:
          "NextJS, Apollo Server, Apollo Client, Material UI, Jest, Storybook, MSW, Typescript, OvermindJS, React Testing Library, GraphQL Codegen, SpringBoot, OpenShift",
        responsibilities: `
* Create and implement a process management application to enhance internal workflow efficiency
* Mentoring other developers in NextJS, React and Material UI as well as best practices in frontend development`,
      },
      {
        from: "01.05.2017",
        to: "31.03.2020",
        role: "Senior Frontend Developer",
        company: "Exozet",
        tools:
          "React, React Native, React Navigation, SCSS, GraphQl, TWIG, Handlebars, SpringBoot, Foundation, Webpack, RxJS, Redux, Typescript, Storybook, Jest, Zeplin, Sketch",
        responsibilities: `
* Leading frontend development teams
* Mentoring developers and helping them with the transition to modern tech stacks like NextJS, React, Apollo and Redux
* Laying foundations for different projects by establishing best practices for component and application architectures, styling solutions, etc...
* Released two of Germany´s most popular online video platforms, the ZDF Mediathek and 3Sat Mediathek
* Establishing a robust component architecture for both platforms
* Introduction of a design system based on Sketch, Zeplin and Storybook
* Providing guidance to designers on designing with and for design systems, employing an atomic design approach
* Development of the 3Sat Mediathek as well as the 3Sat Mobile App for iOS and Android with React Native
* Conducting code reviews
          `,
      },
      {
        from: "01.01.2015",
        to: "31.04.2017",
        role: "Senior Frontend Developer",
        company: "Zalando SE",
        tools: "React, SCSS, Foundation, Scala, Play Framework",
        description: `
* Lead developer to kickstart Zalando´s curating shopping platform ZALON.
* Creating a robust codebase that can be easily extended and readily utilized by other developers`,
      },
      {
        from: "01.06.2003",
        to: "31.12.2016",
        role: "Senior Software Engineer",
        company: "Solebox",
        tools:
          "Magento, CSS, Javascript, PHP, AWS, MySql, Flash, Flex, Papervision 3D, Illustrator, Photoshop",
        description: `Design, Development, DevOps.
        All of this was part of my role as i was the only developer for one of the top 10 sneaker stores worldwide at that time.
        We started with a super simple flash based storefront and a simple backend written in PHP.
        After a while our own headless e-commerce plattform, Shopper, evolved out of this.
        Until the iPhone came out the storefront was built with Flash/Flex Builder and supported SEO, Deeplinking, etc...
        Everything one would expect from a sophisticated online store.
        Those challenges were basically the same that SPAs faced when they became a thing.
        When features were required faster than we could implement them in our own plattform and Magento came around, we decided to migrate to Magento.
        This also added immediate support for mobile browsers but came with other challenges like scalability.
        Which is pretty important when you have a couple thousand requests per second when people are waiting for limited sneakers to be released online and are hitting the refresh button constantly.
        To make scaling a trivial and automatic task i decided to move the shop to a containerized AWS setup.
        In 2015 the shop was sold to Snipes/Deichmann and is maintained by them since 2017.
        `,
      },
      {
        from: "01.09.2010",
        to: "31.12.2014",
        role: "Senior Frontend Developer",
        company: "Exozet",
        tools:
          "Javascript, CSS, BackboneJS, jQuery, MooTools, Handlebars, EJS, HTML, PHP,  Agavi, Illustrator",
        description: "",
        responsibilities: `
* UX & UI Design
* Mentoring developers in event driven frontend application practices
* Introduction of design system based component architectures  
        `,
      },
      {
        from: "01.01.2007",
        to: "31.12.2009",
        role: "Developer, Founder",
        company: "Shopper E-Commerce Platform",
        tools:
          "Flash, Flex Builder, AMFPHP, HTML, Javascript, PHP, MySQL, Illustrator, Photoshop",
        description: `We designed and developed a headless e-commerce plattform in PHP.
        The client technologies were decoupled and not relying on the technology used in the e-commerce application which was, at that time, a very new apporach to build online shops.
        The plattform supported an easy creation of different product types with different attributes, similiar to what shopify does today with product types and meta fields.
        It also supported shipping providers like DHL and UPS and dynamic shipping costs calculations based on weight and destination.
        My main responsiblities were the UX and UI design of the admin interface as well as API design and the visual design and development of store fronts.
        `,
      },
      {
        from: "01.01.2001",
        to: "31.12.2002",
        role: "Developer, Founder",
        company: "IT Wars",
        tools: "Flash, Director, Cinema4D, Illustrator, After Effects, PHP",
        description: "",
      },
      {
        from: "01.12.1999",
        to: "31.12.2001",
        role: "Frontend Developer",
        company: "R.Ø.S.A. Berlin",
        tools: "Flash, Cinema4D, Illustrator, After Effects, PHP",
        description: "",
      },
    ],
  },
  projects: {
    title: "Selected Projects:",
    items: [
      {
        title: "The Masked Singer App",
        role: "Lead Developer",
        from: "01.02.2020",
        to: "31.03.2020",
        tools: "React Native, Apollo Client, GraphQl, Redux",
        description:
          'Development of the mobile app for the TV show "The Masked Singer" with React-Native and Apollo Client',
        link: "",
      },
      {
        title: "Big Brother App",
        role: "Lead Developer",
        from: "01.12.2019",
        to: "01.03.2020",
        tools: "React Native, Apollo Client, GraphQl, Redux",
        description:
          'Development of the mobile app for the TV show "Big Brother" with React-Native and Apollo Client',
        link: "",
      },
      {
        title: "3sat Mediathek Web",
        role: "Senior Frontend Developer",
        from: "01.12.2018",
        to: "01.05.2019",
        tools: "SASS, Foundation, Javascript, Atomic Design, Twig",
        description:
          "Development of the foundation for frontend components and bridging the gap between design and development. This was done by establishing a common lingo for modules and components, setting up the workflow between design and development via sketch and zeplin as well as defining component APIs for engineering.",
        link: "https://www.3sat.de",
      },
      {
        title: "3sat Mediathek App",
        role: "Lead Developer",
        from: "01.12.2018",
        to: "01.05.2019",
        tools: "React Native, Redux, RxJS, Atomic Design",
        description: "",
        link: "https://apps.apple.com/de/app/3sat-mediathek/id687276377",
      },
      {
        title: "ZDF Mediathek",
        role: "Lead Frontend Developer",
        from: "01.06.2019",
        to: "",
        tools: "Foundation, Javascript, SASS, Redux, React, Twig",
        description:
          "Establishing a robust component foundation and a partly migration of the existing stack based on twig and spring boot to react and redux. The migration was done gradually via react portals.",
        link: "https://apps.apple.com/de/app/3sat-mediathek/id687276377",
      },
      {
        title: "ZDFtivi App",
        role: "Frontend Developer",
        from: "01.05.2017",
        to: "31.12.2017",
        tools: "React Native, Redux, RxJS",
        description: "",
        link: "",
      },
      {
        title: "Zalon by Zalando",
        role: "Lead Frontend Developer",
        from: "01.01.2015",
        to: "31.03.2017",
        tools: "SASS, Javascript, Foundation, Scala, Atomic Design",
        description:
          'Implementation of the client facing frontend architecture based on "Atomic Design" principles. Further development of an admin interface in React for managing orders and assembling outfits for clients.',
        link: "https://www.zalon.de",
      },
      {
        title: "Solebox Onlinestore",
        role: "Developer, Designer, DevOp",
        from: "01.01.2003",
        to: "31.10.2016",
        tools: "SASS, Javascript, Magento, PHP, Atomic Design, AWS",
        description:
          "Responsive Onlineshop for the berlin based sneaker Boutique Solebox.",
        link: "https://www.solebox.com",
      },
      {
        title: "Ernst und Sohn",
        role: "Frontend Developer",
        from: "09.01.2014",
        to: "31.12.2014",
        tools: "Javascript, SASS, HTML",
        description:
          'Responsive Website for the german publisher "Ernst und Sohn".',
        link: "https://www.ernst-und-sohn.de",
      },
      {
        title: "RBB Online",
        role: "Frontend Developer",
        from: "02.01.2013",
        to: "31.12.2013",
        tools: "Javascript, SASS, HTML",
        description: "Responsive Website for the german TV Channel RBB.",
        link: "https://www.rbb-online.de/",
      },
      {
        title: "Deutsche Welle Smart TV App",
        role: "Frontend Developer",
        from: "09.01.2012",
        to: "31.12.2012",
        tools: "SASS, Javascript, HTML",
        description: 'Smart-TV App for "Deutsche Welle Rundfunk".',
        link: "",
      },
      {
        title: "TV Digital",
        role: "Lead Developer",
        from: "01.01.2011",
        to: "08.31.2013",
        tools: "SASS, Javascript, HTML",
        description: "Concept and Development of an EPG.",
        link: "",
      },
      {
        title: "Alpha Industries",
        role: "Lead Developer",
        from: "01.01.2009",
        to: "31.04.2009",
        tools:
          "Flex Builder, Actionscript 3, PHP, MySql, Illustrator, Photoshop, Apple Motion",
        description: "Concept, Design & Development of the Website and CMS.",
        link: "",
      },
      {
        title: "Moonbootica",
        role: "Lead Developer",
        from: "01.03.2010",
        to: "31.04.2010",
        tools: "CSS, HTML, Javascript, PHP, Wordpress",
        description: "Development of a custom Wordpress Theme",
        link: "",
      },
      {
        title: "New Balance Lifestyle",
        role: "Lead Developer",
        from: "01.01.2009",
        to: "31.04.2009",
        tools: "Actionscript, Mysql, PHP",
        description:
          "Design & Development of a microsite for New Balance Lifestyle.",
        link: "",
      },
      {
        title: "Plastic Particles",
        role: "Lead Developer",
        from: "01.02.2003",
        to: "31.04.2003",
        tools: "Actionscript 2, PHP, MySql",
        description: "Concept & Development of a Jump'n Run based Onlineshop",
        link: "",
      },
      {
        title: "RECON STORE",
        role: "Lead Developer",
        from: "01.02.2000",
        to: "31.04.2000",
        tools: "Actionscript, Cinema 4D, PHP",
        description:
          'Concept, Design & Development of an E-Concept-Store for the fashion label "RECON" made by the New York artists Futura 2000 and Stash.',
        link: "",
      },
    ],
  },
  awards: {
    title: "Awards",
    items: [
      {
        title: "Red Dot Design Award",
        date: "2015",
        project: "ZDFtivi App",
        description: "",
      },
      {
        title: "Banff Television Festival",
        date: "2012",
        project: "Wer rettet Dina Foxx",
        description:
          "Interactive, Best Cross-Platform Project, Fiction Program ",
      },
      {
        title: "New York Festivals 2012: Gold Medal",
        date: "2012",
        project: "Wer rettet Dina Foxx",
        description: "Online Entertainment Program",
      },
      {
        title: "ADC Germany Silver",
        date: "2000",
        project: "Recon Store",
        description: "Online Gamified Conceptstore ",
      },
      {
        title: "ADC Germany Bronze",
        date: "2000",
        project: "Shawne Fielding Microsite",
        description: "",
      },
      {
        title: "Cannes Cyberlions Nominee",
        date: "2000",
        project: "Recon Store",
        description: "",
      },
    ],
  },
  education: {
    title: "Ausbildung",
    items: [
      {
        from: "01.01.1997",
        to: "31.12.1999",
        title: "Multimedia Producer",
        subtitle: "S.A.E. Institute",
      },
    ],
  },
  clients: [
    "Alpha Industries",
    "Aperto",
    "Atomsfair Clothing",
    "Axel Springer",
    "BMG",
    "CNN",
    "Deutsche Welle",
    "Discovery Channel",
    "Frog Design",
    "Heimat",
    "Kochstrasse",
    "Leonardo",
    "LoDown Magazine",
    "New Balance",
    "RBB",
    "Recon",
    "Redbull",
    "Siemens",
    "Solebox",
    "Stahl Corp.",
    "Swatch",
    "Universal",
    "ZDF",
  ],
};

export default data;
