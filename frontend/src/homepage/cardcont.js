import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardContainer = () => {
  return (
    <div className="my-cardcontainer">
      <section className="my-info">
        <div>
          <h2>Why Us?</h2>
          <p>
            We're your ultimate fitness destination, driven by a passion to help you reach your fitness aspirations through effective workouts and a dedication to a healthy lifestyle.
          </p>
          <p>Join us on this exhilarating fitness adventure and unlock your potential!</p>
        </div>
        <div className="my-sliding-images">
          <img src="https://plus.unsplash.com/premium_photo-1666736568166-526adac23603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80.jpg" alt="Image 1" />
          <img src="https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80.jpg" alt="Image 2" />
          <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80.jpg" alt="Image 3" />
        </div>
      </section>
    </div>
  );
};

export default CardContainer;