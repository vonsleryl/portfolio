import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animation

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl mb-6">My Projects</h2> {/* Increased margin-bottom */}
        <motion.p 
          className="text-lg lg:text-xl px-4 mb-8"
          initial={{ opacity: 0, y: 20 }} // Starting position and opacity
          animate={{ opacity: 1, y: 0 }}  // End position and opacity
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
        >
          Coming Soon . . .
        </motion.p>
        {/* Add project cards or details here */}
      </div>
    </section>
  );
};

export default Projects;
