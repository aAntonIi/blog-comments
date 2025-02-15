import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.title}>Te Podróże</h1>
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">O mnie</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;