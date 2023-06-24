import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const userData = response.data.results[0];
      const { name, login, bio, gender, picture } = userData;
      const user = {
        name: `${name.first} ${name.last}`,
        username: login.username,
        bio: bio,
        gender: gender,
        pronouns: 'She/her',
        followers: 1285,
        following: 876,
        posts: 325,
        picture: picture.large,
      };
      setUser(user);
    } catch (error) {
      console.error('Error fetching random user:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-pink-500 to-purple-500 rounded-lg overflow-hidden shadow-lg p-4">
    <div className="max-w-md mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg p-4 hover:scale-105">
      <div className="relative">
        <img
          src={user?.picture || 'https://via.placeholder.com/500'}
          alt="Profile Background"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">{user?.name}</h2>
          <h3 className="text-gray-300 mb-4">@{user?.username}</h3>
          <p className="text-gray-200 mb-4">{user?.bio}</p>
          <div className="flex justify-between items-center text-gray-200">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 12h-4l-3 9L9 3l-3 9H2"
                />
              </svg>
              <span>{user?.followers} followers</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 12h-4l-3 9L9 3l-3 9H2"
                />
              </svg>
              <span>{user?.following} following</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 12h-4l-3 9L9 3l-3 9H2"
                />
              </svg>
              <span>{user?.posts} posts</span>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white mb-2">Pronouns: {user?.pronouns}</h4>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
