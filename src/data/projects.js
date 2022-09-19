import eredImg from "../assets/projectpics/eredbook.jpg";
import triviaImg from "../assets/projectpics/trivia.jpg";
import pingpongImg from "../assets/projectpics/brainPingPong.jpg";

const projects = [
  {
    project: "eRed Book",
    about:
      "This project was inspired by the Red book given to parents/guardians at the birth. It is used for health record keeping and documenting interactions. It is the property of the parents and child not the NHS or health system. This my electronic version of the red book 'eRed Book'.",
    techs: [
      "JavaScript",
      "React",
      "Express",
      "VS",
      "JWT",
      "MYSQL",
      "Knex",
      "Recharts",
    ],
    img: {
      imgLink: `${eredImg}`,
      alt: "eRedbook picture",
    },
    links: {
      github: "https://github.com/leyeto/adeleye-ifaturoti-eGreenBook",
      loom: "https://www.loom.com/share/dbef53f0089f4c1a876425a8c9eb2700",
      exLink: "",
    },
  },
  {
    project: "Trivia Website",
    about:
      "This is a simple trivia website that gets questions from an external server ",
    techs: ["React", "RestAPIs", "VS", "React Hooks"],
    img: {
      imgLink: `${triviaImg}`,
      alt: "trivia picture",
    },
    links: {
      github: "https://github.com/leyeto/trivia-gam",
      loom: "",
      exLink: "https://adeleye-trivia.s3.eu-west-2.amazonaws.com/index.html",
    },
  },
  // {
  //   project: "FixIT",
  //   about:
  //     "As part of the programme we were assigned a challenge and given 24 hours challenge from start to finished product. The challenge was to find a solution to the Global Warming crisis. My team consisted of 2 Developers (including myself), 2 UX Designers and 1 Data Scientist. Our solution was FixIT, a mobile application that connects people that have old, worn or out of fashion clothes or furniture to people that can restore or rejuvenate these items. We produced an awesome product and won the competition. Joseph Shandley and I were the Web Developers of this project, he is an awesome developer, feel free to check hime out on LinkedIn",
  //   techs: ["React", "RestAPIs", "VS", "React Hooks, Express"],
  //   img: {
  //     imgLink: `${triviaImg}`,
  //     alt: "FixIT picture",
  //   },
  //   links: {
  //     github: "https://github.com/leyeto/trivia-gam",
  //     loom: "",
  //     exLink: "https://adeleye-trivia.s3.eu-west-2.amazonaws.com/index.html",
  //   },
  // },
  {
    project: "Brain PingPong",
    about:
      "This is a website inspired by the PingPong tournament we had during our training programme, we wanted a website to keep track of the scores. Konstantin Mack and I worked on this project for about 5 hours ",
    techs: ["React", "RestAPIs", "VS", "React Hooks"],
    img: {
      imgLink: `${pingpongImg}`,
      alt: "Brain PingPong picture",
    },
    links: {
      github: "https://github.com/leyeto/BrainPingPong",
      loom: "https://www.loom.com/share/d5576729f922469db097e7931e622d77",
      exLink: "http://brain-pingpong.s3-website.eu-west-2.amazonaws.com",
    },
  },
];

export default projects;
