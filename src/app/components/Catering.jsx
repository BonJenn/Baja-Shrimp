import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/Catering.module.css';

const Catering = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("mdkndbyv"); // Replace with your Formspree endpoint
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  if (state.succeeded) {
    return (
      <div className={styles.modal}>
        <div className={`${styles.modalContent} ${styles.successContent}`}>
          <h2 className={styles.formTitle}>Thank You!</h2>
          <p className={styles.successMessage}>Your catering request has been submitted. We'll get back to you shortly.</p>
          <button className={styles.closeButton} onClick={onClose}>&times;</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.formTitle}>Catering Request</h2>
        <form onSubmit={handleSubmit} className={styles.cateringForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Telephone Number:</label>
            <input id="phone" type="tel" name="phone" required />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Event Date:</label>
            <input 
              id="date" 
              type="date" 
              name="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
            <ValidationError prefix="Date" field="date" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="location">Event Location:</label>
            <input id="location" type="text" name="location" required />
            <ValidationError prefix="Location" field="location" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="guests">Number of Guests:</label>
            <input id="guests" type="number" name="guests" min="1" required />
            <ValidationError prefix="Guests" field="guests" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label>Catering Style:</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="cateringStyle"
                  value="foodTruck"
                  required
                />
                <span>Food Truck</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="cateringStyle"
                  value="buffet"
                  required
                />
                <span>Buffet-style</span>
              </label>
            </div>
            <ValidationError prefix="Catering Style" field="cateringStyle" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="time">Serving Time Expected:</label>
            <input 
              id="time" 
              type="time" 
              name="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              required 
            />
            <ValidationError prefix="Time" field="time" errors={state.errors} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="notes">Additional Notes:</label>
            <textarea id="notes" name="notes" />
            <ValidationError prefix="Notes" field="notes" errors={state.errors} />
          </div>
          <button type="submit" disabled={state.submitting} className={styles.submitButton}>
            Submit Request
          </button>
        </form>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default Catering;