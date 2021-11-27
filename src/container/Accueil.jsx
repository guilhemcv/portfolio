import React from 'react';
import { Header } from '../components/Header/Header';
import './Accueil.css';

export function Accueil() {
  return (
    <div className="accueil">
      <Header />
      <div className="accueil-presentation">
        <h1 className="accueil-nom tracking-in-contract">Hello, I'm Guilhem SEYVET <br /> I'm a full-stack web developer</h1>
      </div>
    </div>
  );
}
