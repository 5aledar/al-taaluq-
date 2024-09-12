import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from '/vite.svg'
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

//
// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// //
// import HttpApi from "i18next-http-backend";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(HttpApi)
//   .init({
//     lng: "en", // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",
//     detection: {
//       order: [
//         "htmlTag",
//         "cookie",
//         "localStorage",
//         "sessionStorage",
//         "navigator",
//         "path",
//         "subdomain",
//       ],
//       caches: ["cookie"],
//     },
//     backend: {
//       loadPath: "/locale/{{lng}}/{{ns}}.json",
//     },
//   });

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
