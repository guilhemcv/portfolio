import React from 'react';
import './About.css';
import Polygon from '../../components/Polygon/Polygon';
import Softskill from '../../data/softskill';

export function About() {
  return (
    <div className="about">
      <p className="about-titre">A PROPOS</p>
      <p className="softskills">Soft Skills</p>
      <div className="skills">
        {Softskill.map((skill) => (
          <Polygon skill={skill} />
        ))}
      </div>
    </div>
  );
}
