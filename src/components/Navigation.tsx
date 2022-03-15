import { FiUser, FiTool, FiCpu, FiLink, FiFileText } from 'react-icons/fi';

function Navigation({
  section,
  handleScroll,
}: {
  section: string;
  handleScroll: (e: React.MouseEvent, target: string) => void;
}) {
  return (
    <nav className='navigation'>
      <ul>
        <li className={section === 'oscar' ? 'current' : ''}>
          <a
            className='w-icon'
            href='#oscar'
            onClick={(e) => handleScroll(e, 'oscar')}>
            <FiUser />
            <span className='nav-text'>Óscar</span>
          </a>
        </li>
        <li className={section === 'skills' ? 'current' : ''}>
          <a
            className='w-icon'
            href='#skills'
            onClick={(e) => handleScroll(e, 'skills')}>
            <FiTool />
            <span className='nav-text'>Toolkit</span>
          </a>
        </li>
        <li className={section === 'projects' ? 'current' : ''}>
          <a
            className='w-icon'
            href='#projects'
            onClick={(e) => handleScroll(e, 'projects')}>
            <FiCpu />
            <span className='nav-text'>Projects</span>
          </a>
        </li>
        <li className={section === 'links' ? 'current' : ''}>
          <a
            className='w-icon'
            href='#links'
            onClick={(e) => handleScroll(e, 'links')}>
            <FiLink />
            <span className='nav-text'>Find Me</span>
          </a>
        </li>
        <li className={section === 'resume' ? 'current' : ''}>
          <a
            className='w-icon'
            href='#resume'
            onClick={(e) => handleScroll(e, 'resume')}>
            <FiFileText />
            <span className='nav-text'>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
