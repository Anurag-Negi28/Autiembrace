import React from 'react';

const ColorPicker = ({ selectedColor, onColorChange }) => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF']; // Red, Green, Blue, Yellow, Cyan

  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        >
          {selectedColor === color ? '✔️' : ''}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
