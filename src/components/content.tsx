import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

//
// Links
//

export interface LinkType {
  url: string;
  display: string;
  name: string;
  icon: JSX.Element;
}

export const osdzLinks: LinkType[] = [
  {
    url: 'https://www.linkedin.com/in/osadezu',
    display: 'linkedin.com/in/osadezu',
    name: 'LinkedIn',
    icon: <FiLinkedin />,
  },
  {
    url: 'https://github.com/osadezu',
    display: 'github.com/osadezu',
    name: 'GitHub',
    icon: <FiGithub />,
  },
  {
    url: 'https://twitter.com/osadezu',
    display: 'twitter.com/osadezu',
    name: 'Twitter',
    icon: <FiTwitter />,
  },
  {
    url: 'mailto:osadezu@gmail.com',
    display: 'osadezu@gmail.com',
    name: 'Email',
    icon: <FiMail />,
  },
];

//
// Skills
//

export interface SkillType {
  skillName: string;
  tags: string[];
  classes: string[];
}

export const tagLabels = new Map([
  ['fe', 'Front-End'],
  ['be', 'Back-End'],
  ['lang', 'Languages'],
  ['dev', 'Dev Tools'],
  ['fw', 'Frameworks'],
  ['embed', 'Embedded'],
  // ['db', 'Databases'],
  // ['pm', 'Product'],
]);

export const osdzSkills: SkillType[] = [
  {
    skillName: 'JavaScript',
    tags: ['fe', 'be', 'lang'],
    classes: [],
  },
  {
    skillName: 'HTML',
    tags: ['fe', 'lang'],
    classes: [],
  },
  {
    skillName: 'CSS',
    tags: ['fe', 'lang'],
    classes: [],
  },
  {
    skillName: 'React',
    tags: ['fe', 'fw'],
    classes: [],
  },
  {
    skillName: 'Node.js',
    tags: ['be'],
    classes: [],
  },
  {
    skillName: 'TypeScript',
    tags: ['fe', 'be', 'lang'],
    classes: [],
  },
  {
    skillName: 'Domain management',
    tags: ['fe', 'dev'],
    classes: [],
  },
  {
    skillName: 'Online deployment',
    tags: ['fe', 'dev'],
    classes: [],
  },
  {
    skillName: 'Express.js',
    tags: ['be', 'fw'],
    classes: [],
  },
  {
    skillName: 'Next.js',
    tags: ['fe', 'fw'],
    classes: [],
  },
  {
    skillName: 'MongoDB',
    tags: ['be', 'db'],
    classes: [],
  },
  {
    skillName: 'Material UI',
    tags: ['fe'],
    classes: [],
  },
  {
    skillName: 'npm',
    tags: ['dev'],
    classes: [],
  },
  {
    skillName: 'Django',
    tags: ['fe', 'be', 'fw'],
    classes: [],
  },
  {
    skillName: 'Python',
    tags: ['be', 'lang'],
    classes: [],
  },
  {
    skillName: 'pipenv',
    tags: ['dev'],
    classes: [],
  },
  {
    skillName: 'SQL',
    tags: ['be', 'db', 'lang'],
    classes: [],
  },
  {
    skillName: 'C/C++',
    tags: ['be', 'lang', 'embed'],
    classes: [],
  },
  {
    skillName: 'Computer science',
    tags: ['be', 'dev'],
    classes: [],
  },
  {
    skillName: 'Algorithms',
    tags: ['be', 'lang'],
    classes: ['par'],
  },
  {
    skillName: 'Data structures',
    tags: ['be', 'lang'],
    classes: ['par'],
  },
  {
    skillName: 'Git',
    tags: ['dev'],
    classes: [],
  },
  {
    skillName: 'CLI/Shell',
    tags: ['dev'],
    classes: [],
  },
  {
    skillName: 'Homebrew',
    tags: ['dev'],
    classes: [],
  },
  {
    skillName: 'VS Code',
    tags: ['dev'],
    classes: [],
  },
  {
    skillName: 'Eclipse',
    tags: ['dev', 'embed'],
    classes: [],
  },
  {
    skillName: 'Debugging',
    tags: ['dev'],
    classes: [],
  },
  {
    skillName: 'Object-oriented programming',
    tags: ['lang'],
    classes: ['par'],
  },
  {
    skillName: 'MVC pattern',
    tags: ['lang'],
    classes: ['par'],
  },
  {
    skillName: 'Delegation pattern',
    tags: [],
    classes: [],
  },
  {
    skillName: 'TDD',
    tags: ['dev', 'lang'],
    classes: ['par'],
  },
  {
    skillName: 'User stories',
    tags: ['pm'],
    classes: [],
  },
  {
    skillName: 'Agile/Scrum',
    tags: ['pm'],
    classes: [],
  },
  {
    skillName: 'MCU programming',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'ARM Cortex-M',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'STM32',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'SPI, I2C, UART',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'IoT',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Arduino IDE',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Raspberry Pi',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Breadboard prototyping',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Sensor interfacing',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Oscilloscope',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Logic analyzer',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Soldering',
    tags: ['embed'],
    classes: [],
  },
];

