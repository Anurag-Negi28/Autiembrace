// MemoryGame.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import './MemoryGame.css';

const MemoryGame = () => {
  const [cards, setCards] = useState([
    { id:   1, value: 'A', isFlipped: false, isMatched: false },
    { id:   2, value: 'A', isFlipped: false, isMatched: false },
    { id:   3, value: 'B', isFlipped: false, isMatched: false },
    { id:   4, value: 'B', isFlipped: false, isMatched: false },
    { id:   5, value: 'C', isFlipped: false, isMatched: false },
    { id:   6, value: 'C', isFlipped: false, isMatched: false },
    { id:   7, value: 'D', isFlipped: false, isMatched: false },
    { id:   8, value: 'D', isFlipped: false, isMatched: false },
    { id:   9, value: 'E', isFlipped: false, isMatched: false },
    { id:   10, value: 'E', isFlipped: false, isMatched: false },
    { id:   11, value: 'F', isFlipped: false, isMatched: false },
    { id:   12, value: 'F', isFlipped: false, isMatched: false },
    { id:   13, value: 'G', isFlipped: false, isMatched: false },
    { id:   14, value: 'G', isFlipped: false, isMatched: false },
    { id:   15, value: 'H', isFlipped: false, isMatched: false },
    { id:   16, value: 'H', isFlipped: false, isMatched: false },
    { id:   17, value: 'I', isFlipped: false, isMatched: false },
    { id:   18, value: 'I', isFlipped: false, isMatched: false },
    { id:   19, value: 'J', isFlipped: false, isMatched: false },
    { id:   20, value: 'J', isFlipped: false, isMatched: false },
    { id:   21, value: 'K', isFlipped: false, isMatched: false },
    { id:   22, value: 'K', isFlipped: false, isMatched: false },
    { id:   23, value: 'L', isFlipped: false, isMatched: false },
    { id:   24, value: 'L', isFlipped: false, isMatched: false },
    { id:   25, value: 'M', isFlipped: false, isMatched: false },
    { id:   26, value: 'M', isFlipped: false, isMatched: false },
    { id:   27, value: 'N', isFlipped: false, isMatched: false },
    { id:   28, value: 'N', isFlipped: false, isMatched: false },
    { id:   29, value: 'O', isFlipped: false, isMatched: false },
    { id:   30, value: 'O', isFlipped: false, isMatched: false },
    { id:   31, value: 'P', isFlipped: false, isMatched: false },
    { id:   32, value: 'P', isFlipped: false, isMatched: false },
  ]);

  const handleCardClick = (cardId) => {
    setCards((prevCards) => {
      const newCards = prevCards.map((card) =>
        card.id === cardId && !card.isFlipped && !card.isMatched
          ? { ...card, isFlipped: true }
          : card
      );

      // If there are two flipped cards, check for a match
      const flippedCards = newCards.filter((card) => card.isFlipped);
      if (flippedCards.length ===   2) {
        setTimeout(() => {
          checkMatch(flippedCards);
        },   1000);
      }

      return newCards;
    });
  };

  const checkMatch = (flippedCards) => {
    const [card1, card2] = flippedCards;

    if (card1.value === card2.value) {
      const updatedCards = cards.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, isMatched: true }
          : card
      );

      setCards(updatedCards);
    } else {
      const updatedCards = cards.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, isFlipped: false }
          : card
      );

      setCards(updatedCards);
    }
  };

  useEffect(() => {
    const allCardsMatched = cards.every((card) => card.isMatched);
    if (allCardsMatched) {
      alert('Congratulations! You matched all cards!');
    }
  }, [cards]);

  return (
    <div className="memory-game">
      {cards.map((card) => (
        <Card key={card.id} card={card} onCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default MemoryGame;
