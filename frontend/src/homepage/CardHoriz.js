import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardHoriz = () => {
  return (
    <section className="my-workout-routines" style={{ marginTop: '30px' }}>
      <h2 className="carousel-heading">Types</h2>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-3">
            <div className="my-workout-card">
              <img src="https://www.health.com/thmb/8otAZglU9PONAQ_yH_GmWGpzTyI=/500x333/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1336700535-9ef0d2f2dc8d466aa7346d1bfd79aa98.jpg" alt="Workout 1" />
              <h3>Cardio Blast</h3>
              <p>A high-intensity cardio workout to get your heart pumping and calories burning.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="my-workout-card">
              <img src="https://aminoco.com/cdn/shop/articles/FeaturedImage_StrengthTraining.jpg?v=1593102095" alt="Workout 2" />
              <h3>Strength Training</h3>
              <p>Build muscle and increase strength with this effective strength training routine.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="my-workout-card">
              <img src="https://th.bing.com/th/id/OIP.0w55Vzr8NidcZgKOC1UCiAHaE8?pid=ImgDet&rs=1" alt="Workout 3" />
              <h3>Yoga Flow</h3>
              <p>Relax and rejuvenate with this calming yoga routine.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="my-workout-card">
              <img src="https://www.welcometotheonepercent.com/wp-content/uploads/2017/09/HIIT2.png" alt="Workout 4" />
              <h3>HIIT Workout</h3>
              <p>High-Intensity Interval Training for maximum calorie burn.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHoriz;