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
                center: fromLonLat([19, 52]),
                zoom: 5,
            }),
            controls: defaultControls().extend([]),
        });

        mapInstance.current = map;

        articles.forEach((article) => {
            const markerElement = document.createElement('div');
            markerElement.className = styles.marker;
            markerElement.innerHTML = `<span>${article.title}</span>`;

            const popupElement = document.createElement('div');
            popupElement.className = styles.popup;
            popupElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <button class="${styles.readMoreButton}">Czytaj dalej</button>
                <button class="${styles.closeButton}">×</button>
            `;

            const markerOverlay = new Overlay({
                position: fromLonLat(article.lngLat),
                element: markerElement,
                positioning: 'bottom-center',
                offset: [0, -20],
            });

            const popupOverlay = new Overlay({
                position: fromLonLat(article.lngLat),
                element: popupElement,
                positioning: 'bottom-center',
                offset: [0, -20],
            });

            markerElement.addEventListener('click', () => {
                popupOverlay.setPosition(fromLonLat(article.lngLat));
                map.getView().setCenter(fromLonLat(article.lngLat));
                map.getView().setZoom(8);
            });

            popupElement.querySelector(`.${styles.readMoreButton}`).addEventListener('click', () => {
                navigate(`/article/${article.id}`);
            });

            popupElement.querySelector(`.${styles.closeButton}`).addEventListener('click', () => {
                popupOverlay.setPosition(undefined);
            });

            map.addOverlay(markerOverlay);
            map.addOverlay(popupOverlay);
        });

        return () => map.setTarget(null);
    }, [articles, navigate]);

    return <div ref={mapRef} className={styles.mapContainer} />;
};

export default MapComponent;