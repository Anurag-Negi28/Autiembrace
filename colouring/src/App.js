import React, { useState } from 'react';
import './App.css';
import DrawingCanvas from './DrawingCanvas';
import ColorPicker from './ColorPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [color, setColor] = useState('#000000'); // Default color black
  const [drawingData, setDrawingData] = useState([]);
  const [toolMode, setToolMode] = useState('pen'); // Default tool is pen
  const [penSize, setPenSize] = useState(5); // Default pen size
  const [eraserSize, setEraserSize] = useState(10); // Default eraser size

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const toggleToolMode = () => {
    setToolMode(prevMode => prevMode === 'pen' ? 'eraser' : 'pen');
  };

  const handlePenSizeChange = (event) => {
    setPenSize(parseInt(event.target.value,  10));
  };

  const handleEraserSizeChange = (event) => {
    setEraserSize(parseInt(event.target.value,  10));
  };

  return (
    <div className="App">
      <h1>Simple Drawing App</h1>
      <div className="controls">
        <ColorPicker selectedColor={color} onColorChange={handleColorChange} />
        <label htmlFor="penSizeSlider">Pen Size:</label>
        <input
          id="penSizeSlider"
          type="range"
          min="1"
          max="50"
          value={penSize}
          onChange={handlePenSizeChange}
        />
        <label htmlFor="eraserSizeSlider">Eraser Size:</label>
        <input
          id="eraserSizeSlider"
          type="range"
          min="1"
          max="50"
          value={eraserSize}
          onChange={handleEraserSizeChange}
        />
        <button onClick={toggleToolMode}>
          <FontAwesomeIcon icon={faEraser} />
        </button>
      </div>
      <DrawingCanvas color={color} onUpdateDrawing={setDrawingData} toolMode={toolMode} penSize={penSize} eraserSize={eraserSize} />
    </div>
  );
}

export default App;
