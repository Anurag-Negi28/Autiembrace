// Card.js
import React from 'react';

const Card = ({ card, onCardClick }) => (
  <div
    className={`card ${card.isFlipped ? 'flipped' : ''}`}
    onClick={() => onCardClick(card.id)}
  >
    {card.isFlipped || card.isMatched ? card.value : ''}
  </div>
);

export default Card;
