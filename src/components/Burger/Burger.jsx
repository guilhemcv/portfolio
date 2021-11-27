import React from 'react';
import "./Burger.css";

export function Burger() {
  return (
    <div className="burger">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>Home</li>
            <li>A propos de moi</li>
            <li>Mon CV</li>
            <li>Mon Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
