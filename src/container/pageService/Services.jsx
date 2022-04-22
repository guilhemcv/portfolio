import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Services.css';
import project from '../../assets/images/projection.png';
import application from '../../assets/images/application-mobile.png';
import integration from '../../assets/images/lintegration.png';

export const Services = () => {
  return (
    <div className="services">
        <h1 className="titre-services">Mes services</h1>
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
        <div>
          <h2 className="sous-titre-services">Situé entre Nantes, Cholet et la Roche sur Yon, je peux réaliser votre application web de A à Z en accord avec votre projet :
          </h2>
          <div className="tab-services">
            <ul className="listing">
              <li>Analyse de vos besoins.</li>
              <li>Spécifications techniques.</li>
              <li>Maquette.</li>
              <li>Codage.</li>
              <li>Tests en plateforme.</li>
              <li>Installation et mise en production.</li>
              <li>Formation et suivi.</li>
            </ul>
            <img src={project} alt="project" className="projection" />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>

      <div>
        <h2 className="sous-titre-services">
          Application entièrement réalisée selon vos besoins :
        </h2>
        <div className="tab-services">
          <ul className="listing">
            <li>Application en version Bureau et/ou Mobile.</li>
            <li>Ajout d'une ou plusieurs bases de données.</li>
            <li>Authentification utilisateur et/ou administrateur.</li>
            <li>Optimisation SEO pour les moteurs de recherche.</li>
          </ul>
          <img src={application} alt="projection" className="projection" />
        </div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
      <div>
        <h2 className="sous-titre-services">
          Selon le projet, une intégration peut être envisagée :
        </h2>
        <div className="tab-services end">
          <ul className="listing">
            <li>Intégration Wordpress.</li>
            <li>Intégration Shopify.</li>
          </ul>
          <img src={integration} alt="integration" className="projection" />
        </div>
      </div>
      </ScrollAnimation>
      <div className="copyright">
        <p className="copy">
          Copyright © 2021 - 2022 / Guilhem Seyvet - Développeur web{' '}
        </p>
        <a href="mentions.html" target="_blank">
          Mentions Légales
        </a>
      </div>
    </div>
  );
};
