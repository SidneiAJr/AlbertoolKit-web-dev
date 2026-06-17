import React, { useState } from 'react';
import './RatingStars.css';

export default function RatingStars({ total = 5, value = 0, onChange, readonly = false }) {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  const handleClick = (i) => {
    if (readonly) return;
    setRating(i);
    onChange && onChange(i);
  };

  const displayRating = readonly ? value : rating;

  return (
    <div className="rating-stars">
      {[...Array(total)].map((_, i) => {
        const starValue = i + 1;
        return (
          <span
            key={i}
            className={`star ${starValue <= displayRating ? 'active' : ''} ${starValue <= hover && !readonly ? 'hover' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => !readonly && setHover(starValue)}
            onMouseLeave={() => !readonly && setHover(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}