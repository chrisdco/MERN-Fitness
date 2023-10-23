import React, { useEffect } from 'react';
import Logo2 from '../assets/images/Logo(2).png';
import '../css/everhover.css'

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

const randomString = (length) =>
  Array.from({ length }, () => randomChar()).join('');

const CardEvervault = () => {
  useEffect(() => {
    const card = document.querySelector('.card');
    const letters = card.querySelector('.card-letters');

    const handleOnMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      letters.style.setProperty('--x', `${x}px`);
      letters.style.setProperty('--y', `${y}px`);

      letters.innerText = randomString(1500);
    };

    card.onmousemove = (e) => handleOnMove(e);

    card.ontouchmove = (e) => handleOnMove(e.touches[0]);

    return () => {
      card.onmousemove = null;
      card.ontouchmove = null;
    };
  }, []);

  return (
    <div className="card-track">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={Logo2} alt="Card" />
          </div>
          <div className="card-gradient"></div>
          <div className="card-letters"></div>
        </div>
        <div className="card-corners">
          {[...Array(4)].map((_, index) => (
            <span className="card-corner" key={index}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardEvervault;
