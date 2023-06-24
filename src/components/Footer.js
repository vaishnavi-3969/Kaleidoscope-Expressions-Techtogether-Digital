import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiHeart className="text-red-500 text-2xl animate-pulse mr-2" />
          </motion.div>
          <h1 className="text-white text-lg font-semibold">
            Made with Love using React JS and Tailwind CSS by <span className='text-purple-500 hover:text-red-500'><a href='https://github.com/vaishnavi-3969'>Vaishnavi Kale</a></span> & <span className='text-purple-500 hover:text-red-500'><a href="https://github.com/Tejaswinireddyy">Tejaswini Reddy</a></span> for Techtogether Digital
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 text-white">
          <div>
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul>
              <li>Exhibitions</li>
              <li>Notifications</li>
              <li>Profile</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Marketplace</h2>
            <ul>
              <li>Marketplace</li>
              <li>Artists</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">More</h2>
            <ul>
              <li>Collections</li>
              <li>Trending</li>
              <li>Chat</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <motion.a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook className="text-white text-2xl mr-4 hover:text-blue-500" />
          </motion.a>
          <motion.a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter className="text-white text-2xl mr-4 hover:text-blue-400" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram className="text-white text-2xl mr-4 hover:text-pink-500" />
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <AiOutlineGithub className="text-white text-2xl hover:text-gray-400" />
          </motion.a>
        </div>
        <p className="text-center text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} KaleidoscopExpressions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
