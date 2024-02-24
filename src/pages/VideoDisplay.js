import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VideoPage = () => {
  const { videoName } = useParams();
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/videos/${videoName}`
        );
        if (!response.ok) {
          throw new Error("Video not found");
        }
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setVideoUrl(objectURL);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, [videoName]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#BCD7F5",
        backgroundImage: 'url("/VideoBg.png")',
        backgroundSize: "cover",
      }}
    >
      {videoUrl && (
        <video
          src={videoUrl}
          controls
          loop
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "40px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 40)",
          }}
        />
      )}
    </div>
  );
};

export default VideoPage;
