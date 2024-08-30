import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Hero_3_Catering.module.css';
import Catering from './Catering';
import Image from 'next/image';
import Gallery from './Gallery'; // Add this import

const Hero3_Catering = () => {
  const [isCateringOpen, setIsCateringOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false); // Add this state
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState('https://7s41bce4sdpfurqk.public.blob.vercel-storage.com/Baja_Catering_Video-Cfcdq8TewosobNvuczn9wQXV6LfcXL.mp4');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('error', (e) => {
        console.error("Video error:", videoRef.current.error);
        console.error("Error event:", e);
      });
      
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  return (
    <div className={styles.cateringContainer}>
      <div className={styles.cateringContent}>
        <h2 className={styles.cateringTitle}>Catering Services</h2>
        <p className={styles.cateringDescription}>
          Elevate your event with The Baja Shrimp's catering services. We bring the vibrant flavors of Baja-style cuisine to your special occasions. From concerts, festivals, film shoots, corporate events, to weddings and family gatherings... our team ensures a memorable dining experience with our fresh, gourmet tacos, ceviche, and refreshing aguas frescas.
        </p>
        <p className={styles.cateringDescription}>
          We offer both <strong>food truck</strong> and <strong>buffet</strong> catering. Pick what works best for your event!
        </p>
        <h3 className={styles.eventsTitle}>We cater for:</h3>
        <ul className={styles.eventsList}>
          <li>Schools</li>
          <li>Football games</li>
          <li>Cheerleading events</li>
          <li>Concerts</li>
          <li>Festivals</li>
          <li>Birthday parties</li>
          <li>Celebration of life</li>
          <li>Anniversaries</li>
          <li>And more!</li>
        </ul>
        <p className={styles.servingTitle}>Proudly serving</p>
        <p className={styles.servingAreas}>Los Angeles County · Orange County · San Diego County · Riverside County · San Bernardino County</p>
        <div className={styles.buttonContainer}>
          <button className={styles.cateringButton} onClick={() => setIsCateringOpen(true)}>
            Request Catering
          </button>
          <button className={styles.galleryButton} onClick={() => setIsGalleryOpen(true)}>
            View Event Gallery
          </button>
        </div>
      </div>
      <div className={styles.videoWrapper}>
        <video ref={videoRef} className={styles.cateringVideo} autoPlay loop muted playsInline>
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          Your browser does not support the video tag.
          <Image src="/images/catering/fallback_image.jpg" alt="Catering video fallback" width={800} height={600} />
        </video>
      </div>
      <Catering isOpen={isCateringOpen} onClose={() => setIsCateringOpen(false)} />
      <Gallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
};

export default Hero3_Catering;