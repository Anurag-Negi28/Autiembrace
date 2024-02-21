import React, { useState, useEffect } from 'react';

const ImageFetcher = ({ imageName }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/images/${imageName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // The data object contains the base64-encoded image data
        setImage(data.img);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [imageName]);

  if (loading) {
    return <div>Loading image...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Use the base64-encoded image data in the src attribute
  return (
    <div>
      <img src={`data:${image.contentType};base64,${image.data}`} alt={imageName} />
      <h5>{imageName}</h5>
    </div>
  );
};

export default ImageFetcher;
