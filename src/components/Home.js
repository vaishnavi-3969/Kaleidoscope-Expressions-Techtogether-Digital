import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Logo from '../assets/logo.png';

const Home = () => {
  const features = [
    {
      title: 'Exhibitions',
      description: 'Explore the latest art exhibitions',
      icon: '🖼️',
      path: '/exhibitions',
    },
    {
      title: 'Notifications',
      description: 'Stay updated with notifications',
      icon: '🔔',
      path: '/notifications',
    },
    {
      title: 'Profile',
      description: 'Manage your profile and preferences',
      icon: '👤',
      path: '/profile',
    },
    {
      title: 'Marketplace',
      description: 'Buy and sell artworks',
      icon: '💲',
      path: '/marketplace',
    },
    {
      title: 'Artists',
      description: 'Discover talented artists',
      icon: '🎨',
      path: '/artists',
    },
    {
      title: 'Events',
      description: 'Attend art-related events',
      icon: '🎉',
      path: '/events',
    },
    {
      title: 'Collections',
      description: 'Create and explore art collections',
      icon: '🗃️',
      path: '/collections',
    },
    {
      title: 'Chat',
      description: 'Connect with other art enthusiasts',
      icon: '💬',
      path: '/chat',
    },
    {
      title: 'Favorites',
      description: 'Save your favorite artworks',
      icon: '⭐',
      path: '/favorites',
    },
    {
      title: 'Trending',
      description: 'Discover trending artworks',
      icon: '📈',
      path: '/trending',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to </h1>
        <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center mb-8"
      >
         <div className="w-35 h-35 flex items-center justify-center rounded-full bg-white">
            <img src={Logo} alt="Logo" className="h-24 w-24" />
          </div>
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300">
          <Typewriter
            options={{
              strings: ['KaleidoscopExpressions'],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </h1>
      </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg cursor-pointer"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-white">{feature.title}</h2>
              <p className="text-gray-400">{feature.description}</p>
              <Link
                to={feature.path}
                className="mt-4 inline-block bg-purple-900 text-white px-4 py-2 rounded-lg"
              >
                View
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
