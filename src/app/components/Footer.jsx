import React from 'react';
import styles from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} The Baja Shrimp. All rights reserved.</p>
        <div className={styles.links}>
       
        </div>
        <p>Web Design by <a href="https://bontent.vercel.app"><strong>Bontent</strong></a></p>
      </div>
    </footer>
  );
};

export default Footer;