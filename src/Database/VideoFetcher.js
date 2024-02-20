import React, { useState, useEffect } from 'react';

const VideoFetcher = ({ videoName }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch(`/api/videos/${videoName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVideo(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [videoName]);

  if (!video) {
    return <div>Loading video...</div>;
  }

  return (
    <div>
      <video controls>
        <source src={`data:${video.video.contentType};base64,${video.video.data.toString('base64')}`} type={video.video.contentType} />
        Your browser does not support the video tag.
      </video>
      <h5>{video.name}</h5>
      <p>{video.desc}</p>
    </div>
  );
};

export default VideoFetcher;