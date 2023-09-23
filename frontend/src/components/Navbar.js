import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavbarVisibility } from '../hooks/useNavbarvisibility';
import Logo from '../assets/images/Logo(2).png';

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const { isLoginPage, isSignupPage } = useNavbarVisibility();

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
            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            )}
            {!user && (
              <div>
                <div className='nav-link'>
                  {!isLoginPage && <Link to="/Login">Login</Link>}
                </div>
                <div className='nav-link'>
                  {!isSignupPage && <Link to="/Signup">Sign Up</Link>}
                </div>
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