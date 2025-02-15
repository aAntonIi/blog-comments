import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Map'; // Importuj Map
import styles from './Home.module.css';

const articles = [
    {
        id: 1,
        title: "Barcelona",
        excerpt: "Odkryj piękno Barcelony, od słynnej Sagrady Familii po tętniące życiem plaże Barcelonety.",
        image: "https://img.freepik.com/darmowe-zdjecie/panoramiczny-widok-z-lotu-ptaka-barcelony_628469-352.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
        lngLat: [2.15899, 41.38879], // Współrzędne Barcelony
    },
    {
        id: 2,
        title: "Paryż",
        excerpt: "Romantyczny weekend w stolicy Francji. Odwiedź Luwr, Wieżę Eiffla i Pola Elizejskie.",
        image: "https://img.freepik.com/darmowe-zdjecie/zdjecia-poklatkowe-arch-de-triumph-w-nocy_395237-232.jpg?t=st=1738970384~exp=1738973984~hmac=d42a434da48e9b6b5dbd3a24cc64d572dcb39985185982fca2e3d0776285166d&w=1380",
        lngLat: [2.3522, 48.8566], // Współrzędne Paryża
    },
    {
        id: 3,
        title: "Kraków",
        excerpt: "Poznaj magiczne miejsca Krakowa, takie jak Rynek Główny, Wawel i Kazimierz.",
        image: "https://img.freepik.com/darmowe-zdjecie/sloneczny-dzien-na-placu-europejskiego-miasta-z-historycznymi-budynkami-swiatlami-ulicznymi-i-brukowanymi-kamieniami_9975-33161.jpg?t=st=1738967972~exp=1738971572~hmac=56dbdf749d5a7816997482c307b1be277d4fef99817918a890c44adf1f1393d0&w=1800",
        lngLat: [19.9450, 50.0647], // Współrzędne Krakowa
    },
    {
        id: 4,
        title: "Zakopane",
        excerpt: "Odkryj uroki Zakopanego, od Gubałówki po Krupówki. Idealne miejsce na zimowy wypoczynek.",
        image: "https://img.freepik.com/darmowe-zdjecie/widok-na-gory-zakopane_1398-3460.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
        lngLat: [19.9489, 49.2992], // Współrzędne Zakopanego
    },
    {
        id: 5,
        title: "Wrocław",
        excerpt: "Poznaj Wrocław, miasto mostów, krasnali i pięknej architektury. Odwiedź Rynek i Ostrów Tumski.",
        image: "https://img.freepik.com/darmowe-zdjecie/wroclaw-rynek_1398-3461.jpg?t=st=1738970426~exp=1738974026~hmac=f11b22c00749bcc2235a5888c13a9a180c683923441c74a5fdb0dee2b81483ae&w=1380",
        lngLat: [17.0385, 51.1079], // Współrzędne Wrocławia
    },
];

const Home = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.mainTitle}>Najnowsze artykuły</h1>
            {articles.map((article) => (
                <div key={article.id} className={styles.article}>
                    <img src={article.image} alt={article.title} className={styles.articleImage} />
                    <div className={styles.articleContent}>
                        <h2 className={styles.articleTitle}>{article.title}</h2>
                        <p className={styles.articleExcerpt}>{article.excerpt}</p>
                        <Link to={`/article/${article.id}`} className={styles.readMore}>Czytaj więcej</Link>
                    </div>
                </div>
            ))}
            <Map articles={articles} /> {/* Przekaż artykuły do Map */}
        </div>
    );
};

export default Home;