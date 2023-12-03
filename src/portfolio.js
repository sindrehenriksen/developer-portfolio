/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sindre Henriksen",
  title: "Hi, I'm Sindre!",
  subTitle: emoji(
    "A dedicated AI Cloud Service Developer. I have years of experience building Machine " +
    "Learning and Optimization services in Python and Java, mostly hosted on AWS. At work " +
    "I'm known as the machine learning expert and Git wizard :)"
  ),
  resumeLink: "/resume",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sindrehenriksen",
  linkedin: "https://www.linkedin.com/in/sindrehenriksen/",
  gmail: "sindrehenriksen93@gmail.com",
  // GitLab, Facebook, Medium, StackOverflow, Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Some of the languages and tools I have experience with:",
  skills: [
    emoji(
      "⚡ Develop and implement Optimization algorithms and Machine Learning models, and serverless cloud services to host them."
    ),
    emoji("⚡ Passionate about creating good dev workflows and pipelines, happy to teach and help others."),
    emoji(
      "⚡ Contribute to a good and social work environment. Need someone to organize a five course dinner for 30 people? No problem!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "fab fa-rust"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Illustrations and a short description of some of the projects I've worked "
  + "on. See my resume for work history and education.",
  projects: [
    {
      image: require("./assets/images/projects/salesForecastingCropped.png"),
      projectName: "Inventory Optimization",
      projectDesc: "Retail Sales Forecasting and Inventory Optimization. Visma Resolve.",
    },
    {
      image: require("./assets/images/projects/timeSuggest.png"),
      projectName: "Time Registration Suggestions",
      projectDesc: "Automated time registration suggestions project workers. Visma " +
      "Resolve.",
    },
    {
      image: require("./assets/images/projects/calEventCategorization.png"),
      projectName: "Calendar Event Categorization",
      projectDesc: "Categorization of calendar events using LLMs and Unsupervised " +
      "Learning. Visma Resolve.",
    },
    {
      image: require("./assets/images/projects/changeCompanyType.png"),
      projectName: "Company Type Change",
      projectDesc: "Analyze Sole Proprietorships' data to determine if they should " +
      "convert to a Limited Company. Visma Resolve.",
    },
    {
      image: require("./assets/images/projects/tournamentApp.png"),
      projectName: "Tournament App",
      projectDesc: "App to keep track of scores and standings for a company competition " +
      "in Mario Kart and Fussball.",
    },
    //{
    //  //image: require("./assets/images/nextuLogo.webp"),
    //  projectName: "School Optimization",
    //  projectDesc: "Teacher allocation, timetable scheduling and room allocation. Visma " +
    //  "Resolve.",
    //},
    {
      image: require("./assets/images/projects/mastersThesis.png"),
      projectName: "Statistical Seismic Data Analysis",
      projectDesc: "Automated tracking of features in seismic data using explainable " +
      " statistical methods. Master's Thesis.",
    },
    {
      image: require("./assets/images/projects/ragnarockGeo.png"),
      projectName: "DL Seismic Data Analysis",
      projectDesc: "Automated tracking of features in seismic data using Deep Learning. " +
      "RagnaRock Geo.",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects
};
