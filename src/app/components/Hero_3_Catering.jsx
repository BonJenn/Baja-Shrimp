import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Hero_3_Catering.module.css';
import Catering from './Catering';
import Image from 'next/image';

const Hero3_Catering = () => {
  const [isCateringOpen, setIsCateringOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('error', (e) => {
        console.error("Video error:", videoRef.current.error);
        console.error("Error event:", e);
      });
      
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
        // You could set a state here to show a fallback image
      });
    }
  }, []);

  return (
    <div className={styles.cateringContainer}>
      <div className={styles.cateringContent}>
        <h2 className={styles.cateringTitle}>Catering Services</h2>
        <p className={styles.cateringDescription}>
          Elevate your event with The Baja Shrimp's catering services. We bring the vibrant flavors of Baja-style cuisine to your special occasions. From concerts, festivals, corporate events, to weddings and family gatherings... our team ensures a memorable dining experience with our fresh, gourmet tacos, ceviche, and refreshing aguas frescas.
        </p>
        <button className={styles.cateringButton} onClick={() => setIsCateringOpen(true)}>
          Request Catering
        </button>
      </div>
      <div className={styles.videoWrapper}>
        <video ref={videoRef} className={styles.cateringVideo} autoPlay loop muted playsInline>
          <source src="/images/catering/baja_catering_video.mp4" type="video/mp4" />
          <source src="/images/catering/baja_catering_video.webm" type="video/webm" />
          Your browser does not support the video tag.
          <Image src="/images/catering/fallback_image.jpg" alt="Catering video fallback" width={800} height={600} />
        </video>
      </div>
      <Catering isOpen={isCateringOpen} onClose={() => setIsCateringOpen(false)} />
    </div>
  );
};

export default Hero3_Catering;