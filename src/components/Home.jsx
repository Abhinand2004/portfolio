import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import profile from "../assets/abhi.png"; 
import popupimg from "../assets/popupimg.png"; 

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

  const imageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    disappear: {
      opacity: 0,
      y: -50,
      transition: { delay: 2.5, duration: 1.5, ease: "easeInOut" },
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
  className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-900 px-4 lg:px-0 pt-24 sm:pt-16 pb-6" // Adjust pt-24 for large screens and pt-16 for small screens
  ref={ref}
  id="home"
>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col justify-center text-left mt-6 lg:mt-0 max-w-3xl mx-auto lg:ml-16"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">
          {splitText("Welcome to My Portfolio!")}
        </h1>
        <p className="text-base lg:text-2xl text-gray-300 mb-8 mx-auto text-center">
          I am Abhinand, a passionate MERN Stack Developer dedicated to building
          modern, scalable, and user-friendly web applications. Let’s explore
          my work together and bring ideas to life!
        </p>
        <div className="flex flex-col justify-center items-center lg:flex-row mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
            whileInView="pulse"
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-black font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-teal-600 lg:px-8 lg:py-4"
          >
            <Link to="about" smooth={true} duration={500} offset={-50}>
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
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              View My Projects
            </Link>
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="lg:w-1/3 mt-8 lg:mt-0 flex items-center justify-center lg:mr-16"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="relative w-[18rem] lg:w-[28rem] h-[18rem] lg:h-[28rem] bg-gray-900 transform rotate-2 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
         
          <div className="absolute top-0 left-0 transform translate-x-4 translate-y-4 flex items-center justify-center w-8 h-8 bg-gray-900 rounded-full shadow-md">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
            <div className="w-1 h-8 bg-gray-600 absolute top-4"></div>
          </div>

          
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </motion.div>

     
      <motion.div
  className={`fixed left-8 ${inView ? 'bottom-[-10px]' : 'bottom-[-70px]'} w-[150px] h-[150px] overflow-hidden lg:block hidden`}
  style={{ transition: 'bottom 0.5s ease-in-out' }}
>
  <img
    src={popupimg} 
    alt="popup"
    className="w-full h-full object-cover"
  />
</motion.div>





    </div>
  );
};

export default Home;
