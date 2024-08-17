import React, { useState } from 'react';
import styles from '../styles/Hero_5.module.css';

const dishes = [
  { 
    name: 'Asada Fries', 
    image: '/images/featured_dishes/01_Asada_Fries.jpeg',
    description: 'Crispy golden fries topped with juicy, flame-grilled carne asada, melted cheese, fresh pico de gallo, and a dollop of cool sour cream. A perfect blend of textures and flavors that will satisfy your cravings.'
  },
  { 
    name: 'Baja Taco', 
    image: '/images/featured_dishes/02_Baja_Taco.jpeg',
    description: 'A soft corn tortilla cradling crispy beer-battered fish, topped with tangy cabbage slaw, zesty pico de gallo, and a drizzle of creamy chipotle sauce. Each bite is a burst of coastal flavors.'
  },
  { 
    name: 'Asada Taco', 
    image: '/images/featured_dishes/03_Asada_Taco.jpeg',
    description: "Tender, marinated carne asada grilled to perfection, nestled in a warm corn tortilla. Topped with fresh cilantro, diced onions, and a squeeze of lime, it's a classic taco that never disappoints."  },
  { 
    name: 'Agua Frescas', 
    image: '/images/featured_dishes/04_Agua_Frescas.jpeg',
    description: 'Refreshing and vibrant, our agua frescas are the perfect thirst-quencher. Made with fresh fruits, water, and a touch of sweetness, these colorful drinks are a delightful complement to any meal.'
  },
];

const Hero5 = () => {
  const [selectedDish, setSelectedDish] = useState(null);

  const openPopup = (dish) => {
    setSelectedDish(dish);
  };

  const closePopup = () => {
    setSelectedDish(null);
  };

  return (
    <div className={styles.featuredDishesSection}>
      <h2 className={styles.featuredTitle}>Featured Dishes</h2>
      <div className={styles.featuredDishesContainer}>
        {dishes.map((dish, index) => (
          <div key={index} className={styles.dishCard} onClick={() => openPopup(dish)}>
            <img src={dish.image} alt={dish.name} className={styles.dishImage} />
            <h3 className={styles.dishName}>{dish.name}</h3>
          </div>
        ))}
      </div>
      {selectedDish && (
        <div className={styles.popup} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedDish.image} alt={selectedDish.name} className={styles.popupImage} />
            <h3 className={styles.popupTitle}>{selectedDish.name}</h3>
            <p className={styles.popupDescription}>{selectedDish.description}</p>
            <button className={styles.closeButton} onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero5;