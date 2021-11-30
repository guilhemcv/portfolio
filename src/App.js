import './App.css';
import React from 'react';
import { Accueil } from './container/Accueil/Accueil';
import { About } from './container/About/About';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import { Cv } from './container/cv.jsx/Cv';
import Contact from './container/Contact/Contact';
import Portfolio from './container/Portfolio/Portfolio';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/cv" element = {<Cv />} />
      <Route path="/portfolio" element = {<Portfolio />} />
      <Route path="/contact" element = {<Contact />} />
      <Route exact path="/" element={<Accueil />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
