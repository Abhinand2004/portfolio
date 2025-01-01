import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import avatar from "../assets/avatar.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementTop = document.querySelector(".about-container").offsetTop;
      const elementBottom =
        elementTop + document.querySelector(".about-container").clientHeight;

      if (
        window.scrollY >= elementTop - windowHeight / 2 &&
        window.scrollY <= elementBottom
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: [0, 10, -10, 0], // Add a small wobble effect
      transition: { duration: 1, type: "spring" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, delay: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      char === " " ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, color: "transparent" }}
          animate={
            isVisible
              ? { opacity: 1, color: "#00bcd4" }
              : { opacity: 0, color: "transparent" }
          }
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            type: "spring",
          }}
        >
          {char}
        </motion.span>
      )
    ));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4 pt-0">
      <div className="about-container flex flex-col md:flex-row max-w-5xl w-full h-auto md:h-[80vh] rounded-lg shadow-lg p-6">
        <motion.div
          className="w-full md:w-1/4 h-48 md:h-full mb-6 md:mb-0 hidden md:block"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start p-4 md:p-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4 text-center md:text-left">
            Nice to Meet You,
          </h1>
          <motion.h2
            className="text-xl md:text-2xl font-semibold text-gray-300 mb-4"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            {splitText("I am Abhinand")}
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base md:text-lg mb-8 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1, transition: { delay: 0.5, duration: 0.5 } } : {}}
          >
            I am a MERN Stack student, currently seeking job opportunities. Coding
            is my passion, and I enjoy creating efficient web applications using
            MongoDB, Express.js, React, and Node.js.
          </motion.p>
          <div className="mt-8">
            <motion.button
              className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="contact" smooth={true} duration={500}>
                Get in Touch
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
