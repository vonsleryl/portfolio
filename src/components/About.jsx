import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaCss3Alt, FaNodeJs, FaFigma, FaHtml5 } from 'react-icons/fa';

const About = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="py-16 bg-gray-100 dark:bg-gray-800 text-center text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl lg:text-4xl">About Me</h2>
      </div>

      {/* About Section */}
      <section id="about" className="min-h-[80vh] py-24 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start px-10 lg:px-16 space-y-12 lg:space-y-0 lg:space-x-20">
          
          {/* Left Side - Image with Animation */}
          <motion.div
            className="flex-shrink-0 w-80 h-80 lg:w-[24rem] lg:h-[24rem] rounded-full overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/src/assets/images/pp.jpg"
              alt="Vonsleryl Igot"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side - Information */}
          <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
            <motion.p 
              className="text-lg lg:text-xl leading-relaxed"
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              I'm Vonsleryl Igot, a passionate frontend web developer. I enjoy building dynamic, visually engaging web applications that prioritize user experience. My focus is on writing clean, efficient code and creating pixel-perfect designs. With a love for learning, I continually improve my skills to stay updated with the latest technologies and design trends.
            </motion.p>
            <div className="text-sm lg:text-base space-y-3">
              <motion.p
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
              ><strong>Birthdate:</strong> January 19, 2001</motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.3 }}
              ><strong>Phone:</strong> 09474127696</motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.4 }}
              ><strong>Email:</strong> vonsleryligot0@gmail.com</motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.5 }}
              ><strong>Address:</strong> Ibabao Pusok, Lapu Lapu City, Cebu City, Philippines</motion.p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex space-x-6 sm:space-x-8 lg:space-x-12"> {/* Responsive space adjustments */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaReact title="React" className="text-blue-500 text-4xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaJs title="JavaScript" className="text-yellow-500 text-4xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaHtml5 title="HTML" className="text-orange-500 text-4xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaCss3Alt title="CSS" className="text-blue-600 text-4xl" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaFigma title="Figma" className="text-pink-600 text-4xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
