import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementTop = document.querySelector('.about-container').offsetTop;
      const elementBottom = elementTop + document.querySelector('.about-container').clientHeight;

      if (window.scrollY >= elementTop - windowHeight / 2 && window.scrollY <= elementBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-4 about-container">
      <motion.div 
        className="max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8 md:p-16"
        initial="hidden" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={variants} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
        whileHover="hover"
      >
        <h1 className="text-4xl font-bold text-teal-400 mb-4">
          About Me
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          I am Abhinand
        </h2>
        <p className="text-gray-400 text-lg">
          I am a MERN Stack student, currently seeking job opportunities. Coding
          is my passion, and I enjoy creating efficient web applications using
          MongoDB, Express.js, React, and Node.js. My goal is to contribute to
          meaningful projects and enhance my skills every day.
        </p>
        <div className="mt-8">
          <motion.button 
            className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap" 
          >
            <Link to="contact">Get in Touch</Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;