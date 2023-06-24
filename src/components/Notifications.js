import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiShoppingBag, FiCalendar } from 'react-icons/fi';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'New message',
      description: 'You have a new message from a user.',
      time: '10 minutes ago',
      icon: <FiMessageCircle size={24} />,
    },
    {
      id: 2,
      title: 'Artwork sold',
      description: 'Your artwork has been sold successfully.',
      time: '1 hour ago',
      icon: <FiShoppingBag size={24} />,
    },
    {
      id: 3,
      title: 'Event reminder',
      description: "Don't forget to attend the art event tomorrow.",
      time: '2 days ago',
      icon: <FiCalendar size={24} />,
    },
    // Add more notification records here
    {
      id: 4,
      title: 'New follower',
      description: 'You have a new follower on your profile.',
      time: '3 hours ago',
      icon: <FiMessageCircle size={24} />,
    },
    {
      id: 5,
      title: 'Artwork favorited',
      description: 'Your artwork has been favorited by a user.',
      time: '1 day ago',
      icon: <FiShoppingBag size={24} />,
    },
    {
      id: 6,
      title: 'Event update',
      description: 'There is a change in the event schedule.',
      time: '5 minutes ago',
      icon: <FiCalendar size={24} />,
    },
    {
      id: 7,
      title: 'New comment',
      description: 'You have a new comment on your artwork.',
      time: '2 hours ago',
      icon: <FiMessageCircle size={24} />,
    },
    {
      id: 8,
      title: 'Artwork featured',
      description: 'Your artwork has been featured in the gallery.',
      time: '4 days ago',
      icon: <FiShoppingBag size={24} />,
    },
    {
      id: 9,
      title: 'Event reminder',
      description: 'Reminder: Art exhibition starts tomorrow.',
      time: '6 hours ago',
      icon: <FiCalendar size={24} />,
    },
    {
      id: 10,
      title: 'New like',
      description: 'Your artwork has received a new like.',
      time: '1 week ago',
      icon: <FiMessageCircle size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Notifications</h1>
        <div className="container mx-auto px-4 py-8">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-lg p-6 mb-4 cursor-pointer"
            >
              <div className="flex items-center mb-2">
                <div className="mr-2 text-white">{notification.icon}</div>
                <h2 className="text-lg font-semibold text-white">{notification.title}</h2>
              </div>
              <p className="text-gray-400 mb-2">{notification.description}</p>
              <p className="text-gray-400">{notification.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
