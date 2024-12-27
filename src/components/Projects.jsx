import React from "react";
import { motion } from "framer-motion";
const boxVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <>

<motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="w-32 h-32 bg-green-500"
    >
          <h1>Projects Page</h1>
          <p>This is where the projects will be displayed.</p>
      </motion.div>
  
    </>
  );
};

export default Projects;
