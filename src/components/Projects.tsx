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
    blurb: 'A fast and easy way to for new remote teams to break the zoom ice.',
    description:
      'A fast and easy way for new remote teams to break the zoom ice. Through a shared link, the group quickly throws together an interactive album, immediately dipping their toes into the collab spirit. During their first few days working together, members can revisit the page to remind themselves of who is who, where everyone lives, and what was the name of that fun person that —against all odds— hates Hawaiian.',
    image_url:
      'https://user-images.githubusercontent.com/24361930/155178316-d1f92adb-c5ec-4bd4-8200-e997a495fe9c.png',
    deployed: 'https://pizza-party.osadezu.com',
    github: 'https://github.com/osadezu/pizza-party',
  },
  {
    name: 'Lazy Cupid',
    blurb: "An app to fulfill your sweetheart's V-Day expectations in seconds.",
    description:
      "A silly but fully functional web app that allows someone who is short on time to fulfill their sweetheart's demands on Valentine's Day in a just-in-time and couldn't-have-been-easier fashion (relationship success not guaranteed). The user is given several options to customize a greeting card, including content obtained from the APIs listed below, and an option to add a personal message. When done, the user can copy an encoded URL which specifies the customizations so that the recipient can see it exactly as created without server-side data storage.",
    image_url:
      'https://user-images.githubusercontent.com/24361930/148898075-44cffc2f-dffb-4476-88bb-01549c21fcf1.png',
    deployed: 'https://lazy-cupid.osadezu.com/',
    github: 'https://github.com/osadezu/lazy-cupid',
  },
  {
    name: 'Fabulous Fred',
    blurb:
      'A memory game inspired by the ultimate electronic game from the 1980s.',
    description:
      'A memory game inspired by the ultimate electronic game from the 1980s. The game is played in the same way as Simon Says, where the computer lights up a random sequence of buttons that the user has to repeat by memory. The sequence keeps getting longer until the user presses the wrong button.',
    image_url:
      'https://github.com/osadezu/fabulous-fred/raw/main/planning/screenshots/fabulous-fred-screenshot-01.png',
    deployed: 'https://fabulous-fred.osadezu.com/',
    github: 'https://github.com/osadezu/fabulous-fred',
  },
];

function Projects() {
  return (
    <section className='slides' id='projects'>
      <div className='wrapper'>
        {osdz_projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
