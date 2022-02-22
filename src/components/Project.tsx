import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { ProjectType } from './Projects';

function Project({ project }: { project: ProjectType }) {
  return (
    <div className='project card'>
      <h3>{project.name}</h3>
      <div className='links'>
        <a href={project.deployed}>
          <FiArrowUpRight />
          Live
        </a>
        <a href={project.github}>
          <FiGithub />
          GitHub
        </a>
      </div>
      <img
        src={project.image_url}
        alt={`${project.name} project screenshot.`}
      />
      <p className='blurb'>{project.blurb}</p>
    </div>
  );
}

export default Project;
