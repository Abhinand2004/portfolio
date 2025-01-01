import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "../assets/profile.png";
import { Link } from "react-scroll";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring", delay: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 1, type: "spring", delay: 0.4 },
    },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1 },
    },
    hover: { scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const splitText = (text) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index}>&nbsp;</span>;
      }
      return (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, color: "transparent" }}
          animate={
            inView
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
      );
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-900 p-4 lg:pt-28 lg:px-0 pt-16 pb-0"
      ref={ref}
    >
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col justify-center lg:w-2/3 text-left mt-6 lg:mt-0"
      >
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 lg:pl-32">
          {splitText("Welcome to My Portfolio!")}
        </h1>
        <p className="text-lg lg:text-2xl text-gray-300 mb-6 max-w-3xl lg:pl-32">
          I am Abhinand, a passionate MERN Stack Developer dedicated to building
          modern, scalable, and user-friendly web applications. Let’s explore
          my work together and bring ideas to life!
        </p>
        <div className="flex justify-center lg:justify-start mt-6 space-x-4 lg:pl-32">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
            whileInView="pulse"
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-black font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-teal-600 lg:px-8 lg:py-4"
          >
            <Link to="about" smooth={true} duration={500}>
              Learn More About Me
            </Link>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
            whileInView="pulse"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-black font-semibold rounded-full shadow-lg hover:from-teal-600 hover:to-blue-600 lg:px-8 lg:py-4"
          >
            <Link to="projects" smooth={true} duration={500}>
              View My Projects
            </Link>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center lg:w-1/3 mt-12 lg:mt-0"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover="hover"
      >
        <img
          src={profile}
          alt="Abhinand"
          className="rounded-full w-80 lg:w-96 h-80 lg:h-96 object-cover mb-6 bg-gray-900"
        />
      </motion.div>
    </div>
  );
};

export default Home;
