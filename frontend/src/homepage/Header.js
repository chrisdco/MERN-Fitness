import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="left-section">
          <h1 >Workout Lightwork</h1>
        </div>
        <div className="right-section">
          <button className="button">Login</button>
          <button className="button">Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Header;