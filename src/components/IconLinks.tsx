import { FC } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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
        <FaExternalLinkAlt style={style} />
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
