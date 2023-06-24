import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Logo from '../assets/logo.png';
// import Spotlight from '../assets/spotlight.png';
import '../index.css';

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
            title: 'Chat',
            description: 'Connect with other art enthusiasts',
            icon: '💬',
            path: '/chat',
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

                <h1 className="text-4xl font-bold text-white mb-8 animate-wavy text-center">Welcome to </h1>
                <div className="container mx-auto px-4 py-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center justify-center mb-8"
                    >
                        <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gray-900">
                            <div className="spotlights-container">
                                <img src={Logo} alt="Logo" className="h-30 w-30" />

                                <div className="spotlight">
                                    <div className="bulb" />
                                </div>
                                <div className="spotlight">
                                    <div className="bulb" />
                                </div>
                                <div className="spotlight">
                                    <div className="bulb" />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-6xl font-bold text-yellow-300 bg-gradient-to-r from-purple-900 to-indigo-800">
                            <Typewriter
                                options={{
                                    strings: ['KaleidoscopExpressions'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                    deleteSpeed: 50,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span class="glow">Kaleidoscop</span>')
                                        .pauseFor(1000)
                                        .typeString('<span class="sparkle">Expressions</span>')
                                        .start();
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
