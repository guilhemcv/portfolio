import React from 'react';
import "./Burger.css";

export function Burger() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li>Contact</li>
            <li>Show me more</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
