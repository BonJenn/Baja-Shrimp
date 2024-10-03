import React, { useState } from 'react';
import styles from '../styles/EmailSubscribers.module.css';

const EmailSubscribers = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || 'Thank you for subscribing!');
        setFirstName('');
        setLastName('');
        setEmail('');
      } else {
        const data = await response.json();
        setMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.subscribeContainer}>
      <h2 className={styles.subscribeTitle}>Keep in touch!</h2>
      <h3 className={styles.subscribeInfo}>Subscribe for location updates, discounts, and more!</h3>
      <form onSubmit={handleSubmit} className={styles.subscribeForm}>
        <div className={styles.nameInputs}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
            className={styles.inputField}
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
            className={styles.inputField}
          />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default EmailSubscribers;