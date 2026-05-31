import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({ value = 0, max = 100, showLabel = true, color = '#2196F3' }) {
  const percent = (value / max) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${percent}%`, backgroundColor: color }}></div>
      {showLabel && <span className="progress-bar-label">{Math.round(percent)}%</span>}
    </div>
  );
}