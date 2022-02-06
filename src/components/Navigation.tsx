import { FiUser, FiTool, FiCpu, FiLink, FiMessageCircle } from 'react-icons/fi'


function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li className="current"><a href="#about"><FiUser/>About</a></li>
        <li><a href="#skills"><FiTool />Toolkit</a></li>
        <li><a href="#projects"><FiCpu />Projects</a></li>
        <li><a href="#links"><FiLink />Find Me</a></li>
        <li><a href="#contact"><FiMessageCircle />Get In Touch</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
