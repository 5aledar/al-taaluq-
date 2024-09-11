import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/'  /> */}
      </Routes>
    </>
  )
}

export default App
