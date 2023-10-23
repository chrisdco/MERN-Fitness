import React, { useEffect, useState } from 'react';
import './Homepage.css';
import WorkoutSlogans from './WorkoutSlogans';
import './Glassmorphism.css';
import { Link } from 'react-router-dom';

import CardHoriz from './CardHoriz';
import CardContainer from './cardcont';


const Homepage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [showBackgroundChange, setShowBackgroundChange] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const infoSection = document.querySelector('.my-info');
      const infoSectionBottom = infoSection.offsetTop + infoSection.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const zoomThreshold = 300;
      setIsZoomed(scrollTop > zoomThreshold);

      if (scrollTop > infoSectionBottom - windowHeight && shouldAnimate) {
        setShouldAnimate(false);
        setShowBackgroundChange(true);
      } else if (scrollTop < infoSectionBottom - windowHeight && !shouldAnimate) {
        setShowBackgroundChange(false);
      }

    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <div className='my-body'>
      {/* Scroll effect Banner */}
      <section className="my-image-section">
        <div className={`my-image-container ${isZoomed ? 'my-zoomed-in' : 'my-zoomed-out'}`}>
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Fitness Image"
            className="my-fitness-image"
          />
          <div className="my-image-overlay">
            <h2>Track, Train, Transform</h2>
            <p>Your Journey to Fitness</p>
          </div>
        </div>
      </section>

      <CardHoriz/> {/* Made types in cards horizontally */}

      <CardContainer/> {/*Why Us? Card Container */}

      {/* Grid of photos morphed into info */}
      <section className="my-cardContainer1" style={{ marginTop: '15%' }}>
        <div className="my-card" style={{ marginBottom: '13%' }}>
        <img src="https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80.jpg" alt="Card Image" />
          <img src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80.jpg" alt="Card Image" />
          <img src='https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80.jpg' alt='Card Image' />
          <img src='https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80.jpg' alt='Card Image' />
          <div className="my-overlayImage">
            <img src="https://media.istockphoto.com/id/619088796/photo/fitness-girl-lifting-dumbbell-in-the-morning.jpg?s=612x612&w=0&k=20&c=m8gUYPVV1ZfWpfjrKjzWn-a8DVHnw1hGp-rjh6c40f0=" alt="Centered Image" />
            <div className="my-overlayText">
              <h3>Various ways to make your day</h3>
              <p>A healthy one</p>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </section>

      {/* Card effect Glassmorphism for Features */}
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '5%' }}>FEATURES</h1>
      <div className='my-widthchk' style={{alignContent:"center",width:"50%", margin:"0 auto"}}>
      <div className="my-container2">
        <div className="my-glass" style={{ '--r': -15 }} data-text="Training">
          <span className="material-symbols-outlined" >
            exercise
          </span>
        </div>
        <div className="my-glass" style={{ '--r': 5 }} data-text="Workout">
          <span className="material-symbols-outlined">
            fitness_center
          </span>
        </div>
        <div className="my-glass" style={{ '--r': 25 }} data-text="Monitor Weight">
          <span className="material-symbols-outlined" >
            monitor_weight_gain
          </span>
        </div>
        <div className="my-glass" style={{ '--r': -15 }} data-text="Self Improvement">
          <span className="material-symbols-outlined">
            self_improvement
          </span>
        </div>
      </div>
      </div>

      {/* Workout ad join card */}
      <div className="container mb-5" >
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-8">
            <div className="card bg-primary text-white shadow-lg p-5 rounded">
                <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src="https://thelatest.modere.eu/wp-content/uploads/2023/04/Copy-of-US_Lean-Body-System_IG_FB_052622-1000-%C3%97-700px-540x700.png" alt="Fitness Icon" style={{borderRadius:"10px"}}/>
                </div>
                <div className="col-md-6 text-center">
                    <h2 className="custom-h2">Bring the gym home</h2>
                    <ul className="list-unstyled">
                    <li className="custom-li">
                        Unlimited access to at-home workouts, bringing the fitness experience to the comfort of your home
                    </li>
                    </ul>
                    <Link className="btn-pink text-white" to="/Login">Join us and log your workouts now</Link>
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>

      {/* Banners at the end of page */}
      <WorkoutSlogans />

      {/* <div className={showBackgroundChange ? 'my-change-bg-color' : ''}></div> */}
      
    </div>
  );
};

export default Homepage;