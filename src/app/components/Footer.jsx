import React from 'react';
import styles from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} The Baja Shrimp. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>Privacy Policy</a>
          {'  '}
          <a href="#" className={styles.link}>Terms of Service</a>
          {'  '}
          <a href="#" className={styles.link}>Contact Us</a>
        </div>
        <p>Web Design by <a href="https://bontent.vercel.app">Bontent</a></p>
      </div>
    </footer>
  );
};

export default Footer;