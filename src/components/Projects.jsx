import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Designed and developed a fully functional eCommerce platform enabling seamless browsing, cart management, and checkout functionalities. Built a responsive and user-friendly front-end using React.js, ensuring optimal user experience across devices. Developed and integrated RESTful APIs using Node.js and Express.js for user authentication, product management.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Abhinand2004/olx_model.git",
    },
    {
      title: "Social Media Website",
      description:
        "Developed a feature-rich social media platform enabling user registration, profile management, and interactive features like posts. Designed an intuitive, mobile-responsive front-end using React.js, enhancing user engagement and accessibility. Built scalable back-end APIs with Node.js and Express.js, supporting real-time data operations and user interactions.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Abhinand2004/socialmediademo.git",
    },
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsVisible(true);
  };

  const closePopup = () => {
    setIsVisible(false);
    setSelectedProject(null);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center bg-gray-900 pt-32"
    >
      <h1 className="text-4xl font-bold text-teal-400 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-xl cursor-pointer hover:scale-105 hover:rotate-2 hover:shadow-2xl transition duration-300"
            onClick={() => openPopup(project)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-6">{project.description.split(".")[0]}...</p>
            <div className="border-t-2 border-gray-700 pt-4">
              <h3 className="text-lg font-medium text-yellow-400 mb-2">Tech Stack:</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isVisible && selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-2xl w-full">
              <h2 className="text-3xl font-bold text-teal-400 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              <div className="border-t-2 border-gray-700 pt-4">
                <h3 className="text-lg font-medium text-yellow-400 mb-2">Tech Stack:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedProject.techStack.map((tech, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 underline mt-6 inline-block pr-8 text-lg"
              >
                View on GitHub
              </a>
              <button
                onClick={closePopup}
                className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 "
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
