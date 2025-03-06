import React, { useRef, useEffect } from 'react';
import { Map, View, Overlay } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import 'ol/ol.css';
import styles from './Map.module.css';
import { useNavigate } from 'react-router-dom';

const MapComponent = ({ articles }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([19, 52]), // Centrum mapy (Polska)
                zoom: 5,
            }),
            controls: defaultControls().extend([]),
        });

        mapInstance.current = map;

        articles.forEach((article) => {
            // Tworzymy element markera (tylko nazwa miasta)
            const markerElement = document.createElement('div');
            markerElement.className = styles.marker;
            markerElement.innerHTML = `<span>${article.title}</span>`;

            // Tworzymy element popupu (rozwinięte okienko)
            const popupElement = document.createElement('div');
            popupElement.className = styles.popup;
            popupElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <button class="${styles.readMoreButton}">Czytaj dalej</button>
                <button class="${styles.closeButton}">×</button>
            `;

            // Overlay dla markera (tylko nazwa miasta)
            const markerOverlay = new Overlay({
                position: fromLonLat(article.lngLat),
                element: markerElement,
                positioning: 'bottom-center',
                offset: [0, -20],
            });

            // Overlay dla popupu (rozwinięte okienko)
            const popupOverlay = new Overlay({
                position: fromLonLat(article.lngLat),
                element: popupElement,
                positioning: 'bottom-center',
                offset: [0, -20],
            });

            // Ukryj popup domyślnie
            popupOverlay.setPosition(undefined);

            // Obsługa kliknięcia na marker (nazwa miasta)
            markerElement.addEventListener('click', () => {
                // Pokaż popup dla tego markera
                popupOverlay.setPosition(fromLonLat(article.lngLat));
                // Przesuń marker w dół, aby nie zasłaniał popupu
                markerOverlay.setOffset([0, -50]);
                // Wyśrodkuj mapę na markerze
                map.getView().setCenter(fromLonLat(article.lngLat));
                map.getView().setZoom(8);
            });

            // Obsługa kliknięcia przycisku "Czytaj dalej"
            popupElement.querySelector(`.${styles.readMoreButton}`).addEventListener('click', () => {
                navigate(`/article/${article.id}`);
            });

            // Obsługa kliknięcia przycisku zamknięcia (×)
            popupElement.querySelector(`.${styles.closeButton}`).addEventListener('click', () => {
                // Ukryj popup
                popupOverlay.setPosition(undefined);
                // Przywróć marker na pierwotną pozycję
                markerOverlay.setOffset([0, -20]);
            });

            // Dodaj oba overlay do mapy
            map.addOverlay(markerOverlay);
            map.addOverlay(popupOverlay);
        });

        // Sprzątanie po komponencie
        return () => map.setTarget(null);
    }, [articles, navigate]);

    return <div ref={mapRef} className={styles.mapContainer} />;
};

export default MapComponent;