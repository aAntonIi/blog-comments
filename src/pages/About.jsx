import React from 'react';
import styles from './About.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import ikon social media

const About = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>O mnie</h1>

            {/* Zdjęcie profilowe */}
            <div className={styles.profileImageContainer}>

            <img
                src="/images/profile.jpg" // Ścieżka do zdjęcia
                alt="Moje zdjęcie profilowe"
                className={styles.profileImage}
            />
            </div>

            {/* Opis */}
            <p className={styles.description}>
                Cześć! Nazywam się Antoni i uwielbiam podróżować. Na tej stronie dzielę się
                swoimi doświadczeniami z podróży po różnych zakątkach świata. Moim celem jest
                inspirowanie innych do odkrywania nowych miejsc i przeżywania niezapomnianych
                przygód.
            </p>

            {/* Linki do social media */}
            <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/antoni.ambroz.31" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/__aantek_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles.icon} />
                </a>
            </div>
        </div>
    );
};

export default About;