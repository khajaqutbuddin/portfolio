import project1 from "../assets/projects/project-1.jpg";
import Nike from "../assets/projects/nike.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { BiMap } from "react-icons/bi";

export const HERO_CONTENT = `👋 Aspiring Front-End Developer with Backend Curiosity: With a passion for crafting delightful user experiences, I’ve honed my skills in React, Next.js, and CSS. My journey into backend development includes tinkering with Express.js, MySQL, PostgreSQL, and MongoDB. I’m eager to learn, collaborate, and bridge the gap between frontend magic and backend wizardry. Let’s build amazing things together! 🚀.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Front End Developer Intern",
    company: "Tech Modulus.",
    description: `I specialize in creating responsive user interfaces and integrating APIs for dynamic product listings. My responsibilities include developing and maintaining front-end features using HTML, CSS, and JavaScript frameworks like React, ensuring seamless data flow between the front-end and back-end, and collaborating with design teams to implement user-friendly and visually appealing interfaces. I focus on writing clean, modular code, optimizing performance, and enhancing user experience across various devices.    `,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Nike Web Application ",
    image: Nike,
    description:
      "I created a responsive frontend website for Nike, focusing on product listing and other frontend features. Using HTML, CSS, and JavaScript frameworks like React js, I designed and implemented a visually appealing user interface that ensures a seamless experience across all devices. ",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: "https://nike-red-ten.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Hyderabad, ",
  state: "Telangana, India.",
  phoneNo: "+91 8329213334 ",
  email: "khajaqutbuddin123@gmail.com",
};
