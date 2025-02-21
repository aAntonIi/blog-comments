import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dziękujemy, ${formData.name}! Twoja wiadomość została wysłana.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Kontakt</h1>
            <div className={styles.contactInfo}>
                <p>Email: <a href="mailto:kontakt@tepodroze.pl">kontakt@tepodroze.pl</a></p>
                <p>Telefon: +48 123 456 789</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Imię:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Wiadomość:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Wyślij</button>
            </form>
        </div>
    );
};

export default Contact;