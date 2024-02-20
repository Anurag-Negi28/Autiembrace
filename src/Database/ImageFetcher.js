import React, { useState, useEffect } from 'react';

const ImageFetcher = ({ imageName }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`/api/images/${imageName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImage(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [imageName]);

  if (!image) {
    return <div>Loading image...</div>;
  }

  return (
    <div>
      <img src={`data:${image.img.contentType};base64,${image.img.data.toString('base64')}`} alt={image.name} />
      <h5>{image.name}</h5>
      <p>{image.desc}</p>
    </div>
  );
};

export default ImageFetcher;