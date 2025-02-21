import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>404 - Strona nie znaleziona</h1>
            <p className={styles.description}>
                Przepraszamy, ale strona, której szukasz, nie istnieje.
            </p>
            <Link to="/" className={styles.homeLink}>Wróć do strony głównej</Link>
        </div>
    );
};

export default NotFound;