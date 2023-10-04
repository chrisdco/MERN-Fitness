import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import './index.css';
import './css/hoverclassy.css'
import './css/myFooterStyles.css';

// pages & components
import Workout from './pages/Workout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './homepage/Homepage'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={!user ? <Homepage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/workout" 
              element={user ? <Workout /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/workout" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/workout" />} 
            />
          </Routes>
          </div>
        <Footer/>
        
        
      </BrowserRouter>
      </div>
  );
}

export default App;
