import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

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
              <Link to="/" className="flex items-center py-4 px-2" onClick={() => handleItemClick('/')}>
                <span className="font-semibold text-orange-500 text-2xl">Brand</span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`py-4 px-2 text-xl ${active === '/' ? 'text-white border-b-4 border-white font-semibold' : 'text-orange-500 font-semibold hover:text-white transition duration-300'}`}
                onClick={() => handleItemClick('/')}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`py-4 px-2 text-xl ${active === '/about' ? 'text-white border-b-4 border-white font-semibold' : 'text-orange-500 font-semibold hover:text-white transition duration-300'}`}
                onClick={() => handleItemClick('/about')}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`py-4 px-2 text-xl ${active === '/services' ? 'text-white border-b-4 border-white font-semibold' : 'text-orange-500 font-semibold hover:text-white transition duration-300'}`}
                onClick={() => handleItemClick('/services')}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`py-4 px-2 text-xl ${active === '/projects' ? 'text-white border-b-4 border-white font-semibold' : 'text-orange-500 font-semibold hover:text-white transition duration-300'}`}
                onClick={() => handleItemClick('/projects')}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`py-4 px-2 text-xl ${active === '/contact' ? 'text-white border-b-4 border-white font-semibold' : 'text-orange-500 font-semibold hover:text-white transition duration-300'}`}
                onClick={() => handleItemClick('/contact')}
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center">
            <Link
              to="/get-a-quote"
              className={`py-2 px-3 text-[17px] ${active === '/get-a-quote' ? 'bg-white text-gray-900 rounded' : 'bg-gray-900 text-orange-500 border border-orange-500 rounded hover:bg-white hover:text-gray-900 hover:border-white transition duration-300'}`}
              onClick={() => handleItemClick('/get-a-quote')}
            >
              Get A Quote
            </Link>
          </div>
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
        </div>
      </div>
      {/* mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link
          to="/"
          className={`block py-2 px-4 text-lg ${active === '/' ? 'bg-gray-800 text-white' : 'text-orange-500 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => handleItemClick('/')}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`block py-2 px-4 text-lg ${active === '/about' ? 'bg-gray-800 text-white' : 'text-orange-500 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => handleItemClick('/about')}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`block py-2 px-4 text-lg ${active === '/services' ? 'bg-gray-800 text-white' : 'text-orange-500 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => handleItemClick('/services')}
        >
          Services
        </Link>
        <Link
          to="/projects"
          className={`block py-2 px-4 text-lg ${active === '/projects' ? 'bg-gray-800 text-white' : 'text-orange-500 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => handleItemClick('/projects')}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`block py-2 px-4 text-lg ${active === '/contact' ? 'bg-gray-800 text-white' : 'text-orange-500 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => handleItemClick('/contact')}
        >
          Contact
        </Link>
        <Link
          to="/get-a-quote"
          className={`block py-2 px-4 text-lg ${active === '/get-a-quote' ? 'bg-gray-800 text-white' : 'text-orange-500 hover:bg-gray-800 hover:text-white'}`}
          onClick={() => handleItemClick('/get-a-quote')}
        >
          Get A Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
