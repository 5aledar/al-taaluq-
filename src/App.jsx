import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import { Home } from './pages/Home'
import { OurServices } from './components/OurServices'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<OurServices/>} />
      </Routes>
    </>
  )
}

export default App
