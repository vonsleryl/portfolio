import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[75vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: "url('src/assets/images/backgroundimg.jpeg')", // Replace with your actual image path
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for readability */}
      
      <div className="relative z-10 flex flex-col items-center w-3/4 lg:w-1/2 space-y-4 px-8 text-center">
        <motion.h1
          className="text-4xl lg:text-4xl font-semibold text-white tracking-tight leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I am <span className="text-blue-500">Vonsleryl Igot</span>
        </motion.h1>
        <motion.p
          className="text-lg text-white mb-4 leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I am a frontend web developer. I provide clean code and pixel-perfect design, making websites more interactive with web animations.
        </motion.p>
        
        <div className="flex space-x-6 mt-4">
          <motion.a
            href="https://www.facebook.com/vansleryl.cantil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebook size={30} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/vonsleryligot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaInstagram size={30} />
          </motion.a>
          <motion.a
            href="mailto:vonsleryligot0@gmail.com"
            className="text-red-500 hover:text-red-700 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope size={30} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
