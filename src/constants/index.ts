import hamzaPic from "../assets/comments/hamza.jpg";
import muneebPic from "../assets/comments/muneeb.jpg";
import amirPic from "../assets/comments/amir.jpg";


import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Apps Developer",
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
    title: "Desktop Apps Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "Full-Stack & Desktop Developer Intern",
    companyName: "Blue Prime's",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "june 2024 - Aug 2024",
    points: [
      "Developing cross-platform desktop applications by integrating Python with Qt Designer for intuitive user interfaces.",
      "Building and maintaining full-stack web applications using modern JavaScript frameworks and backend technologies.",
      "Collaborating with senior engineers during an intensive 2-month program to deliver robust and scalable software solutions.",
      "Implementing efficient coding practices, debugging workflows, and optimizing application performance across web and desktop environments.",
    ],
  },
  {
    title: "AI Developer (Final Year Project)",
    companyName: "Savvy Mart",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - May 2026",
    points: [
      "Developing a smart e-commerce aggregator using Flask and Python to provide real-time price comparisons and product insights.",
      "Implementing AI-driven fake review detection using XGBoost and a custom Roman Urdu sentiment scoring model via Logistic Regression.",
      "Building a multilingual semantic search engine by fine-tuning a BERT-based model with vector embeddings for highly accurate product retrieval.",
      "Designing efficient web scraping pipelines to aggregate data across multiple platforms while delivering a responsive and intuitive user interface.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Great project that solves real problem for online buyer issues related to review and price comparison.",
    name: "Hamza Khan",
    designation: "Machine Learning Engineer",
    company: "KPITB",
    image: hamzaPic,
  },
  {
    testimonial:
      "Amazing work! You've really put your skills to good use here.",
    name: "Muneeb Awan",
    designation: "Software Engineer",
    company: "KPITB",
    image: muneebPic,
  },
  {
    testimonial:
      "Savvy Mart looks like an amazing all-in-one platform. Huge congrats on the successful completion to you and the whole team!",
    name: "Muhammad Abdullah Aamir",
    designation: "Security Researcher & Al Engineer",
    company: "KPITB",
    image: amirPic,
  },
];

const projects: TProject[] = [
  {
    name: "POS Superstore",
    description:
      "A ready-to-deploy, commercial retail solution featuring automated inventory tracking, expense analytics, 5-minute automated backups, and direct end-of-day closing insights dispatched to store owners.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "pyqt",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/FaranAhmed-cyber/",
  },
  {
    name: "Savvy Mart",
    description:
      "AI-powered e-commerce aggregator that allows users to search, compare prices, and filter fake reviews from various online stores, providing a reliable and efficient solution for shopping needs.",
    tags: [
      {
        name: "python-flask",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/FaranAhmed-cyber/",
  },
  {
    name: "Duck Hunt",
    description:
      "[40% Completed] Cross-platform 2D arcade game built with Flutter and Flame engine featuring real-time combo tracking, smooth animations, interactive shop systems, and persistent achievement saving.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "flame",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/FaranAhmed-cyber/",
  },
];

export { services, technologies, experiences, testimonials, projects };
