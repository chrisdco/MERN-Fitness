import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const RoutineCard = () => {
    return (
        <div className="container mb-5">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-lg-8">
                    <div className="card bg-primary text-white shadow-lg p-5 rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid" src="https://thelatest.modere.eu/wp-content/uploads/2023/04/Copy-of-US_Lean-Body-System_IG_FB_052622-1000-%C3%97-700px-540x700.png" alt="Fitness Icon" />
                            </div>
                            <div className="col-md-6 text-center">
                                <h2>Bring the gym home</h2>
                                <ul className="list-unstyled">
                                <li style={{ fontFamily: 'revert-layer', fontSize: '25px', color: '#ff4dd2' }}>
                                    Unlimited access to at-home workouts, bringing the fitness experience to the comfort of your home
                                </li>
                                </ul>
                                <p style={{ fontFamily: 'serif' }}>Join us and log your workouts now</p>
                                <Link className="btn btn-pink text-white" to="/Login">Start now..</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RoutineCard;