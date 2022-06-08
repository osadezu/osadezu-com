import { FiUser, FiTool, FiCpu, FiLink, FiFileText } from 'react-icons/fi';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <a className='nav-link w-icon' href='#oscar'>
            <FiUser />
            <span className='nav-text'>Óscar</span>
          </a>
        </li>
        <li>
          <a className='nav-link w-icon' href='#skills'>
            <FiTool />
            <span className='nav-text'>Skills</span>
          </a>
        </li>
        <li>
          <a className='nav-link w-icon' href='#projects'>
            <FiCpu />
            <span className='nav-text'>Projects</span>
          </a>
        </li>
        <li>
          <a className='nav-link w-icon' href='#links'>
            <FiLink />
            <span className='nav-text'>Find Me</span>
          </a>
        </li>
        <li>
          <a className='nav-link w-icon' href='#resume'>
            <FiFileText />
            <span className='nav-text'>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
