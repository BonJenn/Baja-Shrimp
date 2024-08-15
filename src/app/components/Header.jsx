import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToMenu = (e) => {
        e.preventDefault();
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/baja_shrimp_logo.png" alt="The Baja Shrimp Logo" />
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu" onClick={scrollToMenu}>Menu</a></li>
                    <li><a href="#catering">Catering</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </header>
    );
};

export default Header;