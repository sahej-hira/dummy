import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/floatingEmojiWithHearts.css';

const FloatingEmojiWithHearts = () => {
  const emojis = ['❤️', '✨', '😁', '🎉', '🎈']; // Array of emojis

  const [hearts, setHearts] = useState([]);

  // Generate hearts every second
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((hearts) => [
        ...hearts,
        {
          id: hearts.length, // Unique ID for each heart
          emoji: emojis[Math.floor(Math.random() * emojis.length)], // Random emoji
          left: Math.random() * 90 + '%', // Randomize position
        },
      ]);
    }, 500); // Create a heart every half a second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="floating-container bg-gradient-to-br from-pink-200 via-yellow-200 to-blue-300 bg-opacity-3 z-0 pointer-events-none">
      {/* Hearts piling up at the bottom */}
      <div className="hearts-container z-10" style={{ height: '100px' }}>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="heart"
            style={{ left: heart.left }}
            initial={{ opacity: 0, top: '10px' }}
            animate={{ opacity: 0.7, bottom: '10px' }}
            transition={{ duration: 30 }}
          >
            {heart.emoji}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingEmojiWithHearts;