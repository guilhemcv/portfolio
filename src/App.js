import './App.css';
import React from 'react';
import { Accueil } from './container/Accueil/Accueil';
import { About } from './container/About/About';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import { Cv } from './container/cv.jsx/Cv';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/cv" element = {<Cv />} />
      <Route exact path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
