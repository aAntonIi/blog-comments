import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Prosta walidacja e-mail
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Proszę podać adres e-mail.');
            setSuccess('');
            return;
        }

        if (!validateEmail(email)) {
            setError('Proszę podać poprawny adres e-mail.');
            setSuccess('');
            return;
        }

        // Symulacja wysłania formularza
        setError('');
        setSuccess(`Dziękujemy za zapisanie się na newsletter, ${email}!`);
        setEmail('');
    };

    return (
        <div className={styles.newsletter}>
            <h2 className={styles.title}>Zapisz się na newsletter</h2>
            <p className={styles.description}>
                Bądź na bieżąco z najnowszymi artykułami i inspiracjami podróżniczymi!
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="email"
                    placeholder="Twój email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Zapisz się</button>
            </form>
            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}
        </div>
    );
};

export default Newsletter;