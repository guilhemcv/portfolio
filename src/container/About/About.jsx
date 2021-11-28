import React from 'react';
import './About.css';
import Polygon from '../../components/Polygon/Polygon';
import Softskill from '../../data/softskill';
import {CircleProgress} from 'react-gradient-progress';

export function About() {
  return (
    <div className="about">
      <div className="about-haut">
      <p className="about-titre scale-in-center2">A PROPOS</p>
      <p className="softskills scale-in-center2">Soft Skills</p>
      <div className="skills scale-in-center">
        {Softskill.map((skill) => (
          <Polygon skill={skill} />
        ))}
      </div>
      </div>
        <p className="softskills">Skills</p>
        <CircleProgress percentage={90} strokeWidth={8} fontColor="white" fontFamily="roboto" fontSize="25px"/>
        <p>HTML / CSS</p>
        <CircleProgress percentage={85} strokeWidth={8} fontColor="white" fontFamily="roboto" fontSize="25px"/>
        <p>React</p>
      </div>
  );
}
