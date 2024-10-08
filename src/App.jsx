import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { Fragment } from "react";
import "./index.css";
import { Home } from "./pages/Home";
import { OurServices } from "./components/OurServices";
import Footer from "./components/Footer";
import About from "./components/About";
import Team from "./components/Team";
import { OurActivities } from "./components/OurActivities";
import TestomonialContainer from './containers/TestomonialContainer'
function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/OurActivities" element={<OurActivities />} />
        <Route path="services" element={<OurServices />} />
        <Route path='Testmonials' element={<TestomonialContainer/>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
