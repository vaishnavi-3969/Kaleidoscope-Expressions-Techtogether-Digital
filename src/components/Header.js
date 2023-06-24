import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiUser, FiLogOut, FiX } from 'react-icons/fi';
import { FaPalette, FaHome, FaRegNewspaper, FaUserAlt, FaShoppingBag, FaRegComment, FaRegHeart, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    closed: {
      x: -300,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-800 py-4 px-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiMenu
              className="text-white text-2xl mr-4 cursor-pointer"
              onClick={toggleSidebar}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white text-2xl font-semibold">KaleidoscopExpressions</h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaPalette className="text-white text-2xl cursor-pointer" />
        </motion.div>

        {isSidebarOpen && (
          <motion.div
            className="fixed top-0 left-0 h-screen w-64 bg-purple-900 text-white flex flex-col p-4"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
          >
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
                <FiUser className="text-purple-800 text-xl" />
              </div>
              <h2 className="text-lg font-semibold">Hey, Vaishnavi</h2>
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FaHome className="w-5 h-5 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/exhibitions" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FaRegNewspaper className="w-5 h-5 mr-2" />
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FiLogOut className="w-5 h-5 mr-2" />
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="/profile" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FaUserAlt className="w-5 h-5 mr-2" />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FaShoppingBag className="w-5 h-5 mr-2" />
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/artists" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FaUserAlt className="w-5 h-5 mr-2" />
                  Artists
                </Link>
              </li>
              <li>
                <Link to="/chat" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FaRegComment className="w-5 h-5 mr-2" />
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/trending" className="flex items-center px-6 py-2 text-gray-300 hover:text-white">
                  <FaFire className="w-5 h-5 mr-2" />
                  Trending
                </Link>
              </li>
            </ul>
            <motion.button
              className="text-white mt-auto flex items-center cursor-pointer"
              onClick={closeSidebar}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX className="mr-2" />
              Close
            </motion.button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
