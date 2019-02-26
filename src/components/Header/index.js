import React from "react";
import Link from "gatsby-link";

import { links } from "../../data/socialLinks";
import styles from "./header.module.css";

const Header = () => (
  <div className={styles.headerContainer}>
    <div className={styles.headerMaxWidthContainer}>
      <h2 className={styles.headerH1}>
        {/* <Link to="/" className={styles.headerLinkStyle}>
          about
        </Link> */}
        <a href='/garrett-green-resume.pdf' target="_blank" rel="noopener">
          resume
        </a>
        &nbsp;/&nbsp;
        <a href={links.linkedin} target="_blank" rel="noopener">
          linkedin
        </a>
        &nbsp;/&nbsp;
        <a href={links.github} target="_blank" rel="noopener">
          github
        </a>
      </h2>
    </div>
  </div>
);

export default Header;
