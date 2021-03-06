import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import { WebOutlined, AssignmentOutlined } from "@material-ui/icons";
import image from "../assets/images/bg2.jpg";

const resumeData = {
  name: "Dauda Hammed Oluwatoyin",
  title: "Frontend Developer",

  birthday: "7th March 1996",
  email: "dauda.hammed132@gmail.com",
  address: "Bariga Somolu, Lagos",
  phone: "090 5881 7629",

  experiences: [
    {
      title: "Work 1",
      date: "2018 - Present",
      description:
        "Expenses as material breeding insisted building to in, Continual so distrusts pronounce by unwilling listening. things do taste on we manor",
    },
    {
      title: "Work 2",
      date: "2018 - 2019",
      description:
        "Expenses as material breeding insisted building to in, Continual so distrusts pronounce by unwilling listening. things do taste on we manor",
    },
    {
      title: "Work 3",
      date: "2019 - 2021",
      description:
        "Expenses as material breeding insisted building to in, Continual so distrusts pronounce by unwilling listening. things do taste on we manor",
    },
  ],
  educations: [
    {
      title: "Work 1",
      date: "2018 - Present",
      description:
        "Expenses as material breeding insisted building to in, Continual so distrusts pronounce by unwilling listening. things do taste on we manor",
    },
    {
      title: "Work 2",
      date: "2018 - 2019",
      description:
        "Expenses as material breeding insisted building to in, Continual so distrusts pronounce by unwilling listening. things do taste on we manor",
    },
    {
      title: "Work 3",
      date: "2019 - 2021",
      description:
        "Expenses as material breeding insisted building to in, Continual so distrusts pronounce by unwilling listening. things do taste on we manor",
    },
  ],

  socials: {
    Instagram: {
      link: "https://www.instagram.com",
      text: "MyInstagram",
      icon: <InstagramIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedIn.com",
      text: "MyLinkedin",
      icon: <LinkedinIcon />,
    },
    Github: {
      link: "https://www.github.com",
      text: "MyGithub",
      icon: <GithubIcon />,
    },
  },

  services: [
    {
      title: "Frontend Development",
      description: "i have been badass web developer for 10 years",
      icon: <WebOutlined />,
    },

    {
      title: "Backend Development",
      description:
        "Building of sophisticated RESTful API, and GraphQL API, and ",
      icon: <AssignmentOutlined />,
    },

    {
      title: "Fullstack Web Development",
      description: "Building fullstack Applications from Start to finish",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "BootStrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Express", "HTTPS", "REST API", "Mongoose"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "MySQL", "PostgreSQL", "MongoDB", "HarperDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "Github", "BitBucket", "Gitlab"],
      icon: <WebOutlined />,
    },
  ],

  projects: [
    {
      tag: "React",
      image: image,
      title: "React Project 1",
      caption: "A short description for the project",
      description: "This is my project description, please fill it in",
      link: [
        { link: "https://www.google.com", icon: <youtubeIcon /> },
        { link: "https://www.google.com", icon: <gitHubIcon /> },
        { link: "https://www.google.com", icon: <LinkedinIcon /> },
      ],
    },
    {
      tag: "Python",
      image: image,
      title: "Python Project 1",
      caption: "A short description for the project",
      description: "This is my project description, please fill it in",
      link: [
        { link: "https://www.google.com", icon: <youtubeIcon /> },
        { link: "https://www.google.com", icon: <gitHubIcon /> },
        { link: "https://www.google.com", icon: <LinkedinIcon /> },
      ],
    },
    {
      tag: "Flutter",
      image: image,
      title: "Flutter Project 1",
      caption: "A short description for the project",
      description: "This is my project description, please fill it in",
      link: [
        { link: "https://www.google.com", icon: <youtubeIcon /> },
        { link: "https://www.google.com", icon: <gitHubIcon /> },
        { link: "https://www.google.com", icon: <LinkedinIcon /> },
      ],
    },
    {
      tag: "Java",
      image: image,
      title: "Java Project 1",
      caption: "A short description for the project",
      description: "This is my project description, please fill it in",
      link: [
        { link: "https://www.google.com", icon: <youtubeIcon /> },
        { link: "https://www.google.com", icon: <gitHubIcon /> },
        { link: "https://www.google.com", icon: <LinkedinIcon /> },
      ],
    },
  ],

  about: `When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me.

 When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us
  in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power,
  like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that
  is living so full and warm within me,that it might be the mirror of my soul, as my soul is the mirror of the infinite God!`,
};

export default resumeData;
