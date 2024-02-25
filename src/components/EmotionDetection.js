// Emotion-detection.js

import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import { drawMesh } from "./utilities";

const EmotionDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const blazeface = require("@tensorflow-models/blazeface");

  useEffect(() => {
    const runFaceDetectorModel = async () => {
      const model = await blazeface.load();
      console.log("FaceDetection Model is Loaded..");
      setInterval(() => {
        detect(model);
      }, 100);
    };

    runFaceDetectorModel();
  }, []);

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const face = await net.estimateFaces(video);

      var socket = new WebSocket("ws://localhost:8002");
      socket.addEventListener("open", function (event) {
        console.log("WebSocket connection opened:", event);
      });

      socket.addEventListener("message", function (event) {
        console.log("WebSocket message received:", event.data);
      });

      socket.addEventListener("close", function (event) {
        console.log("WebSocket connection closed:", event);
      });

      socket.addEventListener("error", function (event) {
        console.error("WebSocket error:", event);
      });
      var imageSrc = webcamRef.current.getScreenshot();
      var apiCall = {
        event: "localhost:subscribe",
        data: {
          image: imageSrc,
        },
      };
      socket.onopen = () => socket.send(JSON.stringify(apiCall));
      socket.onmessage = function (event) {
        var pred_log = JSON.parse(event.data);
        document.getElementById("Angry").value = Math.round(
          pred_log["predictions"]["angry"] * 100
        );
        document.getElementById("Neutral").value = Math.round(
          pred_log["predictions"]["neutral"] * 100
        );
        document.getElementById("Happy").value = Math.round(
          pred_log["predictions"]["happy"] * 100
        );
        document.getElementById("Fear").value = Math.round(
          pred_log["predictions"]["fear"] * 100
        );
        document.getElementById("Surprise").value = Math.round(
          pred_log["predictions"]["surprise"] * 100
        );
        document.getElementById("Sad").value = Math.round(
          pred_log["predictions"]["sad"] * 100
        );
        document.getElementById("Disgust").value = Math.round(
          pred_log["predictions"]["disgust"] * 100
        );

        document.getElementById("emotion_text").value = pred_log["emotion"];

        const ctx = canvasRef.current.getContext("2d");
        requestAnimationFrame(() => {
          drawMesh(face, pred_log, ctx);
        });
      };
    }
  };

  return (
    <div
      className="App"
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url('/EmotionRecognitionBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 600,
            top: 20,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
            borderRadius: "50px",
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 600,
            top: 20,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
        <header className="App-header">
          <div
            className="Prediction"
            style={{
              position: "absolute",
              right: 100,
              width: 500,
              top: 100,
              backgroundColor: "#6A7784", // Add a light gray background
              padding: "20px", // Add some padding for readability
              borderRadius: "20px", // Rounded corners
              boxShadow: "0 2px 4px rgba(0, 0, 0, 10)", // Subtle shado
              textAlign: "left",
            }}
          >
            <label
              htmlFor="Angry"
              style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}
            >
              Angry
            </label>{" "}
            <progress id="Angry" value="0" max="100">
              10%
            </progress>
            <br />
            <br />
            <label
              htmlFor="Neutral"
              style={{
                color: "lightgreen",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Neutral
            </label>{" "}
            <progress id="Neutral" value="0" max="100">
              10%
            </progress>
            <br />
            <br />
            <label
              htmlFor="Happy"
              style={{ color: "orange", fontSize: "20px", fontWeight: "bold" }}
            >
              Happy
            </label>{" "}
            <progress id="Happy" value="0" max="100">
              10%
            </progress>
            <br />
            <br />
            <label
              htmlFor="Fear"
              style={{
                color: "lightblue",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Fear
            </label>{" "}
            <progress id="Fear" value="0" max="100">
              10%
            </progress>
            <br />
            <br />
            <label
              htmlFor="Surprise"
              style={{ color: "yellow", fontSize: "20px", fontWeight: "bold" }}
            >
              Surprised
            </label>{" "}
            <progress id="Surprise" value="0" max="100">
              10%
            </progress>
            <br />
            <br />
            <label
              htmlFor="Disgust"
              style={{ color: "pink", fontSize: "20px", fontWeight: "bold" }}
            >
              Disgusted
            </label>{" "}
            <progress id="Disgust" value="0" max="100">
              10%
            </progress>
          </div>
          <input
            id="emotion_text"
            name="emotion_text"
            value="Neutral" // Corrected typo from "vale" to "value"
            style={{
              position: "absolute",
              width: 200,
              height: 50,
              bottom: 60,
              left: 300,
              fontSize: "30px", // Corrected typo from "font-size" to "fontSize"
              background: "#6F9DAC",
              color: "#534242",
              textAlign: "center",
              borderRadius: "20px",
            }}
          />
        </header>
      </div>
    </div>
  );
};

export default EmotionDetection;
