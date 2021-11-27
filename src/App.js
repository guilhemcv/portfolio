import './App.css';
import React from 'react';
import { Accueil } from './container/Accueil/Accueil';
import { About } from './container/About/About';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
