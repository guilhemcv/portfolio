import React from "react";
import "./About.css";
import idea from "../../assets/images/idea.png";

export function About() {
  return (
    <div className="about">
      <p className="about-titre">A PROPOS</p>
      <div className="cercle"><img className="logo-cercle" src={idea} alt={idea} /></div>
    </div>
  )
}