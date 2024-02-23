import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { name } = useParams();
  const [videoSrc, setVideoSrc] = useState(null);
  const videoRef = useRef(null); 

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`http://localhost:3007/api/videos/${name}`);
        if (!response.ok) {
          throw new Error('Video not found');
        }
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setVideoSrc(objectURL);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [name]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('play', () => {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
          videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) { 
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { 
          videoRef.current.msRequestFullscreen();
        }
      });
    }
  }, []);

  if (!videoSrc) {
    return <div>Loading video...</div>;
  }

  return (
    <div>
      <video ref={videoRef} controls autoPlay src={videoSrc} alt="Video" />
    </div>
  );
};

export default VideoPage;
