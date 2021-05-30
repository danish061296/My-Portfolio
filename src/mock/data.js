import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'danish-portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! I am ',
  name: 'Danish Siddiqui',
  subtitle:
    'Freshly graduated with a Bachelor in Computer Science. I make full-stack web applications with my CS colleagues.',
  cta: 'Know More!',
  linkedin: 'https://www.linkedin.com/in/danish-siddiqui-73b531179/',
};

// ABOUT DATA
export const aboutData = {
  img: 'myPicture.png',
  paragraphOne:
    'I am a passionate Web Application Developer. I just graduated from San Francisco State University. \
  I  try to learn something new each day and always puts user expectations as my first priority.',
  paragraphTwo:
    'I also enjoy travelling with my family and friends, and I regularly workout to stay in good shape.',
  paragraphThree:
    'I am looking forward to professionally work in Web Development field as a full-stack or a front-end developer.',
  resume:
    'https://docs.google.com/document/d/1HIWL-tFMnFPe-u9SbfBWZF_8_0n2STmqsRT61DJRCPc/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'iShareBooks.png',
    title: 'iShareBooks',
    info:
      'Full-stack responsive e-commerce web app that allows users specially students to buy, trade, and sale new and used books to help juior students access it.',
    info2: 'It features a login and book posting system using REST APIs, ReactJS, and SQL.',
    url: 'http://35.215.84.127:3000',
    repo: 'https://github.com/danish061296/iShareBooks', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sodaChat.png',
    title: 'Soda-Chat-Room',
    info:
      'SodaChat is a full-stack app using ReactJS, NodeJS, and Express for frontend and JavaMaven, Maven Spark, WebSocket and MongoDB for backend.',
    info2:
      'It features a full login and auth system to sign in or create accounts, live messaging, and a like button. It is deployed on an AWS EC2 instance, hosted on a domain from Google Domains, and SSL certified with LetsEncrypt.',
    url: 'https://sodachat.net/',
    repo: 'https://github.com/danish061296/sodaChat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazonClone.png',
    title: 'Amazon-App-Clone',
    info:
      'Built an Amazon clone with basic functionality such as SignIn/SignOut, and add and delete items from the cart.',
    info2:
      'Technologies used: ReactJS, React Context API, JavaScript, CSS3, Firebase Authentication, Firebase Deployment.',
    url: 'https://app-b8fce.web.app/',
    repo: 'https://github.com/danish061296/amazon-app', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'covid19App.png',
    title: 'Covid19-App',
    info:
      'The Covid19-App is an IOS App that provides real time covid cases across the world as well as within the United States. ',
    info2:
      'It uses a free covid19 API, pod animations, and swift5. It features covid cases by searching with the country name or the states within the United States.',
    url: 'https://github.com/danish061296/MYCovid19-IOS-APP',
    repo: 'https://github.com/danish061296/MYCovid19-IOS-APP', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Meet",
  email: 'dsiddiqui@mail.sfsu.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/danish-siddiqui-73b531179/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/danish061296',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/danish.siddiqui.73/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
