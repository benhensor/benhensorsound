import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Film from './components/Film/Film';
import FilmPlayer from './components/FilmPlayer/FilmPlayer';
import Commercials from './components/Commercials/Commercials';
import CommercialsPlayer from './components/CommercialsPlayer/CommercialsPlayer';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <div className="app-content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/film" element={<Film />} />
        <Route exact path="/film-player" element={<FilmPlayer />} />
        <Route exact path="/commercials" element={<Commercials />} />
        <Route exact path="/commercials-player" element={<CommercialsPlayer />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes> 
      </div>
      <Footer /> 
    </main>
  );
}

export default App;
