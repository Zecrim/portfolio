import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul className={styles.socials}>
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p>2024 &copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
