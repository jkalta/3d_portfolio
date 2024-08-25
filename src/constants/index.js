import {
    mobile,
    backend,
    automation,
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
    ellucian,
    carrent,
    banking,
    realEstate,
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
      title: "Python Developer",
      icon: automation,
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
      title: "Technical Intern (Software Engineer)",
      company_name: "Ellucian",
      icon: ellucian,
      iconBg: "#383E56",
      date: "February 2023 - May 2023",
      points: [
        "Developed code for parsing SQL Queries and extracting tables and columns from XML Metadata.",
        "Iterated features using Agile methodologies, ensuring timely delivery through sprints, continuous feedback, and collaboration with cross-functional teams.",
        "Participating in the Hackathon and created an AI tool that used semantic similarity for checking plagiarism.",
      ],
    },
    {
      title: "Software Engineer I",
      company_name: "Ellucian",
      icon: ellucian,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2024",
      points: [
        "Developed the Object Assessment Tool, decrypting Evisions Argos metadata containing 2,000-4,000 data blocks, reducing analysis time by 95%.",
        "Generated ObjectAssessmentReport detailing custom objects, cutting manual reporting time by 80%.",
        "Prepared the Object Migration Tool, using the ObjectAssessmentReport to identify non-baseline objects, reducing migration time by 85%.",
        "The tools reduced processing time to around 50-60 hours, saving over 90% of manual effort.",
        "Initiated development of Argos PG Migration Tool to convert SQL queries directly from Argos metadata to PostgreSQL, aiming to automate 95% of conversions.",
        "Collaborating with cross-functional teams including product managers, and other developers to create high-quality tools.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Banking Management",
      description:
        "Web application that allows users to manage their bank accounts, view transaction histories, transfer funds between accounts and monitor account balances in real-time. It provides secure access to financial services and supports features like account management and customer support.",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: banking,
      source_code_link: "https://github.com/jkalta/banking_management",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/jkalta/cars_showcase",
    },
    {
      name: "Real Estate",
      description:
       "Real estate web application that allows users to search for both rentable and ownable properties. The platform provides detailed property listings, including photos, pricing, and location-based filters. Users can explore a variety of residential and commercial properties, save their favorite listings, and contact property owners or agents directly through the app.",
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
      image: realEstate,
      source_code_link: "https://github.com/jkalta/realEstate",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };