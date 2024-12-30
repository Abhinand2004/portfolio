import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Resume = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.3)",
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 p-8 text-gray-300">
      {/* Header Section */}
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-bold text-teal-400">My Resume</h1>
        <p className="text-lg mt-2 text-gray-400">
          Discover my professional journey and projects.
        </p>
      </motion.header>

      {/* Resume Content */}
      <motion.div
        ref={sectionRef}
        className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-lg p-6 lg:p-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        {/* Summary Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Summary</h2>
          <p>
            Passionate MERN Stack Developer with hands-on experience in
            developing full-stack web applications. Skilled in MongoDB,
            Express.js, React.js, and Node.js, I create scalable and
            user-friendly solutions. I am dedicated to continuous learning and
            building impactful projects.
          </p>
        </motion.section>

        {/* Professional Experience Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-teal-400 mb-4">
            Professional Experience
          </h2>
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="p-4 bg-gray-700 rounded-md"
          >
            <h3 className="font-semibold text-yellow-400">Synnefo-solutions</h3>
            <p className="text-sm text-gray-400 mb-2">2024 - Present</p>
            <ul className="list-disc list-inside">
              <li>
                Developed and deployed full-stack web applications using the
                MERN stack.
              </li>
              <li>
                Collaborated with cross-functional teams to design and implement
                RESTful APIs.
              </li>
              <li>Optimized application performance using modern techniques.</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Projects</h2>
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="p-4 bg-gray-700 rounded-md"
          >
            <h3 className="font-semibold text-yellow-400">E-Commerce Website</h3>
            <p>
              Built a fully functional eCommerce platform with features like
              cart management and RESTful API integration.
            </p>
            <a
              href="https://github.com/Abhinand2004/oilex_model.git"
              className="text-teal-400 underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </motion.div>
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="p-4 bg-gray-700 rounded-md mt-4"
          >
            <h3 className="font-semibold text-yellow-400">
              Social Media Platform
            </h3>
            <p>
              Developed a feature-rich platform with real-time data operations
              and a responsive design.
            </p>
            <a
              href="https://github.com/Abhinand2004/socialmediademo.git"
              className="text-teal-400 underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>HTML, CSS, JavaScript</li>
            <li>Node.js, Express.js, MongoDB, React.js</li>
          </ul>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Education</h2>
          <ul className="list-disc list-inside">
            <li>
              Diploma in Computer Engineering (2021-2024) - IPT&GPTC Shoranur
            </li>
            <li>VHSC Shoranur (2019-2021)</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Resume;
