import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-4">
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-6xl font-bold text-teal-400 mb-6"
      >
        Welcome!
      </motion.h1>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="text-2xl text-gray-300 mb-10 text-center"
      >
        I am Abhinand, a passionate MERN Stack developer. Explore my portfolio to
        know more about me and my work.
      </motion.p>
      <motion.a
        href="about"
        variants={buttonVariants}
        whileHover="hover"
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-teal-600"
      >
        Learn More About Me
      </motion.a>
    </div>
  );
};

export default Home;
