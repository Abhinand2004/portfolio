import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg"
    >
      <ul className="flex justify-center space-x-8">
        <motion.li
          whileHover={{ scale: 1.2, color: "#fbbf24" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "#fbbf24" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "#fbbf24" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "#fbbf24" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, color: "#fbbf24" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
