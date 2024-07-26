'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  const pathname = usePathname();

  let footerClass = styles.footer;
  if (pathname === '/') {
    footerClass = `${styles.footer} ${styles.footerHome}`;
  } else if (pathname === '/about') {
    footerClass = `${styles.footer} ${styles.footerAbout}`;
  } else if (pathname === '/projects') {
    footerClass = `${styles.footer} ${styles.footerProjects}`;
  }

  return (
    <footer className={footerClass}>
      <div className={styles.footerContent}>
        <ul className={styles.socials}>
          <li className={styles.socialGit}><a href="https://github.com/Zecrim" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li className={styles.socialLink}><a href="https://www.linkedin.com/in/samuel-thomas-3690a721b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p>2024 &copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
