import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';

const choices = ['rock', 'paper', 'scissors'];

const App = () => {
  const [result, setResult] = useState(null);

  const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

  const handleChoice = (choice) => {
    const compChoice = getRandomChoice();

    if (choice === compChoice) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  const resetGame = () => {
    setResult(null);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Rock, Paper, Scissors
      </Typography>
      {result ? (
        <div>
          <Typography variant="h5" align="center" gutterBottom>
            {result}
          </Typography>
          <Button onClick={resetGame} variant="contained" color="primary">
            Play Again
          </Button>
        </div>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {choices.map((choice) => (
            <Grid key={choice} item>
              <Button onClick={() => handleChoice(choice)} variant="contained" color="primary">
                <img
                  src={`/images/${choice}.png`}
                  alt={choice}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default App;
