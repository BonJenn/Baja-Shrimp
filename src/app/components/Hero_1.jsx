import React from 'react';
import styles from '../styles/Hero_1.module.css';

const Hero1 = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>Where The Flavor of the Coast Meets the Streets</h1>
        <button className={styles.heroButton}>VIEW MENU</button>
      </div>
      <div className={styles.videoContainer}>
        <video className={styles.heroVideo} src="/images/main_video.mp4" autoPlay loop muted />
      </div>
    </div>
  );
};

export default Hero1;