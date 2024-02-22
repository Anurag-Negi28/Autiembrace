// VideoDisplay.js
import React, { useState, useEffect } from 'react';

const VideoDisplay = ({ apiUrl }) => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob(); // This will handle the binary data correctly
      })
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        setVideoSrc(objectURL);   
      })
      .catch(error => console.error('Error fetching video data:', error));
  }, [apiUrl]);

  if (!videoSrc) {
    return <div>Loading video...</div>;
  }

  return (
    <div>
      <video controls src={videoSrc} alt="Video" />
    </div>
  );
};

export default VideoDisplay;
