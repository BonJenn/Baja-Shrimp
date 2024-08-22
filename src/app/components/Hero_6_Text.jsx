import React from 'react';
import styles from '../styles/Hero_6_Text.module.css';

const Hero6_Text = () => {
    console.log('Hero4 component is rendering');

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            This locally cherished family-owned truck pays homage to a culinary delight held in deep affection by numerous San Diegans: the Baja shrimp. 
            Meticulously battered and impeccably fried, each bite delivers a symphony of textures, enhanced by a vibrant and invigorating slaw.
          </p>
          <p className={styles.paragraph}>
            Within the realm of the revered Mexican interpretation of this beloved seafood, the Baja Shrimp food truck stands as an unwavering authority. Whether nestled in a warm taco or atop a crisp tostada, a visit to this establishment consistently promises an experience of utmost satisfaction.
          </p>
        </div>
      </div>
      <div className={styles.logoSection}>
        <img src="/images/baja_shrimp_logo.png" alt="The Baja Shrimp Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Hero6_Text;