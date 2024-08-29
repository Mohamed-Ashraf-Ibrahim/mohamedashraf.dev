// Profile image
import profile from "./assets/main-img.png";
import aboutMeImg from "./assets/50353683 1.png";
// Tech Stack
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
// Tools Images
import git from "./assets/git.png";
import github from "./assets/github.png";
import vscode from "./assets/vscode.png";
import babel from "./assets/babel.png";
import adobe_xd from "./assets/adobe_xd.png";
import vite from "./assets/vite.png";
import figma from "./assets/figma.png";
import npm from "./assets/npm.png";
import Azure from "./assets/Azure Devops.png";
// Project images
import interno from "./assets/interno.png";
import todolist from "./assets/todolist.png";
import nexcent from "./assets/nexcent.png";
import usePopCorn from "./assets/usepopcorn.png";
import Reactquiz from "./assets/React-quiz.png";

// Personal Details
export const personalDetails = {
  name: "Mohamed Ashraf",
  title: "Frontend Developer",
  about:
    "A frontend developer skilled in creating user-friendly and visuallyappealing web applications.",
  img: profile,
  cvLink:
    "https://drive.google.com/file/d/1bUZWp34WpHZRRLJcOWnj-d4LPdE-VYG6/view?usp=sharing",
  aboutMe: `I am deeply passionate about programming and frontend development,
            consistently striving to enhance my skills and knowledge. My
            curiosity drives me to explore new technologies and frameworks on my
            own, complementing my formal education. I am currently pursuing a
            degree in Business Information Systems at Thebes Academy, where I am
            building a robust foundation in the field. My goal is to harness my
            enthusiasm and expertise to develop innovative and impactful
            solutions. `,
  aboutMeImg: aboutMeImg,
};

// Social Links
export const socialLinks = {
  github: "https://github.com/Mohamed-Ashraf-Ibrahim",
  twitter: "https://x.com/iplayashe",
  linkedin: "https://www.linkedin.com/in/mohamed-ashraf-298444309/",
};

// Tech Icons
export const techIcons = [
  { name: "html", src: html },
  { name: "css", src: css },
  { name: "javascript", src: javascript },
  { name: "react", src: react },
  { name: "bootstrap", src: bootstrap },
  { name: "tailwind", src: tailwind },
];
// Tools Icons
export const toolsIcons = [
  { name: "git", src: git },
  { name: "github", src: github },
  { name: "azure", src: Azure },
  { name: "vscode", src: vscode },
  { name: "babel", src: babel },
  { name: "adobe_xd", src: adobe_xd },
  { name: "vite", src: vite },
  { name: "figma", src: figma },
  { name: "npm", src: npm },
];

// Project Details
export const projectDetails = [
  {
    title: "Interno Landing Page",
    image: interno,
    description:
      "Showcased the company’s interior design services through a visually appealing layout and portfolio.",
    techStack: "HTML5, Tailwind CSS, JavaScript(ES6+).",
    previewLink:
      "https://6637bd43412073010db093d7--rococo-queijadas-a0d25e.netlify.app/",
    githubLink:
      "https://github.com/Mohamed-Ashraf-Ibrahim/Interno-Home-Page?tab=readme-ov-file",
  },
  {
    title: "TO-DO List",
    image: todolist,
    description:
      "Manage tasks dynamically. Utilize React’s useState and useEffect for efficient state updates.",
    techStack: "HTML5, CSS3, JavaScript(ES6+), ReactJs.",
    previewLink: "https://stirring-croquembouche-60da52.netlify.app/",
    githubLink:
      "https://github.com/Mohamed-Ashraf-Ibrahim/To-Do-List-Reactjs?tab=readme-ov-file",
  },
  {
    title: "UsePopcorn",
    image: usePopCorn,
    description: "Search and rate movies, then add them to your watched list.",
    techStack: "HTML, CSS3, ReactJs, API, JavaScript(ES6+).",
    previewLink: "https://mohamed-ashraf-ibrahim.github.io/usePopcorn/",
    githubLink: "https://github.com/Mohamed-Ashraf-Ibrahim/usePopcorn",
  },
  {
    title: "React Quiz",
    image: Reactquiz,
    description:
      "Interactive React Quiz Application: Built a dynamic quiz app in React, enabling real-time interaction, question answering, and instant results for users.",
    techStack: "HTML, CSS3, ReactJs, API, JavaScript(ES6+).",
    previewLink: "https://gleeful-bonbon-6ab8de.netlify.app/",
    githubLink: "https://github.com/Mohamed-Ashraf-Ibrahim/react-quiz",
  },
  {
    title: "Nexcent",
    image: nexcent,
    description:
      "Automates renewals and payments for organizations and clubs, boosting business growth.",
    techStack: "HTML, CSS3, ReactJs, JavaScript(ES6+).",
    previewLink:
      "https://6604719b610b754705968e17--phenomenal-monstera-d0ab4a.netlify.app/",
    githubLink:
      "https://github.com/Mohamed-Ashraf-Ibrahim/Nexcent?tab=readme-ov-file",
  },
];
