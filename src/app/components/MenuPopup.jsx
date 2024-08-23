import React from 'react';
import styles from '../styles/MenuPopup.module.css';

const MenuPopup = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <h2>Menu</h2>
        <div className={styles.menuSectionsContainer}>
          <div className={styles.menuSection}>
            <h3>TACOS</h3>
            <ul>
              <li>STEAK AND SHRIMP</li>
              <li>GRILLED SHRIMP</li>
              <li>BAJA TACO (SHRIMP OR FISH)</li>
              <li>PULPO LOCO</li>
              <li>ASADA TACO</li>
            </ul>
          </div>
          <div className={styles.menuSection}>
            <h3>CEVICHE</h3>
            <ul>
              <li>CEVICHE</li>
              <li>CEVICHE WITH MANGO</li>
            </ul>
          </div>
          <div className={styles.menuSection}>
            <h3>FRIES</h3>
            <ul>
              <li>STEAK FRIES</li>
              <li>STEAK AND SHRIMP FRIES</li>
              <li>GRILLED SHRIMP FRIES</li>
            </ul>
          </div>
          <div className={styles.menuSection}>
            <h3>AGUAS FRESCA</h3>
            <ul>
              <li>MANGO PINEAPPLE</li>
              <li>CUCUMBER LIME</li>
              <li>STRAWBERRY HIBISCUS</li>
              <li>HORCHATA</li>
              <li>BERRY LEMONADE</li>
            </ul>
          </div>
        </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MenuPopup;