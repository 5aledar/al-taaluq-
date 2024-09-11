import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import { Home } from './pages/Home'
function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
