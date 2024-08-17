import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';
import Catering from './Catering';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCateringOpen, setIsCateringOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const scrollToMenu = (e) => {
        e.preventDefault();
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu();
    };

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu();
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/images/baja_shrimp_logo.png" alt="The Baja Shrimp Logo" />
            </div>
            <nav ref={menuRef} className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#menu" onClick={scrollToMenu}>Menu</a></li>
                    <li><a href="#" onClick={() => { setIsCateringOpen(true); closeMenu(); }}>Catering</a></li>
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