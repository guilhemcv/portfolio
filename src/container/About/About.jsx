import React from "react";
import "./About.css";
import idea from "../../assets/images/idea.png";

export function About() {
  return (
    <div className="about">
      <h1 className="about-titre">A Propos</h1>
      <div className="cercle"><img className="logo-cercle" src={idea} alt={idea} /></div>
    </div>
  )
}