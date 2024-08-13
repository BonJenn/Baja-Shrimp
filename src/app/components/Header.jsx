import React from 'react';
import styles from '../styles/Header.module.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/baja_shrimp_logo.png" alt="The Baja Shrimp Logo" />
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#catering">Catering</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;