//
// Projects
//

export interface ProjectType {
  name: string;
  blurb: string;
  description: string;
  image_url: string;
  deployed: string;
  github: string;
}

export const osdzProjects: ProjectType[] = [
  {
    name: 'PizzaParty',
    blurb: 'A fast and easy way for new remote teams to break the zoom ice.',
    description:
      'PizzaParty uses NEXT.js for the front-end and a back-end API based on Django REST Framework. Through a shared link, a remote team quickly throws together an interactive album, immediately dipping their toes into the collab spirit. During their first few days working together, members can revisit the page to remind themselves of who is who, where everyone lives, and what was the name of that fun person that —against all odds— hates Hawaiian.',
    image_url: './images/screen-pizza-party.png',
    deployed: 'https://pizza-party.osadezu.com',
    github: 'https://github.com/osadezu/pizza-party',
  },
  {
    name: 'Lazy Cupid',
    blurb: "An app to fulfill your sweetheart's V-Day expectations in seconds.",
    description:
      'Lazy Cupid is an ultra-fast greeting card service using React.js. When the user is done customizing the card, a URL is encoded with all the details so the recipient can retrieve it without server-side storage.',
    image_url: './images/screen-lazy-cupid.png',
    deployed: 'https://lazy-cupid.osadezu.com',
    github: 'https://github.com/osadezu/lazy-cupid',
  },
  {
    name: 'Fabulous Fred',
    blurb:
      'A memory game inspired by the ultimate electronic toy from the 1980s.',
    description:
      'Fabulous Fred is written purely in Javascript, HTML and CSS. The game is played in the same way as Simon Says, where the computer lights up a random sequence of buttons that the user has to repeat by memory. The sequence keeps getting longer until the user presses the wrong button.',
    image_url: './images/screen-fabulous-fred.png',
    deployed: 'https://fabulous-fred.osadezu.com',
    github: 'https://github.com/osadezu/fabulous-fred',
  },
  {
    name: 'Agiliteam Planner',
    blurb: 'An experiment in collaboration and custom super-responsive CSS.',
    description:
      'AgiliTeam is an exercise in responsive and dynamic CSS layouts. The app uses React.js as the front-end and relies on an API written in Express.js for the backend. This demo is hosted on Netlify and Heroku.',
    image_url: './images/screen-agiliteam.png',
    deployed: 'https://agiliteam.netlify.app',
    github: 'https://github.com/agiliteam-planner/agiliteam-front-end',
  },
  {
    name: 'osadezu.com',
    blurb: 'A personal portfolio page written in TypeScript using React.js',
    description:
      'osadezu.com is written in TypeScript using React.js and hosted on Github Pages. The styling is caringly handcrafted CSS using Google Fonts and Feather icons.',
    image_url: './images/screen-osadezu-com.png',
    deployed: 'https://www.osadezu.com',
    github: 'https://github.com/osadezu/osadezu-com',
  },
];
