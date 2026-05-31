import React, { useState } from 'react';
import './Carousel.css';

export default function Carousel({ items, autoPlay = false, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % items.length);
  const prev = () => setCurrent((current - 1 + items.length) % items.length);

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prev}>❮</button>
      <div className="carousel-container">
        <div className="carousel-slide" style={{ transform: `translateX(-${current * 100}%)` }}>
          {items.map((item, i) => (
            <div key={i} className="carousel-item">{item}</div>
          ))}
        </div>
      </div>
      <button className="carousel-btn next" onClick={next}>❯</button>
      <div className="carousel-dots">
        {items.map((_, i) => (
          <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}></span>
        ))}
      </div>
    </div>
  );
}