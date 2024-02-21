import React, { useState, useEffect } from 'react';

const ImageDisplay = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3005/api/images/Memory-Game')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL); 
      })
      .catch(error => console.error('Error fetching image data:', error));
  }, []);

  if (!imageSrc) {
    return <div>Loading image...</div>;
  }

  return (
    <div>
      <img src={imageSrc} alt="Memory Game" />
    </div>
  );
};

export default ImageDisplay;
