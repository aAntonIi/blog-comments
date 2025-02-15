import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <h3>Te Podróże</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">O mnie</a></li>
                        <li><a href="/contact">Kontakt</a></li>
                        <li><a href="/privacy">Polityka prywatności</a></li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <h3>Śledź nas</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" aria-label="Facebook">
                            <FaFacebook className={styles.icon} />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                            <FaInstagram className={styles.icon} />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter">
                            <FaTwitter className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Te Podróże. Wszystkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
};

export default Footer;