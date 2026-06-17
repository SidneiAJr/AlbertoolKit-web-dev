import React from 'react';
import './Badge.css';

export default function Badge({ children, color = '#2196F3', count = null }) {
  return (
    <div className="badge-container">
      {children}
      {count !== null && (
        <span className="badge" style={{ backgroundColor: color }}>
          {count > 99 ? '99+' : count}
        </span>
      )}
    </div>
  );
}