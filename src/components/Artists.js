import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Confetti from 'react-dom-confetti';

const Artist = () => {
  const [artists, setArtists] = useState([]);
  const [followedArtists, setFollowedArtists] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=12&gender=female');
      const artistsData = response.data.results.map((result) => ({
        id: result.login.uuid,
        name: `${result.name.first} ${result.name.last}`,
        username: result.login.username,
        picture: result.picture.large,
        isFollowed: false,
      }));
      setArtists(artistsData);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  };

  const followArtist = (artistId) => {
    const updatedArtists = artists.map((artist) => {
      if (artist.id === artistId) {
        return { ...artist, isFollowed: true };
      }
      return artist;
    });
    const followedArtist = artists.find((artist) => artist.id === artistId);
    setArtists(updatedArtists);
    setFollowedArtists((prevFollowedArtists) => [...prevFollowedArtists, followedArtist]);
    setSelectedArtist(followedArtist);
    setShowDialog(true);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  };

  const DialogBox = ({ artist, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-gray-900">
      <div className="bg-white w-1/3 p-4 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">{artist.name}</h2>
        <img src={artist.picture} alt={artist.name} className="w-48 h-48 rounded-full mx-auto mb-4" />
        <p className="text-gray-400">@{artist.username}</p>
        <p className="text-lg mt-4">
          Thank you for following {artist.name}! You will now receive updates about their latest artworks and exhibitions.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white mt-4 ml-auto block"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Discover Talented Artists</h1>
          <p className="text-lg">
            Explore the profiles of marginalized voices, local artists, and women entrepreneurs. Follow their inspiring
            journey and stay connected with their creative endeavors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => {
                setSelectedArtist(artist);
                setShowDialog(true);
              }}
            >
              <img src={artist.picture} alt={artist.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">{artist.name}</h2>
                <p className="text-gray-300 mb-4">@{artist.username}</p>
                {artist.isFollowed ? (
                  <button className="px-4 py-2 rounded-lg bg-purple-600 text-white" disabled>
                    Followed
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      followArtist(artist.id);
                    }}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white"
                  >
                    Follow
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-white mb-4">Following Artists</h2>
          {followedArtists.length === 0 ? (
            <p className="text-lg text-gray-300">You are not following any artists.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {followedArtists.map((artist) => (
                <motion.li
                  key={artist.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-purple-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => {
                    setSelectedArtist(artist);
                    setShowDialog(true);
                  }}
                >
                  <img src={artist.picture} alt={artist.name} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">{artist.name}</h2>
                    <p className="text-gray-300 mb-4">@{artist.username}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
        <Confetti active={showConfetti} />
        {showDialog && (
          <DialogBox
            artist={selectedArtist}
            onClose={() => {
              setSelectedArtist(null);
              setShowDialog(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Artist;
