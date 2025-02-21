import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.title}>Te Podróże</Link>
            <ul className={styles.navLinks}>
                <li><Link to="/"><FaHome className={styles.icon} /> Home</Link></li>
                <li><Link to="/about"><FaUser className={styles.icon} /> O mnie</Link></li>
                <li><Link to="/contact"><FaEnvelope className={styles.icon} /> Kontakt</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;