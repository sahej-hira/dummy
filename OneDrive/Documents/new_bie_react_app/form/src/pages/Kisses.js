// Kisses.js
import React, { useState, useRef } from 'react';
import FloatingKisses from '../components/AnimatedComponents/FloatingKisses';

function Kisses() {
  const [kissCount, setKissCount] = useState(0);
  const videoRef = useRef(null);

  const handleClick = () => {
    setKissCount(kissCount + 1);
    videoRef.current.play();  // Replay the video
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify center bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300">
       <FloatingKisses/>
      <div className="p-[2rem] m-[2rem] w-4/5 h-4/5 flex flex-col items-center justify-center">
        <video ref={videoRef} width="100%" height="100%" controls >
          <source src="vid_of_kias.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center">
        <h2 className="text-xl  mb-4">Want more kisses?</h2>
        <button 
          className="bg-pink-400 text-white px-4 py-2 rounded"
          onClick={handleClick}
        >
          Kiss Me!💋
        </button>
        <p className="mt-2 text-lg">Kiss Count: {kissCount}</p>
      </div>
     
    </div>
  );
}

export default Kisses;
