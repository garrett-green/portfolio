import React from 'react';

import styles from './footerStyles.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '15px',
            paddingRight: '15px',
            paddingLeft: '15px',
          }}
        >
          Copyright © 2019 Garrett Green | Site built with{' '}
          <i>
            <a
              style={{
                outline: 'none',
                color: '#000000',
                textDecoration: 'none',
              }}
              href="http://amanhimself.me/"
              target="_blank"
              rel="noopener"
            >
              Aman Mittal
            </a>'s
          </i>{' '}
          <i>
            <a
              style={{
                outline: 'none',
                color: '#000000',
                textDecoration: 'none',
              }}
              href="https://www.gatsbyjs.org/starters/amandeepmittal/gatsby-portfolio-v3/"
              target="_blank"
              rel="noopener"
            >
              gatsby-portfolio-v3
            </a>
          </i>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
