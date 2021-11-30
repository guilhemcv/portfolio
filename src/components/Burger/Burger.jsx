import React from 'react';
import './Burger.css';
import { Link } from 'react-router-dom';
function Burger() {
  const [isChecked, setIsChecked] = React.useState('');
  function handleIsChecked() {
    if (isChecked === '') {
      setIsChecked('checked');
    } else {
      setIsChecked('');
    }
  }

  return (
    <div className="burger">
      <nav role="navigation">
        <div id="menuToggle" onClick={handleIsChecked}>
          <input type="checkbox" checked={isChecked} readOnly={true} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/" onClick={handleIsChecked}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleIsChecked}>A propos de moi</Link>
            </li>
            <li>
              <Link to="/cv" onClick={handleIsChecked}>Mon CV</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleIsChecked}>Me contacter</Link>
            </li>
            <li>Mon Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Burger;
