// Message.js
import React, { useState } from 'react';
import Carousel from '../components/Slider';
import FloatingEmoji from '../components/AnimatedComponents/FloatingEmojis';

const emotions = [
  { name: 'Sad', emoji: '😢' },
  { name: 'Happy', emoji: '😊' },
  { name: 'Productive', emoji: '💪' },
  { name: 'Stressed', emoji: '😰' },
  { name: 'Lonely', emoji: '😔' }
];

const gallery = ['new_bie_proj/first/IMG-20240918-WA0013.jpg',
        'new_bie_proj/first/IMG-20240918-WA0014.jpg',
        'new_bie_proj/first/IMG-20240918-WA0015.jpg',
        'new_bie_proj/first/IMG-20240918-WA0016.jpg',
        'new_bie_proj/first/IMG-20240918-WA0017.jpg',
        'new_bie_proj/first/IMG-20240918-WA0018.jpg',
        'new_bie_proj/first/IMG-20240918-WA0019.jpg',
        'new_bie_proj/first/IMG-20240918-WA0020.jpg',
        'new_bie_proj/first/IMG-20240918-WA0021.jpg',
        'new_bie_proj/first/IMG-20240918-WA0022.jpg']; 
const title = ["our first trip together", "our second trip together"]

function Message() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    // Add functionality to notify the partner
    alert(`${emotion.name} clicked!`);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowImage(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % gallery.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex - 1 + gallery.length) % gallery.length);
  };

  return (
    <div class="bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300">
      <div class="h-[100%] w-[96%] bg-blue-200 bg-opacity-80 p-[2rem] m-[1rem] itms-center">
        <h2 class="text-3xl font-bold text-center m-[9px]">How are you feeling today?</h2>
        <div className="flex space-x-4 justify-between ">
          {emotions.map((emotion, index) => (
            <button
              key={index}
              className="flex flex-row text-xl text-6xl bg-blue-900 text-white px-2 py-2 rounded outline-black"
              onClick={() => handleEmotionClick(emotion)}
            >
              {emotion.emoji} {emotion.name}
            </button>
          ))}
        </div>

        {/* Show the selected emotion */}
        {selectedEmotion && (
          <div className="mt-4 justify-center">
            <p>You are feeling: {selectedEmotion.name} {selectedEmotion.emoji}</p>
          </div>
        )}
      </div>
      <div class="m-[1rem] ">
          <p class="text-5xl font-bold">Here's some memories for you🤗:</p>
          {/* call the gallery function here */}
          <Carousel/>
      </div>

      <div class="m-[2rem] bg-pink-300 p-[1rem]"> 
        <p class="text-3xl" > Here’s to many more memories🫂, kisses😽, and all the love💝 we share. 💞....</p>
      </div>
      <FloatingEmoji />
  </div>

  );
}

export default Message;
