import React from 'react';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

const Gallery = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const images = [
    '/images/catering/catering_image_2.jpg',
    '/images/catering/catering_image_3.jpg',
    '/images/catering/catering_image_4.jpg',
    '/images/catering/catering_image_5.jpg',
    '/images/catering/catering_image_6.jpg',
    '/images/catering/catering_image_7.jpg',
    '/images/catering/catering_image_8.jpg',
    '/images/catering/catering_image_9.jpg',
    '/images/catering/catering_image_10.jpg',
    '/images/catering/catering_image_11.jpg',
    '/images/catering/catering_image_12.jpg',
    '/images/catering/catering_image_13.jpg',
  ];

  return (
    <div className={styles.overlay}>
      <div className={styles.gallery}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2 style={{ color: 'var(--baja-red)', marginBottom: '1rem', textAlign: 'center' }}>Event Gallery</h2>
        <div className={styles.imageGrid}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image 
                src={src} 
                alt={`Event ${index + 1}`} 
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;