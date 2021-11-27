import React from 'react';
import { Header } from '../components/Header/Header';
import './Accueil.css';

export function Accueil() {
  return (
    <div className="accueil">
      <Header />
      <div className="accueil-presentation">
        <h1 className="accueil-nom tracking-in-contract">
          Bonjour,
          <span className="accueil-statut">
            {' '}
            Je m'appelle Guilhem SEYVET
            <br />
            <br /> Je suis un développeur web full-stack
          </span>
        </h1>
      </div>
      <button type="button" className="accueil-bouton">Plus d'informations</button>
    </div>
  );
}
