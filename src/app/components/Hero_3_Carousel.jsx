import React from 'react';
import styles from '../styles/Hero_3.module.css';

const images = [
  '/images/carousel/carousel_image_1.jpeg',
  '/images/carousel/carousel_image_2.jpeg',
  '/images/carousel/carousel_image_3.jpeg',
  '/images/carousel/carousel_image_4.jpeg',
  '/images/carousel/carousel_image_5.jpeg',
  '/images/carousel/carousel_image_6.jpeg',
  '/images/carousel/carousel_image_7.jpeg',
  '/images/carousel/carousel_image_8.jpeg',
];

const Hero3 = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {[...images, ...images].map((image, index) => (
          <img key={index} src={image} alt={`Carousel image ${index + 1}`} className={styles.carouselImage} />
        ))}
      </div>
    </div>
  );
};

export default Hero3;