import React from 'react';
import './Portfolio.css';
import '../Portfolio/Portfolio.css';
import portfoliodata from '../../data/portfoliodata';
import ScrollAnimation from 'react-animate-on-scroll';
import portfoliofrontend from '../../data/portfoliofrontend';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import portfoliopro from '../../data/portfoliopro';

function Portfolio() {
  return (
    <div>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <p className="titre-portfolio">Projets personnels et professionnels</p>
      </ScrollAnimation>
      {portfoliopro.map((data) => (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="portfolio-card">
            <a href={data.lien} target="_blank" rel="noreferrer">
              <img
                className="img-portfolio"
                src={data.image}
                alt={data.image}
              />
            </a>
            <p className="text-portfolio">{data.description}</p>
            <ul className="technoul">
              <li className={data.technos1 ? "techno" : "techno0"}>{data.technos1}</li>
              <li className={data.technos2 ? "techno" : "techno0"}>{data.technos2}</li>
              <li className={data.technos3 ? "techno" : "techno0"}>{data.technos3}</li>
              <li className={data.technos4 ? "techno" : "techno0"}>{data.technos4}</li>
              <li className={data.technos5 ? "techno" : "techno0"}>{data.technos5 ? data.technos5 : ""}</li>
            </ul>
            <p className="text-portfolio2">
              Repo Github :{' '}
              <a
                className="linkgithub"
                href={data.github}
                target="_blank"
                rel="noreferrer"
              >
                Visiter
              </a>
            </p>
          </div>
        </ScrollAnimation>
      ))}
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <p className="titre-portfolio">Projets avec la Wild Code School</p>
      </ScrollAnimation>
      {portfoliodata.map((data) => (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="portfolio-card">
            <a href={data.lien} target="_blank" rel="noreferrer">
              <img
                className="img-portfolio"
                src={data.image}
                alt={data.image}
              />
            </a>
            <p className="text-portfolio-date">{data.date}</p>
            <p className="text-portfolio">{data.description}</p>
            <p className="text-portfolio">
              Projet réalisé en {data.duree} dans une équipe de {data.personnes}{' '}
              personne(s).
            </p>
            <ul className="technoul">
              <li className={data.technos1 ? "techno" : "techno0"}>{data.technos1}</li>
              <li className={data.technos2 ? "techno" : "techno0"}>{data.technos2}</li>
              <li className={data.technos3 ? "techno" : "techno0"}>{data.technos3}</li>
              <li className={data.technos4 ? "techno" : "techno0"}>{data.technos4}</li>
              <li className={data.technos5 ? "techno" : "techno0"}>{data.technos5 ? data.technos5 : ""}</li>
            </ul>
            <p className="text-portfolio2">
              Repo Github :{' '}
              <a
                className="linkgithub"
                href={data.github}
                target="_blank"
                rel="noreferrer"
              >
                Visiter
              </a>
            </p>
          </div>
        </ScrollAnimation>
      ))}
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <p className="titre-portfolio">Side Projects Wild Code School</p>
      </ScrollAnimation>
      {portfoliofrontend.map((data) => (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
          <div className="portfolio-card">
            <a href={data.lien} target="_blank" rel="noreferrer">
              <img
                className="img-portfolio"
                src={data.image}
                alt={data.image}
              />
            </a>
            <p className="text-portfoliofront">{data.description}</p>
          </div>
        </ScrollAnimation>
      ))}
      <ScrollToTop />
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
}

export default Portfolio;
