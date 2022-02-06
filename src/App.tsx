import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <About />
      <Navigation />
      <Skills />
      <Projects />
      <Links />
      <Contact />
    </div>
  );
}

export default App;
