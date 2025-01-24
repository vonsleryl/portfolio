import React from 'react';
import { motion } from 'framer-motion';
import shopimg from '/src/assets/images/shopease.png';

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
          {/* Add your text or description here */}
        </motion.p>
        
        {/* Ongoing Project Card */}
        <motion.div 
          className=" p-6 mb-8 max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div 
            className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
            style={{ backgroundImage: `url(${shopimg})` }} // Set background image here
          ></div>

          <h3 className="text-lg lg:text-xl font-semibold mb-3">ShopEase - Ongoing Project</h3> {/* Smaller text */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm"> {/* Smaller text size */}
            Built with React, Tailwind CSS, and deployed on Netlify, this project showcases modern web development practices for seamless user experiences. Check it out now!
          </p>

          <a 
            href="https://shopeaseee.netlify.app/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 text-sm"
          >
            Visit ShopEase
          </a>
        </motion.div>

        {/* Add other project cards here */}
      </div>
    </section>
  );
};

export default Projects;
