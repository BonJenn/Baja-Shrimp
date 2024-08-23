import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Hero_3_Catering.module.css';
import Catering from './Catering';
import Image from 'next/image';

const Hero3_Catering = () => {
  const [isCateringOpen, setIsCateringOpen] = useState(false);
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState('https://7s41bce4sdpfurqk.public.blob.vercel-storage.com/Baja_Catering_Video-Cfcdq8TewosobNvuczn9wQXV6LfcXL.mp4');
  const [blob, setBlob] = useState(null);
  const inputFileRef = useRef(null);

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

  const handleUpload = async (event) => {
    event.preventDefault();

    const file = inputFileRef.current.files[0];
    const filename = 'Baja_Catering_Video.mp4';

    const response = await fetch(`/api/upload-video?filename=${filename}`, {
      method: 'POST',
      body: file,
    });

    const newBlob = await response.json();
    setBlob(newBlob);
    setVideoUrl(newBlob.url);
  };

  return (
    <div className={styles.cateringContainer}>
              <div className={styles.cateringContent}>
        <h2 className={styles.cateringTitle}>Catering Services</h2>
        <p className={styles.cateringDescription}>
          Elevate your event with The Baja Shrimp's catering services. We bring the vibrant flavors of Baja-style cuisine to your special occasions. From concerts, festivals, corporate events, to weddings and family gatherings... our team ensures a memorable dining experience with our fresh, gourmet tacos, ceviche, and refreshing aguas frescas.
        </p>
        <p></p>
        <p className={styles.servingTitle}>Proudly serving</p>
        <p className={styles.servingAreas}>Los Angeles County · Orange County · San Diego County · Riverside County · San Bernardino County</p>
        <button className={styles.cateringButton} onClick={() => setIsCateringOpen(true)}>
          Request Catering
        </button>
      </div>
      <div className={styles.videoWrapper}>
        <video ref={videoRef} className={styles.cateringVideo} autoPlay loop muted playsInline>
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
          Your browser does not support the video tag.
          <Image src="/images/catering/fallback_image.jpg" alt="Catering video fallback" width={800} height={600} />
        </video>
      </div>
      <Catering isOpen={isCateringOpen} onClose={() => setIsCateringOpen(false)} />
    </div>
  );
};

export default Hero3_Catering;