import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import teamwork from '../../assets/images/teamwork.png';
import './Polygon.css';

function Polygon({ skill }) {
  return (
    <div className="polygon-component">
      <ScrollAnimation animateIn='animate__zoomIn' animateOnce={true}>
      <img className="polygon" src={skill.image} alt={skill.image} />
      <p className="polygon-descri">{skill.texte}</p>
      </ScrollAnimation>
    </div>
  );
}

export default Polygon;
