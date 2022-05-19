import { useState } from 'react';

import Skill from './Skill';

import '../styles/Skills.css';

import { osdzSkills, tagLabels } from './content';

function Skills() {
  const [filtered, setFiltered] = useState('');

  const filters = [...Array.from(tagLabels.keys())];

  function handleFilter(filter: string) {
    // console.log(filtered, filter);
    if (filtered === filter) {
      // If filter is set, clear it
      setFiltered('');
    } else setFiltered(filter);
  }

  return (
    <section id='skills'>
      <div className='container'>
        <h2>
          <span>Óscar comes equipped with </span>
          <span>the following features!</span>
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
