import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { Link } from "react-router-dom";
import { useNavbarVisibility } from "../hooks/useNavbarvisibility";
import '../index.css';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const { isSignupPage } = useNavbarVisibility();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
      {!isSignupPage && (
        <p>
          Don't have an account? <Link to="/Signup">Sign Up</Link> now..!
        </p>
      )}
    </form>
  )
}

export default Login