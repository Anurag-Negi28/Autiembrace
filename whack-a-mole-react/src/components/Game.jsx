import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import Config from './Config';

function Game() {
  const [gameOver, setGameOver] = useState(true);
  const [moles, setMoles] = useState([]);
  const [score, setScore] = useState(0);
  const [moleTimeout, setMoleTimeout] = useState(null);
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(4);
  const [fileDataURL, setFileDataURL] = useState(null);

  const generateMoles = () => {
    const newMoles = [];
    for (let i = 0; i < columns * rows; i++) {
      newMoles.push({ id: i, active: false });
    }
    setMoles(newMoles);
  }

  const activateMole = () => {
    const moleIndex = Math.floor(Math.random() * columns * rows);
    setMoles((prevMoles) => {
      const updatedMoles = [...prevMoles];
      updatedMoles[moleIndex].hit = false;
      updatedMoles[moleIndex].active = true;
      return updatedMoles;
    });

    setTimeout(() => {
      deactivateMole(moleIndex);
    }, Math.floor(Math.random() * 2000));
  }

  const deactivateMole = (index) => {
    setMoles((prevMoles) => {
      const updatedMoles = [...prevMoles];
      updatedMoles[index].active = false;
      return updatedMoles;
    });

    setTimeout(() => {
      activateMole();
    }, Math.floor(Math.random() * 1000));
  }

  const startGame = () => {
    setScore(0);
    setMoles([]);
    setGameOver(false);
    generateMoles();
    setMoleTimeout(
      setTimeout(() => {
        activateMole();
      }, Math.floor(Math.random() * 1000))
    );
  }

  const handleMoleClick = (index) => {
    setMoles((prevMoles) => {
      const updatedMoles = [...prevMoles];
      const hitMole = updatedMoles[index];
      hitMole.hit = true;
      setTimeout(() => {
        hitMole.active = false;
      }, 2000);
      return updatedMoles;
    });
    setScore(score + 1);
  }

  const endGame = () => {
    setGameOver(true);
  }

  useEffect(() => {
    return () => {
      clearTimeout(moleTimeout);
    };
  }, [moleTimeout]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setFileDataURL(result);
        }
      }
      fileReader.readAsDataURL(file);
    }
  }

  if (gameOver) {
    return (
      <>
        <h2>Score: {score}</h2>
        <Config
          handleImageChange={handleImageChange}
          columns={columns}
          setColumns={setColumns}
          rows={rows}
          setRows={setRows}
        />
        <button onClick={startGame}>Start</button>
      </>
    )
  }

  return (
    <>
      <h2>Score: {score}</h2>
      <Countdown endGame={endGame} gameOver={gameOver} />
      <div
        className='mole-container'
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {moles.map((mole, index) => (
          <div key={mole.id} className={`mole ${mole.active ? 'active' : ''}`}>
            <div onClick={() => handleMoleClick(index)}>
              {mole.hit ? (
                '💥'
              ) : fileDataURL ? (
                <img src={fileDataURL} draggable='false' />
              ) : (
                '🐹'
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Game;
