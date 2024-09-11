import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import { Home } from './pages/Home'
import Footer from './components/Footer'
function App() {


  return (
    <React.Fragment className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
