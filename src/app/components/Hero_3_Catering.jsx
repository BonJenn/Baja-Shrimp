import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Hero_3_Catering.module.css';
import Catering from './Catering';

const Hero3_Catering = () => {
  const [isCateringOpen, setIsCateringOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Error playing video:", error));
    }
  }, []);

  return (
    <div className={styles.cateringContainer}>
      <div className={styles.cateringContent}>
        <h2 className={styles.cateringTitle}>Catering Services</h2>
        <p className={styles.cateringDescription}>
          Elevate your event with The Baja Shrimp's catering services. We bring the vibrant flavors of Baja-style cuisine to your special occasions. From corporate events to weddings and family gatherings, our team ensures a memorable dining experience with our fresh, gourmet tacos, ceviche, and refreshing aguas frescas.
        </p>
        <button className={styles.cateringButton} onClick={() => setIsCateringOpen(true)}>
          Request Catering
        </button>
      </div>
      <div className={styles.videoWrapper}>
        <video ref={videoRef} className={styles.cateringVideo} src="/images/catering/baja_catering_video.mp4" autoPlay loop muted />
      </div>
      <Catering isOpen={isCateringOpen} onClose={() => setIsCateringOpen(false)} />
    </div>
  );
};

export default Hero3_Catering;