import React from 'react';
import {
  FaMedium,
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from 'react-icons/lib/fa';

import styles from './socialLinksStyles.module.css';

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:garrett.wile.green@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/garrett-green/"
            target="_blank"
            rel="noopener"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/garrettwgreen/"
            target="_blank"
            rel="noopener"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/garrettgreen"
            target="_blank"
            rel="noopener"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
