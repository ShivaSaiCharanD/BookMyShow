// import { useState } from 'react'
// import clsx from 'clsx'
import './App.css'
import Home from './components/Home.jsx'
import NavbarSimple from './components/NavbarSimple.jsx'
import Theatre from './components/Theatre.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import UserDashboard from './components/UserDashboard.jsx';
import { Routes, Route , useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (

    <>
       <NavbarSimple isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/theatre' element={<Theatre />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<UserDashboard />} />
      </Routes>
      {/* <Theatre /> */}


    </>
  )
}

export default App;
