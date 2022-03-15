import { useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { IconContext } from 'react-icons';

import './styles/App.css';

import Oscar from './components/Oscar';
import Resume from './components/Resume';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

// Run polyfill
smoothscroll.polyfill();

function App() {
  const [section, setSection] = useState('oscar');

  function handleScroll(e: React.MouseEvent, target: string) {
    // e.preventDefault();
    setSection(target);
    // document
    //   .querySelector(`#${target}`)
    //   ?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='App'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Oscar />
        <Navigation section={section} handleScroll={handleScroll} />
        <Skills />
        <Projects />
        <Links />
        <Resume />
      </IconContext.Provider>
    </div>
  );
}

export default App;
