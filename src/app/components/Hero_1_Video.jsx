import React from 'react';
import styles from '../styles/Hero_1.module.css';

const Hero1 = () => {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.videoContainer}>
        <video className={styles.heroVideo} src="/images/main_video.mp4" autoPlay loop muted />
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>Where The Flavors of the Coast Meet the Streets</h1>
          <button className={styles.heroButton} onClick={scrollToMenu}>VIEW MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;