import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Catering from './Catering';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCateringOpen, setIsCateringOpen] = useState(false);

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

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
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
                    <li><a href="#" onClick={() => setIsCateringOpen(true)}>Catering</a></li>
                    <li><a href="#contact" onClick={scrollToContact}>Contact</a></li>
                </ul>
            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <Catering isOpen={isCateringOpen} onClose={() => setIsCateringOpen(false)} />
        </header>
    );
};

export default Header;