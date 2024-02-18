import { useEffect, useState } from 'react';

function Countdown({ endGame, gameOver }) {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    setCountdown(30);
  }, []);

  useEffect(() => {
    let timeout = null;
    if (countdown && !gameOver) {
      timeout = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      endGame();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  }, [countdown]);

  return (
    <div className='countdown'>
      <span>⏳</span>
      {countdown}
    </div>
  )
}

export default Countdown;
