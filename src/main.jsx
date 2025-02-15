import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css'; // Zmień na istniejący plik CSS

// Tworzenie roota i renderowanie aplikacji
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);