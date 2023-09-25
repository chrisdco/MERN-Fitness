import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarVisibility } from '../hooks/useNavbarvisibility';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../assets/images/Logo(2).png';
import '../index.css';

const linkStyle = {
  cursor: 'pointer', // Set the cursor style to "pointer" for a clickable effect
  textDecoration: 'none',

};

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const { isLoginPage, isSignupPage, isHomepage, isWorkoutPage, initialVisibility } = useNavbarVisibility();
  
  const handleClick = () => {
    logout()
  }
  
  return (
    <header>
      <div className="container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="logo" style={{ width: '70px', height: '60px' }} />
          <h1>Workout Buddy</h1>
        </Link>
        <div className='nav'>
          <nav>
          <div className='nav-link'>
            <Link to="/">Home</Link>
          </div>
          {isHomepage && (<div className='nav-link'>
            <ScrollLink to="exercises" spy={true} smooth={true} offset={-70} duration={600} style={linkStyle}>Exercises</ScrollLink>
          </div>
          )}
          {/* <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212',padding:'10px' }}>Exercises</a> */}
            {user ? (
              <div className='nav-link'>
                <div className='grid-container'>
                  {!isWorkoutPage && (<div>
                    <Link to='/Workout'>Your Workouts</Link>
                  </div>
                  )}
                  <span>{user.email}</span>
                  <button onClick={handleClick}>Log out</button>
                </div>
              </div>
            ):(
              <div>
                {initialVisibility === "login" && !isLoginPage  && (
                  <div className='nav-link'>
                    <Link to="/Login">Login</Link>
                  </div>
                )}
                {initialVisibility === "signup" && !isSignupPage && (
                  <div className='nav-link'>
                    <Link to="/Signup">Sign Up</Link>
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