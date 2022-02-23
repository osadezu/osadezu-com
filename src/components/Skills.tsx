import Skill from './Skill';

export interface SkillType {
  skillDomain: string;
  skillList: string[];
}

const osdz_skills: SkillType[] = [
  {
    skillDomain: 'Languages / Frameworks',
    skillList: [
      'JavaScript',
      'TypeScript',
      'Python',
      'C/C++',
      'React',
      'Node.js',
      'Express.js',
      'Django',
      'MongoDB',
      'SQL',
      'HTML',
      'CSS',
    ],
  },
  {
    skillDomain: 'Dev Tools',
    skillList: [
      'Git Source Control',
      'Command Line/Shell',
      'npm',
      'Homebrew',
      'VS Code',
      'Eclipse',
      'Debugging',
    ],
  },
  {
    skillDomain: 'Methodologies',
    skillList: [
      'Object-oriented programming',
      'MVC pattern',
      'delegation pattern',
      'test-driven development',
      'user stories',
      'Agile/Scrum',
    ],
  },
  {
    skillDomain: 'Embedded Systems',
    skillList: [
      'MCU programming',
      'ARM Cortex-M',
      'STM32',
      'Serial protocols (SPI, I2C, UART)',
      'Arduino IDE',
      'Raspberry Pi',
    ],
  },
  {
    skillDomain: 'Electronics Lab',
    skillList: [
      'Breadboard circuit prototyping',
      'sensor/peripheral interfacing',
      'oscilloscope',
      'logic analyzer',
      'soldering',
    ],
  },
];

function Skills() {
  return (
    <section className='vscroll' id='skills'>
      <div className='container'>
        <h2>Óscar comes equipped with the following features!</h2>
        <div className='skill-list'>
          {osdz_skills.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
