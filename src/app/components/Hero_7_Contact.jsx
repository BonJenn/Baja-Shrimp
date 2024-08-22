import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/Hero_7_Contact.module.css';

const Hero7_Contact = () => {
  const [state, handleSubmit] = useForm("mvgpqlzv");

  if (state.succeeded) {
    return (
      <div id="contact" className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <p className={styles.successMessage}>Thanks for your message! We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div id="contact" className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text" 
            name="name"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email" 
            name="email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text" 
            name="subject"
            required
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting} className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Hero7_Contact;