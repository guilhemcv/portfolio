import React from 'react';
import teamwork from '../../assets/images/teamwork.png';
import './Polygon.css';

function Polygon({ skill }) {
  return (
    <div className="polygon-component">
      <img className="polygon" src={skill.image} alt={skill.image} />
      <p className="polygon-descri">{skill.texte}</p>
    </div>
  );
}

export default Polygon;
