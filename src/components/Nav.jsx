import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white p-4 fixed w-full top-0 z-50 shadow-lg"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">Abhinand</h1>
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-center space-x-8 mt-4 lg:mt-0">
        {['home', 'about', 'skills', 'resume', 'projects', 'contact'].map((section) => (
          <motion.li
            key={section}
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300 hover:underline hover:underline-offset-4"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </motion.li>
        ))}
      </ul>

   
      {menuOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-4 lg:hidden">
          {['home', 'about', 'skills', 'resume', 'projects', 'contact'].map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1, color: '#fbbf24' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={section}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
