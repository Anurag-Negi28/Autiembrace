import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MemoryGame from './pages/MemoryGame'; 
import { ColorPicker, DrawingCanvas } from './pages/DrawingComponents';
import GameComponent from './pages/GameComponent';   
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import RockPaperScissors from './pages/RockPaperScissors'; 
import TicTacToe from './pages/TicTacToe';
import LoginPage from './pages/LoginPage';
import AutiEmbrace from './pages/AutiEmbrace';
import PlayGames from './pages/PlayGames';
import Learn from "./pages/Learn";
import Relax from "./pages/Relax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [color, setColor] = useState('#000000'); 
  const [drawingData, setDrawingData] = useState([]);
  const [toolMode, setToolMode] = useState('pen'); 
  const [penSize, setPenSize] = useState(5); 
  const [eraserSize, setEraserSize] = useState(10);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (location.action !== 'POP') {
      window.scrollTo(0,   0);
    }
  }, [location]);


  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = 'Home';
        metaDescription = 'Welcome to the home page.';
        break;
      case '/sign-up':
        title = 'Sign Up';
        metaDescription = 'Sign up for an account.';
        break;
      case '/-login-page':
        title = 'Login';
        metaDescription = 'Log in to your account.';
        break;
      case '/autiembrace':
        title = 'Auti Embrace';
        metaDescription = 'Experience the Auti Embrace.';
        break;
      case '/playgames':
        title = 'Play Games';
        metaDescription = 'Play various games.';
        break;
      case '/game1':
        title = 'Game';
        metaDescription = 'Play the game.';
        break;
      case '/draw':
        title = 'Game2';
        metaDescription = 'Play the game.';
        break;
      case '/memoryGame': 
        title = 'Memory Game';
        metaDescription = 'Play the memory game.';
        break;
      case '/tt': 
        title = 'fghuiop';
        metaDescription = 'Play the memory game.';
        break;

      case '/rps': 
        title = 'Memory Game';
        metaDescription = 'Play the memory game.';
        break;
      case "/learn":
          title = "Learn";
          metaDescription = "";
          break;
      case "/relax":
          title = "Relax";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const toggleToolMode = () => {
    setToolMode(prevMode => prevMode === 'pen' ? 'eraser' : 'pen');
  };

  const handlePenSizeChange = (event) => {
    setPenSize(parseInt(event.target.value,   10));
  };

  const handleEraserSizeChange = (event) => {
    setEraserSize(parseInt(event.target.value,   10));
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/-login-page" element={<LoginPage />} />
      <Route path="/autiembrace" element={<AutiEmbrace />} />
      <Route path="/playgames" element={<PlayGames />} />
      <Route path="/game1" element={<GameComponent />} />
      <Route path="/draw" element={
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
      } />
      <Route path="/memoryGame" element={<MemoryGame />} /> 
      <Route path="/tt" element={<TicTacToe />} />
      <Route path="/rps" element={<RockPaperScissors />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/relax" element={<Relax />} />
    </Routes>
  );
}

export default App;
