import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Film from './components/Film/Film';
import Commercials from './components/Commercials/Commercials';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
      <Footer /> 
    </main>
  );
}

export default App;
