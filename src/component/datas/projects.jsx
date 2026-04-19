// Add your project images to your assets folder and import them here
// import project1 from "../assets/project1.png";
import { programmer, FarAway, bankist, rental, natour, pro } from "../images";
export const myProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    img: pro,
    stack: "MERN Stack (MongoDB, Express, React, Node)",
    description:
      "A full-stack marketplace featuring JWT authentication, Stripe integration, and a custom admin dashboard.",
    url: "https://github.com",
  },
  {
    id: 2,
    title: "Management System",
    img: FarAway,
    stack: "Laravel // React // MySQL",
    description:
      "A robust business tool built with a Laravel REST API and a dynamic React frontend for real-time data tracking.",
    url: "https://github.com",
  },
  {
    id: 3,
    title: "Social Media App",
    img: bankist,
    stack: "MERN Stack (MongoDB, Express, React, Node)",
    description:
      "A social media application with real-time chat, user profiles, and a dynamic feed.",
    url: "https://github.com",
  },
  {
    id: 4,
    title: "Task Management Tool",
    img: rental,
    stack: "MERN Stack (MongoDB, Express, React, Node)",
    description:
      "A task management tool with drag-and-drop functionality, user authentication, and real-time collaboration.",
    url: "https://github.com",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    img: natour,
    stack: "Next.js // Tailwind CSS",
    description:
      "A personal portfolio showcasing my projects, skills, and experience, built with Next.js and Tailwind CSS.",
    url: "https://github.com",
  },
  // Add more here manually...
];
