import { useState } from 'react';
import Skill from './Skill';

export interface SkillType {
  skillName: string;
  tags: string[];
}

const tagLabels = new Map([
  ['fe', 'Front-End'],
  ['be', 'Back-End'],
  ['lang', 'Languages'],
  ['fw', 'Frameworks'],
  ['db', 'Databases'],
  ['dev', 'Dev Tools'],
  ['embed', 'Embedded'],
  ['pm', 'Product'],
]);

const osdzSkills: SkillType[] = [
  {
    skillName: 'JavaScript',
    tags: ['fe', 'be', 'lang'],
  },
  {
    skillName: 'HTML',
    tags: ['fe', 'lang'],
  },
  {
    skillName: 'CSS',
    tags: ['fe', 'lang'],
  },
  {
    skillName: 'React',
    tags: ['fe', 'fw'],
  },
  {
    skillName: 'Node.js',
    tags: ['be'],
  },
  {
    skillName: 'TypeScript',
    tags: ['fe', 'be', 'lang'],
  },
  {
    skillName: 'Express.js',
    tags: ['be', 'fw'],
  },
  {
    skillName: 'MongoDB',
    tags: ['be', 'db'],
  },
  {
    skillName: 'npm',
    tags: ['dev'],
  },
  {
    skillName: 'Django',
    tags: ['fe', 'be', 'fw'],
  },
  {
    skillName: 'Python',
    tags: ['be', 'lang'],
  },
  {
    skillName: 'SQL',
    tags: ['be', 'db', 'lang'],
  },
  {
    skillName: 'C/C++',
    tags: ['be', 'lang', 'embed'],
  },
  {
    skillName: 'Git Source Control',
    tags: ['dev'],
  },
  {
    skillName: 'Command Line/Shell',
    tags: ['dev'],
  },
  {
    skillName: 'Homebrew',
    tags: ['dev'],
  },
  {
    skillName: 'VS Code',
    tags: ['dev'],
  },
  {
    skillName: 'Eclipse',
    tags: ['dev', 'embed'],
  },
  {
    skillName: 'Debugging',
    tags: ['dev'],
  },
  {
    skillName: 'Object-oriented programming',
    tags: ['lang'],
  },
  {
    skillName: 'MVC pattern',
    tags: ['lang'],
  },
  {
    skillName: 'delegation pattern',
    tags: ['lang'],
  },
  {
    skillName: 'test-driven development',
    tags: ['dev'],
  },
  {
    skillName: 'user stories',
    tags: ['pm'],
  },
  {
    skillName: 'Agile/Scrum',
    tags: ['dev', 'pm'],
  },
  {
    skillName: 'MCU programming',
    tags: ['embed'],
  },
  {
    skillName: 'ARM Cortex-M',
    tags: ['embed'],
  },
  {
    skillName: 'STM32',
    tags: ['embed'],
  },
  {
    skillName: 'Serial protocols (SPI, I2C, UART)',
    tags: ['embed'],
  },
  {
    skillName: 'Arduino IDE',
    tags: ['embed'],
  },
  {
    skillName: 'Raspberry Pi',
    tags: ['embed'],
  },
  {
    skillName: 'Breadboard circuit prototyping',
    tags: ['embed'],
  },
  {
    skillName: 'sensor/peripheral interfacing',
    tags: ['embed'],
  },
  {
    skillName: 'oscilloscope',
    tags: ['embed'],
  },
  {
    skillName: 'logic analyzer',
    tags: ['embed'],
  },
  {
    skillName: 'soldering',
    tags: ['embed'],
  },
];

function Skills() {
  const [filtered, setFiltered] = useState('');

  const filters = [...Array.from(tagLabels.keys())];

  function handleFilter(filter: string) {
    console.log(filtered, filter);
    if (filtered === filter) {
      // If filter is set, clear it
      setFiltered('');
    } else setFiltered(filter);
  }

  return (
    <section className='vscroll' id='skills'>
      <div className='container'>
        <h2>Óscar comes equipped with the following features!</h2>
        <div className='filters'>
          {filters.map((filter, i) => (
            <button key={i} type='button' onClick={() => handleFilter(filter)}>
              {tagLabels.get(filter)}
            </button>
          ))}
        </div>
        <div className='skill-list'>
          {osdzSkills.map((skill, i) => (
            <Skill key={i} skill={skill} filtered={filtered} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
