import React from "react";
import "./Portfolio.css";
import portfoliodata from "../../data/portfoliodata";
import ScrollAnimation from 'react-animate-on-scroll';
import portfoliofrontend from "../../data/portfoliofrontend";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";


function Portfolio() {
  return (
    <div>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <p className="titre-portfolio">Projets avec la Wild Code School</p>
      </ScrollAnimation>
      {portfoliodata.map((data) => 
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <div className="portfolio-card">
      <a href={data.lien} target="_blank" rel="noreferrer">
      <img className="img-portfolio" src={data.image} alt={data.image} />
      </a>
      <p className="text-portfolio">{data.description}</p>
      </div>
      </ScrollAnimation>
      )}
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <p className="titre-portfolio">Projets persos et <br/> "Frontend Mentor"</p>
      </ScrollAnimation>
      {portfoliofrontend.map((data) => 
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
      <div className="portfolio-card">
      <a href={data.lien} target="_blank" rel="noreferrer">
      <img className="img-portfolio" src={data.image} alt={data.image} />
      </a>
      <p className="text-portfoliofront">{data.description}</p>
      </div>
      </ScrollAnimation>
      )}
      <ScrollToTop />
    </div>
  )
}

export default Portfolio;