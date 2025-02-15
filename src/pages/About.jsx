import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>O mnie</h1>
            <p className={styles.description}>
                Cześć! Nazywam się [Twoje Imię] i uwielbiam podróżować. Na tej stronie dzielę się
                swoimi doświadczeniami z podróży po różnych zakątkach świata. Moim celem jest
                inspirowanie innych do odkrywania nowych miejsc i przeżywania niezapomnianych
                przygód.
            </p>
            <div className={styles.details}>
                <h2>Moje ulubione miejsca:</h2>
                <ul>
                    <li>Barcelona, Hiszpania</li>
                    <li>Paryż, Francja</li>
                    <li>Tokio, Japonia</li>
                </ul>
            </div>
        </div>
    );
};

export default About;