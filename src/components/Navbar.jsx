import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" },
  ];
  const { t, i18n } = useTranslation();
  const handleItemClick = (path) => {
    setActive(path);
    setIsOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="w-[100%] mx-auto px-[5%]">
        <div className="flex items-center justify-between">
          {/* Brand and Navbar items */}
          <div className="flex items-center space-x-7">
            <div className="mr-10">
              {/* Website Logo */}
              <Link
                to="/"
                className="flex items-center py-4 px-2"
                onClick={() => handleItemClick("/")}
              >
                <span className="font-semibold text-orange-500 text-2xl">
                  Brand
                </span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`py-4 px-2 text-xl ${active === "/"
                    ? "text-white border-b-4 border-white font-semibold"
                    : "text-orange-500 font-semibold hover:text-white transition duration-300"
                  }`}
                onClick={() => handleItemClick("/")}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className={`py-4 px-2 text-xl ${active === "/about"
                    ? "text-white border-b-4 border-white font-semibold"
                    : "text-orange-500 font-semibold hover:text-white transition duration-300"
                  }`}
                onClick={() => handleItemClick("/about")}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/services"
                className={`py-4 px-2 text-xl ${active === "/services"
                    ? "text-white border-b-4 border-white font-semibold"
                    : "text-orange-500 font-semibold hover:text-white transition duration-300"
                  }`}
                onClick={() => handleItemClick("/services")}
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/Team"
                className={`py-4 px-2 text-xl ${active === "/Team"
                    ? "text-white border-b-4 border-white font-semibold"
                    : "text-orange-500 font-semibold hover:text-white transition duration-300"
                  }`}
                onClick={() => handleItemClick("/Team")}
              >
                {t("nav.team")}
              </Link>
              <Link
                to="/OurActivities"
                className={`py-4 px-2 text-xl ${active === "/OurActivities"
                    ? "text-white border-b-4 border-white font-semibold"
                    : "text-orange-500 font-semibold hover:text-white transition duration-300"
                  }`}
                onClick={() => handleItemClick("/OurActivities")}
              >
                {t("nav.activities")}
              </Link>
              <Link
                to="/Testmonials"
                className={`py-4 px-2 text-xl ${active === '/Testmonials' ? 'text-white border-b-4 border-white font-semibold' : 'text-orange-500 font-semibold hover:text-white transition duration-300'}`}
                onClick={() => handleItemClick('/Testmonials')}
              >
                {t("nav.testmonials")}
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-orange-500" />
              ) : (
                <FaBars className="h-6 w-6 text-orange-500" />
              )}
            </button>
          </div>
          {/* Dropdown menu */}
          <details className="dropdown bg-gray-900 ">
            <summary className="btn m-1 bg-gray-900">Languages</summary>
            <ul className="menu dropdown-content bg-slate-950 rounded-box z-[1] w-32 p-2 shadow">
              {languages.map((language) => (
                <li
                  className="hover:text-orange-500  transition duration-300 cursor-pointer" 
                  onClick={() => i18n.changeLanguage(language.code)}
                  key={language.code}
                >
                  {language.name}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link
          to="/"
          className={`block py-2 px-4 text-lg ${active === "/"
              ? "bg-gray-800 text-white"
              : "text-orange-500 hover:bg-gray-800 hover:text-white"
            }`}
          onClick={() => handleItemClick("/")}
        >
          {t("nav.home")}
        </Link>
        <Link
          to="/about"
          className={`block py-2 px-4 text-lg ${active === "/about"
              ? "bg-gray-800 text-white"
              : "text-orange-500 hover:bg-gray-800 hover:text-white"
            }`}
          onClick={() => handleItemClick("/about")}
        >
          {t("nav.about")}
        </Link>
        <Link
          to="/services"
          className={`block py-2 px-4 text-lg ${active === "/services"
              ? "bg-gray-800 text-white"
              : "text-orange-500 hover:bg-gray-800 hover:text-white"
            }`}
          onClick={() => handleItemClick("/services")}
        >
          {t("nav.services")}
        </Link>
        <Link
          to="/Team"
          className={`block py-2 px-4 text-lg ${active === "/Team"
              ? "bg-gray-800 text-white"
              : "text-orange-500 hover:bg-gray-800 hover:text-white"
            }`}
          onClick={() => handleItemClick("/Team")}
        >
          {t("nav.team")}
        </Link>
        <Link
          to="/OurActivities"
          className={`block py-2 px-4 text-lg ${active === "/OurActivities"
              ? "bg-gray-800 text-white"
              : "text-orange-500 hover:bg-gray-800 hover:text-white"
            }`}
          onClick={() => handleItemClick("/OurActivities")}
        >
          {t("nav.activities")}
        </Link>
        <Link
          to="/Testmonials"
          className={`block py-2 px-4 text-lg ${active === '/Testmonials' ? 'bg-gray-800 text-white' : 'text-orange-500 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => handleItemClick('/Testmonials')}
        >
          {t("nav.testmonials")}
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
