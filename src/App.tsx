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
  return (
    <div className='App'>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Oscar />
        <Navigation />
        <Skills />
        <Projects />
        <Links />
        <Resume />
      </IconContext.Provider>
    </div>
  );
}

export default App;
