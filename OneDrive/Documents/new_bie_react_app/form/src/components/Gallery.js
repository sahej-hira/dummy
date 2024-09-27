import React, { useState } from 'react';

const ImageGallery = () => {
  const images = [
    {
      title: 'Our first trip together:',
      description: 'Our first trip together:',
      images: [
        'new_bie_proj/first/IMG-20240918-WA0013.jpg',
        'new_bie_proj/first/IMG-20240918-WA0014.jpg',
        'new_bie_proj/first/IMG-20240918-WA0015.jpg',
        'new_bie_proj/first/IMG-20240918-WA0016.jpg',
        'new_bie_proj/first/IMG-20240918-WA0017.jpg',
        'new_bie_proj/first/IMG-20240918-WA0018.jpg',
        'new_bie_proj/first/IMG-20240918-WA0019.jpg',
        'new_bie_proj/first/IMG-20240918-WA0020.jpg',
        'new_bie_proj/first/IMG-20240918-WA0021.jpg',
        'new_bie_proj/first/IMG-20240918-WA0022.jpg'
      ]
    },
    {
      title: 'Our second trip together:',
      description: '',
      images: [

        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
        'IMG-20240814-WA0038.jpg',
        'IMG-20240814-WA0039.jpg',
      ]
    },
    // Add more image objects here
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleCloseZoom = (event) => {
    if (event.target !== event.currentTarget) return; // Close only if clicked outside the image
    setIsZoomed(false);
  };

  return (
    <div className="image-gallery">
      <h2>{images[currentImage]}</h2>
      <div className="image-stack">
        {images[currentImage].images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={images[currentImage].title}
            onClick={() => setIsZoomed(true)}
          />
        ))}
      </div>
      {isZoomed && (
        <div className="zoomed-image-container" onClick={handleCloseZoom}>
          <img src={images[currentImage].images[0]} alt={images[currentImage].title} />
          <div className="image-details">
            <p>{images[currentImage].description}</p>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;