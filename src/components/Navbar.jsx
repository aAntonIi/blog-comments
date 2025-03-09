import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stan do otwierania/zamykania menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.title}>Te Podróże</Link>

            {/* Przycisk hamburgera */}
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menu */}
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                <li><Link to="/" onClick={toggleMenu}><FaHome className={styles.icon} /> Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}><FaUser className={styles.icon} /> O mnie</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}><FaEnvelope className={styles.icon} /> Kontakt</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;