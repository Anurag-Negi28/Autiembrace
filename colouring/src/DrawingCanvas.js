import React, { useRef, useEffect } from 'react';

const DrawingCanvas = ({ color, onUpdateDrawing, toolMode, penSize, eraserSize }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set the canvas background to white
    context.fillStyle = '#ffffff';
    context.fillRect(0,  0, canvas.width, canvas.height);

    // Set initial canvas properties
    context.lineWidth = toolMode === 'eraser' ? eraserSize : penSize;
    context.strokeStyle = toolMode === 'eraser' ? '#ffffff' : color;

    let drawing = false;

    const startDrawing = (event) => {
      drawing = true;
      context.beginPath();
      context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    };

    const finishDrawing = () => {
      drawing = false;
      context.closePath();
    };

    const draw = (event) => {
      if (!drawing) return;
      context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      context.stroke();
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', finishDrawing);
    canvas.addEventListener('mousemove', draw);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mouseup', finishDrawing);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [color, toolMode, penSize, eraserSize]);

  return <canvas ref={canvasRef} width="800" height="600" />;
};

export default DrawingCanvas;
