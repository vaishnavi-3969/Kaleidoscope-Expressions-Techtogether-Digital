import React from 'react';
import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-800 py-4 px-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiMenu className="text-white text-2xl mr-4 cursor-pointer" />
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
      </nav>
    </header>
  );
};

export default Header;
