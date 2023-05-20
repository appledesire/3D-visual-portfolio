import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  // starbucks,
  hear,
  oxstocks,
  // tesla,
  vcomp,
  lowkel,
  // shopify,
  // carrent,
  sharebite,
  touragencyapp,
  fenixtrade,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const contactLinks = [
  {
    id: "skype",
    to: "live:.cid.fc7a7aaa3f44c5b6"
  },
  {
    id: "telegram",
    to: "https://t.me/bluesky0805"
  }
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Hear",
    icon: hear,
    iconBg: "#383E56",
    date: "June 2018 - April 2019",
    points: [
      "Translated designs and wireframes into high-quality code using HTML, CSS, and JavaScript.",
      "Worked closely with developers, designers, copywriters, and other cross functional teams (CRO, Video, Marketing, etc..) to drive innovation and maximize conversions by 40%.",
      "Provided input to leaders 3 times a year about the future development of new features.",
      "Ensured the technical feasibility of UI/UX designs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Vcomp",
    icon: vcomp,
    iconBg: "#E6DEDD",
    date: "July 2019 - March 2021",
    points: [
      "Built efficient, testable, and reusable Laravel modules",
      "Solved complex performance problems and architectural challenges.",
      "Integration of third party API(Apollo GraphQL), implemented SPA frontend using Vue.js.",
      "Defined and developed MVC, REST, Hybrid (MVC+REST combined) applications",
      "Operated in team-based, Scrum environment to accomplish objectives quickly and efficiently.",
      "Analyzed code and debugged errors to improve system performance.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Lowkel",
    icon: lowkel,
    iconBg: "#383E56",
    date: "May 2021 - December 2021",
    points: [
      "Built large scale ecommerce websites with React and TypeScript.",
      "Understood complex business-logical rules and built the React and TypeScript components from the Figma or Adobe XD design.",
      "Shaped the Apollo GraphQL layer by pruning and managing the schema.",
      "Experienced with CI/CD, Node, NPM and Webpack.",
      " Experienced working with the Agile methodology.",
    ],
  },
  {
    title: "Full stack Blockchain Developer",
    company_name: "Oxstocks",
    icon: oxstocks,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Nov 2022",
    points: [
      "Built a financial website with React.",
      "Create and deploy a new token with solidity on Binance Smart Chain.",
      "Ensured the technical feasibility of UI/UX designs.",
      "Participating in code reviews and providing constructive feedback to other developers and designers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Erik proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Erik does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Erik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ShareBite",
    description:
    "The #1 corporate meal benefits platform for all employees, wherever they work. Best restaurants, no receipts, zero food waste.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sharebite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tour Agency App",
    description:
      "Web application that enables users to manage the online reservations for tourism agencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: touragencyapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fenix Trade",
    description:
      "Fenix Trade is an Istanbul based company and is pathing the way in the worldwide plastic and metal sector.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fenixtrade,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
