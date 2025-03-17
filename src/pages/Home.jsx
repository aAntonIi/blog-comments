import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
import Newsletter from '../components/Newsletter';
import styles from './Home.module.css';


const articles = [
    {
        id: 1,
        title: "Barcelona",
        excerpt: "Odkryj piękno Barcelony, od słynnej Sagrady Familii po tętniące życiem plaże Barcelonety.",
        image: "/public/images/barcelona/barcelonaM.jpg",
        lngLat: [2.15899, 41.38879], // Współrzędne Barcelony
    },
    {
        id: 2,
        title: "Paryż",
        excerpt: "Romantyczny weekend w stolicy Francji. Odwiedź Luwr, Wieżę Eiffla i Pola Elizejskie.",
        image: "/public/images/paris/parisM.jpg",
        lngLat: [2.3522, 48.8566], // Współrzędne Paryża
    },
    {
        id: 3,
        title: "Kraków",
        excerpt: "Poznaj magiczne miejsca Krakowa, takie jak Rynek Główny, Wawel i Kazimierz.",
        image: "/public/images/krakow/krakowM.jpg",
        lngLat: [19.9450, 50.0647], // Współrzędne Krakowa
    },
    {
        id: 4,
        title: "Zakopane",
        excerpt: "Odkryj uroki Zakopanego, od Gubałówki po Krupówki. Idealne miejsce na zimowy wypoczynek.",
        image: "/public/images/zakopane/zakopaneM.jpg",
        lngLat: [19.9489, 49.2992], // Współrzędne Zakopanego
    },
    {
        id: 5,
        title: "Wrocław",
        excerpt: "Poznaj Wrocław, miasto mostów, krasnali i pięknej architektury. Odwiedź Rynek i Ostrów Tumski.",
        image: "/public/images/wroclaw/wroclawM.jpg",
        lngLat: [17.0385, 51.1079], // Współrzędne Wrocławia
    },
];


const Home = () => {
    const [layout, setLayout] = useState('grid'); // Domyślny układ: siatka

    return (
        <div className={styles.page}>
            <h1 className={styles.mainTitle}>Najnowsze artykuły</h1>

            {/* Przyciski do zmiany układu */}
            <div className={styles.layoutButtons}>

                <button
                    onClick={() => setLayout('list')}
                    className={`${styles.layoutButton} ${layout === 'list' ? styles.active : ''}`}
                >
                    Lista
                </button>
                <button
                    onClick={() => setLayout('grid')}
                    className={`${styles.layoutButton} ${layout === 'grid' ? styles.active : ''}`}
                >
                    Siatka
                </button>
            </div>

            {/* Kontener dla artykułów */}
            <div className={`${styles.articlesContainer} ${styles[layout]}`}>
                {articles.map((article) => (
                    <div key={article.id} className={`${styles.article} ${styles[layout]}`}>
                        <img src={article.image} alt={article.title} className={styles.articleImage} />
                        <div className={styles.articleContent}>
                            <h2 className={styles.articleTitle}>{article.title}</h2>
                            <p className={styles.articleExcerpt}>{article.excerpt}</p>
                            <Link to={`/article/${article.id}`} className={styles.readMore}>Czytaj więcej</Link>
                        </div>
                    </div>
                ))}
            </div>

            <Map articles={articles} />
            <Newsletter />
        </div>
    );
};

export default Home;