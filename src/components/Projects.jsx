import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-featured e-commerce website with product listings, shopping cart, and checkout functionality.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Social Media Website",
      description:
        "A social media platform where users can create profiles, post updates, and interact with each other.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
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

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center bg-gray-900 p-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-teal-400 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-teal-600 transition duration-300"
            onClick={() => openPopup(project)}
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div>
              <h3 className="text-lg font-medium text-yellow-400">Tech Stack:</h3>
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-gray-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div>
                <h3 className="text-lg font-medium text-yellow-400">Tech Stack:</h3>
                <ul className="list-disc list-inside">
                  {selectedProject.techStack.map((tech, index) => (
                    <li key={index} className="text-gray-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={closePopup}
                className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
