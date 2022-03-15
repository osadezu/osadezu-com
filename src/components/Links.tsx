import { osdzLinks } from './content';

function Links() {
  return (
    <section id='links'>
      <div className='container'>
        <h2>Find me online</h2>
        <ul>
          {osdzLinks.map((el, i) => (
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
