import React from 'react';
import './Spinner.css';

export default function Spinner({ size = 40, color = '#2196F3', thickness = 4 }) {
  return (
    <div className="spinner" style={{ width: size, height: size }}>
      <div className="spinner-border" style={{ borderWidth: thickness, borderTopColor: color }}></div>
    </div>
  );
}