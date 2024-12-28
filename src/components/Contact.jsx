import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Contact = () => {
  return (
    <motion.div
      className="py-20 px-10 bg-gray-900"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-6 text-teal-400"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        className="max-w-xl mx-auto space-y-4"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
          rows="5"
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        <motion.button
          className="w-full px-4 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
