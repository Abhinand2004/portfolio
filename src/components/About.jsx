import React from "react";
import { motion } from "framer-motion";
const About=()=>{
    return(
        <>
            <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9}}
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      className="w-56 h-32 bg-indigo-500"
      
    >
        <h1>Hello</h1>


        <h1>iam Abhinand</h1>


      
    </motion.div>
        </>
    )
}

export default About