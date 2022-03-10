import { useState } from 'react';
import { FiFileText } from 'react-icons/fi';

import Skill from './Skill';

import '../styles/Skills.css';

export interface SkillType {
  skillName: string;
  tags: string[];
  classes: string[];
}

const tagLabels = new Map([
  ['fe', 'Front-End'],
  ['be', 'Back-End'],
  ['lang', 'Languages'],
  ['dev', 'Dev Tools'],
  ['fw', 'Frameworks'],
  ['embed', 'Embedded'],
  // ['db', 'Databases'],
  // ['pm', 'Product'],
]);

const osdzSkills: SkillType[] = [
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
    tags: ['lang'],
    classes: ['par'],
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
    skillName: 'Serial protocols (SPI, I2C, UART)',
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
    skillName: 'Breadboard circuit prototyping',
    tags: ['embed'],
    classes: [],
  },
  {
    skillName: 'Sensor/peripheral interfacing',
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
    <section id='skills'>
      <div className='container'>
        <h2>
          Oscar&nbsp;comes&nbsp;equipped
          with&nbsp;the&nbsp;following&nbsp;features!
        </h2>
        <div className='filters'>
          {filters.map((filter, i) => (
            <button
              key={i}
              type='button'
              onClick={() => handleFilter(filter)}
              className={filtered === filter ? 'filtered' : 'unfiltered'}>
              {tagLabels.get(filter)}
            </button>
          ))}
        </div>
        <div className={`skill-list${filtered ? ` filtered ${filtered}` : ''}`}>
          {osdzSkills
            .sort((a, b) => (a.skillName > b.skillName ? 1 : -1))
            .map((skill, i) => (
              <Skill key={i} skill={skill} filtered={filtered} />
            ))}
          <div
            className={`skill acc lang-acc lang-acc-0${
              filtered === 'lang' ? ' lang filtered' : ''
            }`}>
            {'let '}
            <span>programming:</span>
            {' languages[] = ['}
          </div>
          <div
            className={`skill acc lang-acc lang-acc-1${
              filtered === 'lang' ? ' lang filtered' : ''
            }`}>
            {'];'}
          </div>
          <div
            className={`skill acc lang-acc lang-acc-2${
              filtered === 'lang' ? ' lang filtered' : ''
            }`}>
            {'let '}
            <span>code:</span>
            {' (pattern|paradigm)[] = ['}
          </div>
          <div
            className={`skill acc lang-acc lang-acc-3${
              filtered === 'lang' ? ' lang filtered' : ''
            }`}>
            {'];'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
