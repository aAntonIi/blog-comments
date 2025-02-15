import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Polityka Prywatności</h1>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>1. Informacje ogólne</h2>
                <p className={styles.text}>
                    Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług serwisu Te Podróże.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>2. Dane osobowe</h2>
                <p className={styles.text}>
                    Administratorem danych osobowych jest Te Podróże z siedzibą w [adres]. Dane osobowe są przetwarzane w celu świadczenia usług, a także w celach marketingowych i statystycznych.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>3. Pliki cookies</h2>
                <p className={styles.text}>
                    Serwis Te Podróże korzysta z plików cookies, które są zapisywane na urządzeniu Użytkownika. Pliki cookies służą do poprawy funkcjonalności strony oraz zbierania danych statystycznych.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>4. Prawa Użytkownika</h2>
                <p className={styles.text}>
                    Użytkownik ma prawo dostępu do swoich danych, ich poprawiania, usunięcia lub ograniczenia przetwarzania. Można również wnioskować o przeniesienie danych lub wnosić sprzeciw wobec ich przetwarzania.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>5. Kontakt</h2>
                <p className={styles.text}>
                    W sprawach związanych z ochroną danych osobowych można kontaktować się pod adresem e-mail: <a href="mailto:privacy@tepodroze.pl">privacy@tepodroze.pl</a>.
                </p>
            </section>
        </div>
    );
};

export default Privacy;