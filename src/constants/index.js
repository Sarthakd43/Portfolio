import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    threejs,
    dino,
    ss,
    
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Competetive Programmer",
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
      name: "React JS",
      icon: reactjs,
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
    
  ];
  
  const experiences = [
    {
      title: "Daffodils English Medium School",
      company_name: "Secondary School Education",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2007 - 2019",
      points: [
        "I completed my secondary school with good academic excellence.",
        "I was the Headboy of the school.",
        
      ],
    },
    {
      title: "Modern College",
      company_name: "Higher Secondary Examination",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2019 - 2021",
      points: [
        "I completed my 11th and 12th from the same college.",
        "Secured 94 % in 12th boards.",
        
      ],
    },
    {
      title: "Pune Institute Of Computer Technology",
      company_name: "Bachelor of Computer Engineering",
      icon: shopify,
      iconBg: "#383E56",
      date: "2022 - Present",
      points: [
        "Pursuing BE from one of topmost Engineering college .",
        "Secured 9.93 SGPA in the first year of college.",
        
      ],
    },  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but u proved me wrong.",
      name: "Rutuja",
      
      
    },
    {
      testimonial:
        "Great work,Sarthak!! Keep it up",
      name: "Abhishek",
     
    },
    {
      testimonial:
        "A great Project with use of modern 3d models",
      name: "Ravi",
      
    },
  ];
  
  const projects = [
    {
      name: "Artistomart",
      description:
        "A Flutter Application made for artists to showcase their arts where they can sell or buy any art.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: ss,
      source_code_link: "https://github.com/",
    },
    {
      name: "Dinopedia",
      description:
        "An AR Application on Encyclopedia of Dinosaurs using Unity3D which on showing a image of particular Dinosaur shows the information related to that species.",
      tags: [
        {
          name: "Unity3D",
          color: "blue-text-gradient",
        },
        {
          name: "Vuforia",
          color: "green-text-gradient",
        },
       
      ],
      image: dino,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };