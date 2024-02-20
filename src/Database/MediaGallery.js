import React, { useState, useEffect } from 'react';

const MediaGallery = () => {
  const [media, setMedia] = useState({ images: [], videos: [] });

  useEffect(() => {
    fetch('/api/media')
      .then(response => response.json())
      .then(data => setMedia(data))
      .catch(error => console.error('Error fetching media:', error));
  }, []);

  return (
    <div>
      <h1>Images</h1>
      {media.images.map(image => (
        <img
          key={image._id}
          src={`data:image/${image.img.contentType};base64,${image.img.data.toString('base64')}`}
          alt={image.name}
        />
      ))}

      <h1>Videos</h1>
      {media.videos.map(video => (
        <video controls key={video._id}>
          <source
            src={`data:video/${video.video.contentType};base64,${video.video.data.toString('base64')}`}
            type={video.video.contentType}
          />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default MediaGallery;
