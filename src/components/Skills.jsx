import React from "react";
import { useState } from "react";


import { motion, AnimatePresence } from "framer-motion";

const Skills=()=>{
    const [isVisible, setIsVisible] = useState(false);

    const abc=()=>{
        setIsVisible(false  )
    }
    return(
        <div>
      <button onClick={() => setIsVisible(!isVisible)}>skill</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white p-8 rounded">skills</div>

            <button onClick={abc}>click</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    )
}

export default Skills