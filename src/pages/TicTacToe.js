// TicTacToe.js
import React, { useState, useRef, useEffect } from 'react';
import './tt.css'
const TicTacToe = () => {
    const [state, setState] = useState({
        isWinner: false,
        userClick:  0,
        computerClick:  0,
        isPlayerTurn: true,
        tieGames:  0,
        computerWin:  0,
        playerWin:  0,
        isClickable: true
      });
    
      const blocks = useRef([]);
    
      useEffect(() => {
        // Initialize the game state
        resetGame();
      }, []); // Empty array means this effect runs once on mount
      
    
      const handleClick = (index) => {
        if (!state.isClickable) {
          return;
        }
    
        if (blocks.current[index].className.length >  0) {
          return;
        }
    
        if (state.isWinner) {
          return;
        }
    
        blocks.current[index].className = "x";
        blocks.current[index].classList.add('x');
        checkForWinner();
        setState(prevState => ({
          ...prevState,
          userClick: prevState.userClick +  1,
          isClickable: false
        }));
        setTimeout(() => {
          computerTurn(index);
        },  0);
      };
    
      const resetGame = () => {
        blocks.current.forEach((block, index) => {
          block.classList = "";
        });
    
        setState({
          userClick:  0,
          computerClick:  0,
          isWinner: false,
          isClickable: true
        });
      };
    
      const computerTurn = () => {
        if (state.isWinner) {
          return;
        }
    
        let notBlueOrRed = [];
        let isAvailable = false;
        blocks.current.forEach((block, index) => {
          if (block.className.length ===  0) {
            notBlueOrRed.push(index +  1);
            isAvailable = true;
          }
        });
    
        if (isAvailable) {
          setTimeout(() => {
            var randomItem = notBlueOrRed[Math.floor(Math.random() * notBlueOrRed.length)];
            blocks.current[randomItem -  1].className = "o";
            blocks.current[randomItem -  1].classList.add('o');
            checkForWinner();
            setState(prevState => ({
              ...prevState,
              computerClick: prevState.computerClick +  1,
              isClickable: true
            }));
          },  1000);
        } else {
          if (!state.isWinner) {
            setState(prevState => ({
              ...prevState,
              tieGames: prevState.tieGames +  1
            }), () => {
              setTimeout(() => {
                resetGame();
              },  2000);
            });
          }
        }
      };
    
      const checkForWinner = () => {
        const combinationCollection = [[1,  2,  3], [4,  5,  6], [7,  8,  9], [1,  4,  7], [2,  5,  8], [3,  6,  9], [1,  5,  9], [3,  5,  7]];
        combinationCollection.forEach((data) => {
          if ((blocks.current[data[0] -  1].className && blocks.current[data[1] -  1].className && blocks.current[data[2] -  1].className)
            && (blocks.current[data[0] -  1].className.toLowerCase() === blocks.current[data[1] -  1].className.toLowerCase() && blocks.current[data[1] -  1].className.toLowerCase() === blocks.current[data[2] -  1].className.toLowerCase() && blocks.current[data[2] -  1].className.toLowerCase() === blocks.current[data[0] -  1].className.toLowerCase())) {
            setState(prevState => ({
              ...prevState,
              isWinner: true,
              isUserWinnder: (blocks.current[data[0] -  1].className === "x"),
              playerWin: (blocks.current[data[0] -  1].className === "x") ? (prevState.playerWin +  1) : prevState.playerWin,
              computerWin: (blocks.current[data[0] -  1].className === "o") ? (prevState.computerWin +  1) : prevState.computerWin
            }), () => {
              blocks.current[data[0] -  1].classList.add('blink');
              blocks.current[data[1] -  1].classList.add('blink');
              blocks.current[data[2] -  1].classList.add('blink');
              setTimeout(() => {
                resetGame();
              },  2000);
            });
          }
        });
      };

  return (
    <div className="game">
      <div className="board">
        {[...Array(9)].map((_, index) => (
          <div key={index} onClick={() => handleClick(index +  1)} className={`square ${index <  3 ? 'top' : ''} ${index ===  0 || index ===  3 || index ===  6 ? 'left' : ''} ${index ===  2 || index ===  5 || index ===  8 ? 'right' : ''} ${index ===  6 || index ===  7 || index ===  8 ? 'bottom' : ''}`} >
            <div ref={el => blocks.current[index] = el}></div>
          </div>
        ))}
      </div>
      <div className="scores p1">
        <p className="player1"><span className="p1">Player</span><span className="p2">Player  1</span> (<span className="x"></span>)<span className="score">{state.playerWin}</span></p>
        <p className="ties">Tie<span className="score">{state.tieGames}</span></p>
        <p className="player2"><span className="p1">Computer</span><span className="p2">Player  2</span> (<span className="o"></span>)<span className="score">{state.computerWin}</span></p>
      </div>
    </div>
  );
};

export default TicTacToe;
