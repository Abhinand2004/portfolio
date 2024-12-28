import React from "react";
import { motion } from "framer-motion";


const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "easeInOut" },
    },
  };

  const gotocontact=()=>{

  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-4">
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8 md:p-16"
      >
        <motion.h1
          className="text-4xl font-bold text-teal-400 mb-4"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          About Me
        </motion.h1>

        <motion.h2
          className="text-2xl font-semibold text-gray-300 mb-4"
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        >
          I am Abhinand
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg"
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 },
          }}
        >
          I am a MERN Stack student, currently seeking job opportunities. Coding
          is my passion, and I enjoy creating efficient web applications using
          MongoDB, Express.js, React, and Node.js. My goal is to contribute to
          meaningful projects and enhance my skills every day.
        </motion.p>

        <motion.div
          className="mt-8"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-colors duration-300" onClick={gotocontact}>
            Get in Touch
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
