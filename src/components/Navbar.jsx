import React, { useState } from "react";

const Navbar = () => {  //Arrow function for Navbar component
  // State for toggling the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo / Name */}
          <div className="text-2xl font-bold">MyPortfolio</div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#projects" className="hover:text-yellow-400">Projects</a>
            <a href="#achievements" className="hover:text-yellow-400">Achievements</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Right: Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Hamburger icon */}
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
              {/* This is done when it is viewed in mobile... */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <a href="#hero" className="block hover:text-yellow-400">Home</a>
          <a href="#about" className="block hover:text-yellow-400">About</a>
          <a href="#projects" className="block hover:text-yellow-400">Projects</a>
          <a href="#achievements" className="block hover:text-yellow-400">Achievements</a>
          <a href="#contact" className="block hover:text-yellow-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;