import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarVisibility } from '../hooks/useNavbarvisibility';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/images/Logo(2).png';
import React, { useState, useEffect } from 'react';

const linkStyle = {
  cursor: 'pointer', // Set the cursor style to "pointer" for a clickable effect
  textDecoration: 'none',

};
const ExercisesIcon = () => (
  <span class="material-symbols-outlined">
    fitness_center
  </span>
);

const HomeIcon = () => (
  <span class="material-symbols-outlined">
    home
  </span>
);
const LoginIcon = () => (
  <span class="material-symbols-outlined">
    login
  </span>
);
const SignupIcon = () => (
  <span class="material-symbols-outlined">
    person_add
  </span>
);
const LogoutIcon = () => (
  <span class="material-symbols-outlined">
    logout
  </span>
);

const Navbar = () => {
  const navigate = useNavigate()
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const { isHomepage, isLoginPage, isSignupPage, isSearch, isWorkoutPage, initialVisibility } = useNavbarVisibility();
  
  const handleClick = () => {
    logout()
    navigate('/')
    
  }
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Update the isMinimized state based on the screen size
      setIsMinimized(window.innerWidth <= 450); // You can adjust this breakpoint
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Initial check for minimized screen
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className="my-container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="logo" style={{ width: '70px', height: '60px' }} />
          <h1 style={{fontWeight:"bold"}}>Commando</h1>
        </Link>
        <div className='nav'>
          <nav>
            {!isSearch && (<div className='nav-link'>
              <Link to="/SearchHome">
                {isMinimized ? <ExercisesIcon /> : 'Exercises'}
              </Link>
            </div>
            )}
            {isSearch && (<div className='nav-link'>
              <ScrollLink to="exercises" spy={true} smooth={true} offset={-70} duration={600} style={linkStyle}>Explore</ScrollLink>
            </div>
            )}
            {isSearch && (
                  <div className='nav-link'>
                    <Link to="/Workout">Workouts</Link>
                  </div>
                )}
            {user ? (
              <div className='user-details'>
                <span>{user.email}</span>
                <button onClick={handleClick}>
                  {isMinimized ? <LogoutIcon /> : 'Logout'}
                </button>
              </div>
              
            ):(
              
              <div className='nav-links-container'>
                {!isHomepage && (isLoginPage || isSignupPage || !isSearch) && (
                  <div className='nav-link'>
                  <Link to="/">
                    {isMinimized ? <HomeIcon /> : 'Home'}
                  </Link>
                </div>
                
                )}
                {initialVisibility === "login" && !isLoginPage  && (
                  <div className='nav-link'>
                    <Link to="/Login">
                      {isMinimized ? <LoginIcon /> : 'Login'}
                    </Link>
                  </div>
                )}
                {initialVisibility === "signup" && !isSignupPage && (
                  <div className='nav-link'>
                    <Link to="/Signup">
                      {isMinimized ? <SignupIcon /> : 'Sign Up'}
                    </Link>
                  </div>
                )}
                
              </div>
            )}
            {/* Placeholder for more nav links */}
            {/* <div className='nav-link'> 
              <Link to="/Signup" ></Link>
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar