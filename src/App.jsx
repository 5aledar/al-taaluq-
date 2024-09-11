import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import React , {Fragment} from 'react'
import './index.css'
import { Home } from './pages/Home'
import { OurServices } from './components/OurServices'
import Footer from './components/Footer'
function App() {


  return (
    <React.Fragment>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<OurServices/>} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
