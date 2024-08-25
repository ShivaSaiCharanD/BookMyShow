import { useState } from 'react'
// import clsx from 'clsx'
import './App.css'
import Home from './components/Home.jsx'
import NavbarSimple from './components/NavbarSimple.jsx'
import Theatre from './components/Theatre.jsx'
import Login from './components/login.jsx'
import Signup from './components/Signup.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
      <NavbarSimple />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/theatre' element={<Theatre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {/* <Theatre /> */}
      {/* <Home /> */}
    </>
  )
}

export default App;
