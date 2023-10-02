import React from 'react';
import './Card.css';

const Card = ({ slogan, description, image }) => {
  return (
    <div className='my-body2'>
    <div className="card">
      <div className="card-content">
        <div className="image-container">
          <img src={image} alt={slogan} />
          <div className="overlay">
            <h3>{slogan}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
