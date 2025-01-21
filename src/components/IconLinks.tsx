import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail, SiZenn } from 'react-icons/si';

export const IconLinks: FC = () => {
  const style = { display: 'flex', alignItems: 'center', fontSize: '1.5rem' };
  return (
    <div className="navbar__items" style={{ margin: '1rem 0' }}>
      <a
        href="https://github.com/hibara428"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__link"
        style={{ margin: '0 0.5rem' }}
      >
        <FaGithub style={style} />
      </a>
      <a
        href="https://note.com/hibara428"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__link"
        style={{ margin: '0 0.5rem' }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          role="img"
          viewBox="120 120 240 240"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
        >
          <path d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z" />
        </svg>
      </a>
      <a
        href="https://zenn.dev/hibara428"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__link"
        style={{ margin: '0 0.5rem' }}
      >
        <SiZenn style={style} />
      </a>
      <a
        href="https://x.com/hibara428"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__link"
        style={{ margin: '0 0.5rem' }}
      >
        <FaXTwitter style={style} />
      </a>
      <a
        href="mailto:hibara428@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__link"
        style={{ margin: '0 0.5rem' }}
      >
        <SiGmail style={style} />
      </a>
    </div>
  );
};
