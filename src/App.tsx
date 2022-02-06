import { IconContext } from 'react-icons';

import About from './components/About';
import Contact from './components/Contact';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './App.css';

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <About />
        <Navigation />
        <Skills />
        <Projects />
        <Links />
        <Contact />
      </IconContext.Provider>
    </div>
  );
}

export default App;
