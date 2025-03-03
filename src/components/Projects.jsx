import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import electroimg from "../assets/electro.png";
import msgmate from "../assets/msgmate.png";

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Electro-Galaxy",
      description:
        "Developed a fully functional eCommerce platform including features like authentication, secure login...",
      fullDescription:
        "Developed a fully functional eCommerce platform including features like authentication, secure login, responsive frontend, product filtering through category, searching, product add, update, cart, wishlist, buying options, email confirmations, etc.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "MUI", "SCSS", "Nodemailer"],
      github: "https://github.com/Abhinand2004/Electro-Galaxy",
      logo: electroimg,
    },
    {
      title: "Msg-Mate",
      description:
        "Developed a chat application with real-time chatting capabilities, secure login, secure message storing...",
      fullDescription:
        "Developed a chat application with real-time chatting capabilities, secure login, secure message storing, authentication, OAuth technology, real-time notifications, message read, online displaying features, emoji sender, profile editing, contact searching, etc.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "MUI", "OAuth", "Crypto", "Bcrypt", "React-Emoji", "Socket.io"],
      github: "https://github.com/Abhinand2004/MsgMate",
      logo: msgmate,
      domain: "https://msg-mate-eight.vercel.app",
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
    <div ref={ref} className="min-h-screen flex flex-col items-center bg-gray-900 pt-32">
      <h1 className="text-4xl font-bold text-teal-400 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center cursor-pointer hover:scale-105 hover:rotate-2 hover:shadow-2xl transition duration-300"
            onClick={() => openPopup(project)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={boxVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo on the right for large screens, above content on small screens */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img src={project.logo} alt={project.title} className="w-24 h-24 object-contain md:w-32 md:h-32" />
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 text-center md:text-left md:pl-6">
              <h2 className="text-2xl font-semibold text-teal-400">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="border-t-2 border-gray-700 mt-4 pt-2">
                <h3 className="text-lg font-medium text-yellow-400">Tech Stack:</h3>
                <ul className="flex flex-wrap justify-center md:justify-start space-x-2">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <li key={i} className="text-gray-300 text-sm">{tech}</li>
                  ))}
                  {project.techStack.length > 4 && <li className="text-gray-300 text-sm">...</li>}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isVisible && selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-4xl w-full overflow-y-auto max-h-full">
              <div className="flex flex-col md:flex-row items-center mb-4">
                <img src={selectedProject.logo} alt={selectedProject.title} className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-4" />
                <h2 className="text-3xl font-bold text-teal-400">{selectedProject.title}</h2>
              </div>
              <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>
              <div className="border-t-2 border-gray-700 pt-4">
                <h3 className="text-lg font-medium text-yellow-400 mb-2">Tech Stack:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedProject.techStack.map((tech, i) => (
                    <div key={i} className="text-gray-300 text-sm">{tech}</div>
                  ))}
                </div>
              </div>
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-teal-400 underline mt-6 inline-block pr-8 text-lg">
                View on GitHub
              </a>
              {selectedProject.domain && (
                <a href={selectedProject.domain} target="_blank" rel="noopener noreferrer" className="text-teal-400 underline mt-6 inline-block pr-8 text-lg">
                  Visit {selectedProject.title}
                </a>
              )}
              <button onClick={closePopup} className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
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
