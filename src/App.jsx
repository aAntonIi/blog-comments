import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Article from './pages/Article';
import NotFound from './pages/NotFound'; // Import komponentu NotFound

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="*" element={<NotFound />} /> {/* Trasa dla strony 404 */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;