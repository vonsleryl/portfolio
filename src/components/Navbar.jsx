import React, { useState } from 'react';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Closes the menu when a link is clicked
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">vons</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-400">Contact</a>
          
          {/* Enhanced Day/Night Toggle Switch with Icons */}
          <label className="flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="hidden" 
              onChange={toggleDarkMode} 
              checked={isDarkMode} 
            />
            <div className="relative w-14 h-8">
              <div className={`absolute inset-0 rounded-full transition duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
              <div className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${isDarkMode ? 'transform translate-x-6' : ''}`}>
                {isDarkMode ? (
                  <HiSun size={20} className="text-yellow-400" />
                ) : (
                  <HiMoon size={20} className="text-gray-800" />
                )}
              </div>
            </div>
          </label>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Enhanced Day/Night Toggle Switch for Mobile */}
          <label className="flex items-center cursor-pointer mr-4">
            <input 
              type="checkbox" 
              className="hidden" 
              onChange={toggleDarkMode} 
              checked={isDarkMode} 
            />
            <div className="relative w-14 h-8">
              <div className={`absolute inset-0 rounded-full transition duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
              <div className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${isDarkMode ? 'transform translate-x-6' : ''}`}>
                {isDarkMode ? (
                  <HiSun size={20} className="text-yellow-400" />
                ) : (
                  <HiMoon size={20} className="text-gray-800" />
                )}
              </div>
            </div>
          </label>
          <button onClick={handleMenuToggle} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 space-y-4">
          <a href="#home" className="block hover:text-gray-600 dark:hover:text-gray-400" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="block hover:text-gray-600 dark:hover:text-gray-400" onClick={handleLinkClick}>About</a>
          <a href="#projects" className="block hover:text-gray-600 dark:hover:text-gray-400" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="block hover:text-gray-600 dark:hover:text-gray-400" onClick={handleLinkClick}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
