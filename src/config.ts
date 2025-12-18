export const siteConfig = {
  name: "Salma Soussi",
  title: "A Full Stack Developer 😁",
  description: "Portfolio website of Salma Soussi ",
  accentColor: "#e43434",
  social: {
    email: "soussiselma@hotmail.com",
    linkedin: "https://www.linkedin.com/in/salma-soussi-dev20/",
    github: "https://github.com/salma-soussi",
  },
  aboutMe:
    "A recent graduate with a master's degree in Computer Engineering with more than 3 years of freelance and internship experience in web development and mobile development. Possesses hands-on experience building websites, mobile features, and API integrations using various technologies, with a solid understanding of cybersecurity and cloud computing gained through academic projects.",
  skills: [
    "Javascript",
    "Java",
    "Python",
    "React",
    "Angular",
    "Node.js",
    "Spring Boot",
    "AI",
    "Azure",
    "Docker",
  ],
  projects: [
    {
      name: "GPRO ERP",
      description:
        "An ERP enhancement integrating mobile data capture and web analytics for smarter, real-time industrial management.",
      link: "https://salma-soussi.github.io/portfolio/",
      imageName: "images/1.png",
      imageAlt: "1",
      skills: [
        "React Native",
        "Angular",
        "Tailwind CSS",
        "Spring",
        "PostgreSQL ",
        "NFC",
      ],
    },
    {
      name: "TestBench visualization",
      description:
        "A database visualization solution designed to clarify data relationships and improve understanding through an interactive and reliable web interface.",
      link: "https://salma-soussi.github.io/portfolio/",
      imageName: "images/2.png",
      imageAlt: "2",
      skills: [
        "ReactJS",
        "Tailwind CSS",
        "NestJS",
        "SQL Server",
        "Azure Data Studio",
      ],
    },
    {
      name: "Just",
      description:
        "A web-based quotation management system helping wholesalers grow their business by finding new clients and tracking sales performance.",
      link: "https://salma-soussi.github.io/portfolio/",
      imageName: "images/3.png",
      imageAlt: "3",
      skills: ["ReactJS", "Material-UI ", "Node.js", "MongoDB"],
    },
  ],
  education: [
    {
      school: "Institut Élite de Montréal",
      degree: "ACS in Artificial Intelligence Specialist",
      dateRange: "2024",
      achievements: [],
    },
    {
      school: "Ecole Supérieure Polytechnique Privée de Sousse",
      degree: "National Diploma in Computer Engineering",
      dateRange: "2023",
      achievements: [
        "Evaluated by World Education Services as equivalent to a Canadian Master's degree in Computer Engineering",
      ],
    },
    {
      school: "Higher Institute of Applied Sciences and Technology of Sousse",
      degree: "Bachelor’s Degree in Computer Science",
      dateRange: "2020",
      achievements: [
        "Evaluated by World Education Services as equivalent to a Canadian four-year Bachelor of Computer Science degree",
      ],
    },
  ],
  experience: [
    {
      company: "Freelance",
      title: "Full Stack Developer",
      dateRange: "2020 - 2023",
      bullets: [
        "Completed 10+ freelance web projects for diverse clients including small businesses (solar energy, accounting) and students, managing full development lifecycle from requirements gathering to deployment",
        "Designed responsive, client-focused interfaces using WordPress for content-based sites and MERN stack for custom applications requiring database integration",
        "Independently managed project timelines, client communication, and technical implementation, adapting solutions to meet varying budget constraints and requirements.",
      ],
    },
    {
      company: "GPRO Consulting",
      title: "Full Stack Developer Intern",
      dateRange: "2023",
      bullets: [
        "Designed and developed an ERP-integrated mobile application (React Native) to automate factory data collection through QR code, barcode, and NFC tag scanning, reducing manual data entry time from 1-2 minutes to seconds per entry.",
        "Built a web dashboard (Angular) to visualize production statistics from the ERP system, creating an accessible interface for management to track key metrics.",
        "Integrated existing API infrastructure (Spring, PostgreSQL) with new mobile and web modules, designing the integration strategy and developing optimized queries to support real-time data synchronization.",
        "Delivered cost-effective solutions by leveraging device cameras for scanning instead of dedicated hardware and using React Native for cross-platform deployment across iOS and Android.",
      ],
    },
    {
      company: "IMBUS",
      title: "Full Stack Web Developer Intern",
      dateRange: "2022",
      bullets: [
        "Mapped dependencies and relationships across 100+ tables in an undocumented database(SQL server) where dependencies existed only in application code and team knowledge.",
        "Built an interactive database visualization platform (React, NestJS, Prisma) with searchable entity maps and editable annotations, enabling management to document institutional knowledge for faster developer onboarding.",
        "Ensured system reliability through Robot Framework test coverage and produced documentation to facilitate team adoption and long-term maintenance.",
        "Presented the tool to management and refined it based on their feedback, demonstrating how it consolidates previously undocumented database knowledge into a single accessible interface for new developers.",
      ],
    },
    {
      company: "ITGATE",
      title: "Full Stack Web Developer Intern",
      dateRange: "2020",
      bullets: [
        "Analyzed client requirements alongside the project manager and team to define functional specifications for a B2B quotation platform where buyers submit product requests and sellers respond with detailed quotations.",
        "Designed and implemented back-end infrastructure (MERN stack) following MVC architecture, focusing on request handling, quotation workflows, and client data management.",
        "Developed front-end components (React) to complement back-end services, contributing to a cohesive full-stack implementation as part of the development team.",
        "Conducted testing and debugging to identify issues early in the development cycle, supporting a stable initial product release.",
      ],
    },
  ],

  // certification: [
  //   {
  //     source: "Higher Institute of Applied Sciences and Technology of Sousse",
  //     name: "Bachelor’s Degree in Computer Science",
  //     dateRange: "2017-2020",
  //     link: "www.google.com",
  //   },
  // ],
};
