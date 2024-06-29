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
  nextjs,
  redux,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  git,
  figma,
  docker,
  pixyflux,
  codistan,
  carrent,
  jobit,
  tripguide,
  threejs,
  gpt3,
  hooBank,
  gerichRestaurant,
  arslanArshad,
  aqeelAhmad,
  bilalHassan,
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

const services = [
  {
    title: "React JS Developer",
    icon: reactjs,
  },
  {
    title: "Next JS",
    icon: nextjs,
  },
  {
    title: "Learning Backend",
    icon: nodejs,
  },
  {
    title: "Content Creator",
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
    name: "Next JS",
    icon: nextjs,
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
];

const experiences = [
  {
    title: "Angular JS Developer",
    company_name: "PixyFlux",
    icon: pixyflux,
    iconBg: "#383E56",
    date: "Dec 2023 - May 2024",
    points: [
      "Developing web applications using Angular JS with TypeScript.",
      "Engaging in remote Angular JS with Pixyflux, contributing to main project LogisticChain.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Intern",
    company_name: "Codistan",
    icon: codistan,
    iconBg: "#E6DEDD",
    date: "August 2022 - November 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Arslan Arshad",
    designation: "Senior Wordpress",
    company: "Ropstam Solutions",
    image: arslanArshad,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Aqeel Ahmad",
    designation: "BackEnd Developer",
    company: "PixyFlux",
    image: aqeelAhmad,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bilal Hassan",
    designation: "User",
    company: "Upwork",
    image: bilalHassan,
  },
];

const projects = [
  {
    name: "GPT 3",
    description:
      "Web-based AI platform that allows users to take information about Artificial Intelligence and its future.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/UsamaHayatN/chatGPT-3",
    live_link: "https://usamahayat-gpt-3.netlify.app/",
  },
  {
    name: "Online Banking",
    description:
      "Web application for effortlessly manage your finances anytime, anywhere with our secure online banking platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hooBank,
    source_code_link: "https://github.com/UsamaHayatN/bank-modern-app",
    live_link: "https://usamahayat-bank-app.netlify.app/",
  },
  {
    name: "Gerich Restaurant",
    description:
      "Savor the ease of dining with our online restaurant platform, where delicious meals are just a click away.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: gerichRestaurant,
    source_code_link: "https://github.com/UsamaHayatN/gerich-restaurant",
    live_link: "https://usamahayat-gerich-restaurant.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
