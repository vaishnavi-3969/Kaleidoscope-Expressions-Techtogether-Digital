import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import Exhibition0 from '../assets/exhibition.png';
import Exhibition1 from '../assets/exhibition1.png';
import Exhibition2 from '../assets/exhibition2.png';
import Exhibition3 from '../assets/exhibition3.png';
import Exhibition4 from '../assets/exhibition4.png';
import Exhibition5 from '../assets/exhibition5.png';
import Exhibition6 from '../assets/exhibition6.png';
import Exhibition7 from '../assets/exhibition7.png';
import Exhibition8 from '../assets/exhibition8.png';
import Exhibition9 from '../assets/exhibition9.png';


const exhibitionsData = [
  {
    id: 1,
    title: 'Abstract Art Exhibition',
    description: 'Explore the world of abstract art and its unique expressions.',
    date: '2023-07-15',
    location: 'Art Gallery XYZ',
    imageUrl: Exhibition0,
    price: '$10',
  },
  {
    id: 2,
    title: 'Contemporary Photography Showcase',
    description: 'Discover the beauty of contemporary photography captured by talented artists.',
    date: '2023-08-05',
    location: 'Photography Studio ABC',
    imageUrl: Exhibition1,
    price: '$15',
  },
  {
    id: 3,
    title: 'Sculpture Exhibition: Form and Function',
    description: 'Witness the intricate sculptures showcasing the perfect balance of form and function.',
    date: '2023-09-12',
    location: 'Sculpture Gallery DEF',
    imageUrl: Exhibition2,
    price: '$20',
  },
  {
    id: 4,
    title: 'Impressionist Painting Collection',
    description: 'Immerse yourself in the mesmerizing world of impressionist paintings.',
    date: '2023-10-08',
    location: 'Art Museum GHI',
    imageUrl: Exhibition3,
    price: '$12',
  },
  {
    id: 5,
    title: 'Digital Art and Technology Expo',
    description: 'Experience the fusion of art and technology through interactive digital exhibits.',
    date: '2023-11-21',
    location: 'Tech Center JKL',
    imageUrl: Exhibition4,
    price: '$18',
  },
  {
    id: 6,
    title: 'Modernist Architecture Showcase',
    description: 'Discover the innovative designs and concepts of modernist architecture.',
    date: '2023-12-05',
    location: 'Architectural Center MNO',
    imageUrl: Exhibition5,
    price: '$15',
  },
  {
    id: 7,
    title: 'Fashion and Textile Exhibition',
    description: 'Witness the creativity and craftsmanship in the world of fashion and textiles.',
    date: '2024-01-17',
    location: 'Fashion Studio PQR',
    imageUrl: Exhibition6,
    price: '$10',
  },
  {
    id: 8,
    title: 'Ancient Civilization Artifacts',
    description: 'Step back in time and explore the artifacts from ancient civilizations.',
    date: '2024-02-08',
    location: 'Archaeology Museum STU',
    imageUrl: Exhibition7,
    price: '$12',
  },
  {
    id: 9,
    title: 'Nature Photography Exhibition',
    description: 'Marvel at the stunning beauty of nature captured through the lens of talented photographers.',
    date: '2024-03-22',
    location: 'Nature Center VWX',
    imageUrl: Exhibition8,
    price: '$10',
  },
  {
    id: 10,
    title: 'Abstract Sculpture Installation',
    description: 'Experience the abstract sculptures that challenge traditional perceptions.',
    date: '2024-04-15',
    location: 'Art Park YZA',
    imageUrl: Exhibition9,
    price: '$15',
  },
];

const Exhibition = () => {
  const [showRSVP, setShowRSVP] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleRSVP = () => {
    setShowRSVP(true);
    setConfettiActive(true);

    setTimeout(() => {
      setConfettiActive(false);
    }, 7000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      {confettiActive && <Confetti />}
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Exhibitions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitionsData.map((exhibition) => (
            <motion.div
              key={exhibition.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4">
                <img src={exhibition.imageUrl} alt={exhibition.title} className="w-full rounded-lg" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-white">{exhibition.title}</h2>
              <p className="text-gray-400">{exhibition.description}</p>
              <p className="text-gray-400 mt-2">Date: {exhibition.date}</p>
              <p className="text-gray-400">Location: {exhibition.location}</p>
              <p className="text-gray-400">Price: {exhibition.price}</p>
              <button
                onClick={handleRSVP}
                className="mt-4 inline-block bg-purple-900 text-white px-4 py-2 rounded-lg"
              >
                RSVP
              </button>
              {showRSVP && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                  <div className="bg-gray-900 bg-opacity-50 absolute inset-0" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 rounded-lg p-6 shadow-lg relative z-10"
                  >
                    <h2 className="text-xl font-semibold mb-2 text-white">RSVP Confirmation</h2>
                    <p className="text-gray-400">
                      Thank you for RSVPing to the {exhibition.title} exhibition.
                    </p>
                    <button
                      onClick={() => setShowRSVP(false)}
                      className="mt-4 inline-block bg-purple-900 text-white px-4 py-2 rounded-lg"
                    >
                      Close
                    </button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
