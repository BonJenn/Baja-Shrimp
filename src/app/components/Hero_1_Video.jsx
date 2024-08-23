import React, { useState } from 'react';
import styles from '../styles/Hero_1_Video.module.css';
import MenuPopup from './MenuPopup';

const Hero1_Video = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.videoContainer}>
        <video className={styles.heroVideo} src="/images/main_video.mp4" autoPlay loop muted />
        <img className={styles.mobileImage} src="/images/carousel/carousel_image_4.jpeg" alt="Baja Shrimp" />
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>Where The Flavors of the Coast Meet the Streets</h1>
          <button className={styles.heroButton} onClick={openMenu}>VIEW MENU</button>
        </div>
      </div>
      {isMenuOpen && <MenuPopup onClose={() => setIsMenuOpen(false)} />}
    </div>
  );
}

export default Hero1_Video;