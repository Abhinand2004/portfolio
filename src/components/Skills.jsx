import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@react-spring/web'; 

const skills = [
  { name: 'HTML', color: 'bg-yellow-500', icon: '🔤' },
  { name: 'CSS', color: 'bg-blue-400', icon: '🎨' },
  { name: 'Bootstrap', color: 'bg-purple-500', icon: '📦' },
  { name: 'JavaScript', color: 'bg-yellow-400', icon: '✨' },
  { name: 'Node.js', color: 'bg-teal-500', icon: '🌳' },
  { name: 'Express.js', color: 'bg-gray-700', icon: '🌐' },
  { name: 'MongoDB', color: 'bg-green-500', icon: '🟢' },
  { name: 'React', color: 'bg-indigo-500', icon: '⚛️' },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 pt-20 sm:pt-32 px-4 sm:px-0">
      <motion.h1
        className="text-2xl sm:text-4xl font-bold text-teal-400 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        I am Skillful In
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-5 sm:p-10 bg-gray-800 rounded-lg shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
        ref={ref}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-3 sm:p-5 rounded-lg shadow-md ${skill.color}`}
            variants={skillVariants}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { type: 'spring', stiffness: 300 },
            }}
          >
            <motion.div
              className="text-3xl sm:text-5xl mb-2 sm:mb-3"
              whileHover={{ scale: 1.3, transition: { type: 'spring', stiffness: 200 } }}
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-white text-sm sm:text-xl font-bold">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
