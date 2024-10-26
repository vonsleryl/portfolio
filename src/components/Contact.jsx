import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg lg:text-xl px-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'd love to hear from you! Please reach out through any of the platforms below.
        </motion.p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8">
          <motion.a
            href="https://www.facebook.com/vansleryl.cantil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaFacebook className="text-3xl mr-2" />
            Facebook
          </motion.a>

          <motion.a
            href="https://www.instagram.com/vonsleryligot/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-pink-500 hover:text-pink-700"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaInstagram className="text-3xl mr-2" />
            Instagram
          </motion.a>

          <motion.a
            href="mailto:vonsleryligot0@gmail.com"
            className="flex items-center text-red-500 hover:text-red-700"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className="text-3xl mr-2" />
            Email
          </motion.a>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </section>
  );
};

export default Contact;
