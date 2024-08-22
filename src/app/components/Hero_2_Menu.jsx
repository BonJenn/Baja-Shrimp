import React from 'react';
import styles from '../styles/Hero_2_Menu.module.css';

const Hero2_Menu = () => {
  return (
    <div id="menu" className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>MENU</h1>
        <div className={styles.menuSection}>
          <h2>TACOS</h2>
          <ul>
            <li>STEAK AND SHRIMP</li>
            <li>GRILLED SHRIMP</li>
            <li>BAJA TACO (SHRIMP OR FISH)</li>
            <li>PULPO LOCO</li>
            <li>ASADA TACO</li>
          </ul>
        </div>
        <div className={styles.menuSection}>
          <h2>CEVICHE</h2>
          <ul>
            <li>CEVICHE</li>
            <li>CEVICHE WITH MANGO</li>
          </ul>
        </div>
        <div className={styles.menuSection}>
          <h2>FRIES</h2>
          <ul>
            <li>STEAK FRIES</li>
            <li>STEAK AND SHRIMP FRIES</li>
            <li>GRILLED SHRIMP FRIES</li>
          </ul>
        </div>
        <div className={styles.menuSection}>
          <h2>AGUAS FRESCA</h2>
          <ul>
            <li>MANGO PINEAPPLE</li>
            <li>CUCUMBER LIME</li>
            <li>STRAWBERRY HIBISCUS</li>
            <li>HORCHATA</li>
            <li>BERRY LEMONADE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero2_Menu;