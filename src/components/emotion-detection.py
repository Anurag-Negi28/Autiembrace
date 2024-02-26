# Emotion-detection.py

import json
import io
import base64
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from fastapi import FastAPI, WebSocket
import cv2
import numpy as np
from fer import FER

app = FastAPI()
detector = FER()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3001",   
    "http://localhost:8000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()  
    try:
        while True:
            data = await websocket.receive_text()  
            
            await websocket.send_text(f"Message text was: {data}")
    except WebSocketDisconnect:
       
        await websocket.close()
        print("WebSocket disconnected")


@app.websocket("/")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        try:
            payload = await websocket.receive_text()
            payload = json.loads(payload)
            imageByt64 = payload['data']['image'].split(',')[1]
            image = np.fromstring(base64.b64decode(imageByt64), np.uint8)
            image = cv2.imdecode(image, cv2.IMREAD_COLOR)
            prediction = detector.detect_emotions(image)
            response = {
                "predictions": prediction[0]['emotions'],
                "emotion": max(prediction[0]['emotions'], key=prediction[0]['emotions'].get)
            }
            await websocket.send_json(response)
            await websocket.close()
        except:
           await websocket.close()