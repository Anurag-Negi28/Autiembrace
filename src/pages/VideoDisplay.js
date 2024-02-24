import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const VideoPage = () => {
  const { videoName } = useParams();
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/videos/${videoName}`);
        if (!response.ok) {
          throw new Error('Video not found');
        }
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setVideoUrl(objectURL);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [videoName]);

  return (
    <div>
      {videoUrl && <video src={videoUrl} controls loop />}
    </div>
  );
};

export default VideoPage;
