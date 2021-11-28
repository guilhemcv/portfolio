import React from 'react';
import { useNavigate } from "react-router-dom";
import './Accueil.css';

export function Accueil() {
  
    const redirect = useNavigate();

  return (
    <div>
      <div className="accueil">
        <p id="head1" className="header tracking-in-expand-fwd">
          Bonjour, je m'appelle Guilhem SEYVET
        </p>
        <p id="head2" className="header tracking-in-expand-fwd2">
          Je suis développeur web full-stack
        </p>
        <button type="button" className="text-focus-in" onClick={() => redirect("/about")}>Continue</button>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
    </div>
  );
}
