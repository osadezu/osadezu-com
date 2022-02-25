import { FiUser, FiTool, FiCpu, FiLink, FiFileText } from 'react-icons/fi';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li className='current'>
          <a className='w-icon' href='#oscar'>
            <FiUser />
            Óscar
          </a>
        </li>
        <li>
          <a className='w-icon' href='#skills'>
            <FiTool />
            Toolkit
          </a>
        </li>
        <li>
          <a className='w-icon' href='#projects'>
            <FiCpu />
            Projects
          </a>
        </li>
        <li>
          <a className='w-icon' href='#links'>
            <FiLink />
            Find Me
          </a>
        </li>
        <li>
          <a className='w-icon' href='#resume'>
            <FiFileText />
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
