import { useEffect, useRef } from 'react';
import Project from './Project';

export interface ProjectType {
  name: string;
  blurb: string;
  description: string;
  image_url: string;
  deployed: string;
  github: string;
}

const osdz_projects: ProjectType[] = [
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
      'A memory game inspired by the ultimate electronic game from the 1980s.',
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

function Projects() {
  const scrollingDiv = useRef(document.createElement('div'));

  useEffect(() => {
    const instance = scrollingDiv.current;
    instance.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      instance.removeEventListener('wheel', handleScroll);
    };
  });

  function handleScroll(e: WheelEvent) {
    // Allow default behavior if native horizontal scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || Math.abs(e.deltaY) < 4)
      return;

    e.preventDefault();
    const container = document.getElementById('projects-container');
    const containerScrollPosition =
      document.getElementById('projects-container')!.scrollLeft;
    container!.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: 'smooth',
    });
  }

  return (
    <section id='projects'>
      <h2 className='rebel-h2'>
        <span>These are some of my </span>
        <span>full-stack projects</span>
      </h2>
      <div
        id='projects-container'
        className='container wide'
        ref={scrollingDiv}>
        {osdz_projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
