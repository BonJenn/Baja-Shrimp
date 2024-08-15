import React from 'react';
import styles from '../styles/Hero_5.module.css';

const dishes = [
  { name: 'Asada Fries', image: '/images/featured_dishes/01_Asada_Fries.jpeg' },
  { name: 'Baja Taco', image: '/images/featured_dishes/02_Baja_Taco.jpeg' },
  { name: 'Asada Taco', image: '/images/featured_dishes/03_Asada_Taco.jpeg' },
  { name: 'Agua Frescas', image: '/images/featured_dishes/04_Agua_Frescas.jpeg' },
];

const Hero5 = () => {
  return (
    <div className={styles.featuredDishesContainer}>
      {dishes.map((dish, index) => (
        <div key={index} className={styles.dishCard}>
          <img src={dish.image} alt={dish.name} className={styles.dishImage} />
          <h3 className={styles.dishName}>{dish.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Hero5;