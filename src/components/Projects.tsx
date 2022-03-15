import { useEffect, useRef } from 'react';
import Project from './Project';

import { osdzProjects } from './content';

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
        {osdzProjects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
