import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export interface LinkType {
  url: string;
  display: string;
  name: string;
  icon: JSX.Element;
}

const osdz_links: LinkType[] = [
  {
    url: 'https://www.linkedin.com/in/osadezu',
    display: 'linkedin.com/in/osadezu',
    name: 'LinkedIn',
    icon: <FiLinkedin />,
  },
  {
    url: 'https://github.com/osadezu',
    display: 'github.com/osadezu',
    name: 'GitHub',
    icon: <FiGithub />,
  },
  {
    url: 'https://twitter.com/osadezu',
    display: 'twitter.com/osadezu',
    name: 'Twitter',
    icon: <FiTwitter />,
  },
  {
    url: 'mailto:osadezu@gmail.com',
    display: 'osadezu@gmail.com',
    name: 'Email',
    icon: <FiMail />,
  },
];

function Links() {
  return (
    <section id='links'>
      <div className='container'>
        <h2>Find me online</h2>
        <ul>
          {osdz_links.map((el, i) => (
            <li key={i}>
              <a className='w-icon' href={el.url}>
                {el.icon}
                {el.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Links;
