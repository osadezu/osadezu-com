import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { ProjectType } from './Projects';

function Project({ project }: { project: ProjectType }) {
  return (
    <div className='project-card'>
      <h3>
        <a href={project.deployed}>{project.name}</a>
      </h3>
      <div className='links'>
        <a href={project.deployed} className='w-icon'>
          Live
          <FiArrowUpRight />
        </a>
        <a href={project.github} className='w-icon'>
          GitHub
          <FiGithub />
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
