import { FiFileText } from 'react-icons/fi';

function Resume() {
  return (
    <section id='resume'>
      <div className='container'>
        <h2>
          Download my resume{' '}
          <a href='https://www.dropbox.com/s/8jb21oy88j5bhwz/OSdZ_Resume.pdf?dl=1'>
            here
            <FiFileText />
          </a>
        </h2>
        <div className='about'>
          <h2>About osadezu.com</h2>
          <p>
            This website is written in{' '}
            <a href='https://www.typescriptlang.org/'>TypeScript</a> using{' '}
            <a href='https://reactjs.org/'>React.js</a> and hosted on{' '}
            <a href='https://pages.github.com/'>Github Pages</a>.
          </p>
          <p>
            The styling is caringly handcrafted CSS using{' '}
            <a href='https://fonts.google.com/'>Google Fonts</a> and{' '}
            <a href='https://feathericons.com/'>Feather</a> icons.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
