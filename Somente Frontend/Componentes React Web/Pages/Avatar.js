import React from 'react';
import './Avatar.css';

export default function Avatar({ src, name, size = 50, rounded = true }) {
  const initials = name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="avatar" style={{ width: size, height: size, borderRadius: rounded ? '50%' : '12px' }}>
      {src ? (
        <img src={src} alt={name} className="avatar-img" />
      ) : (
        <div className="avatar-initials" style={{ fontSize: size * 0.4 }}>
          {initials || '?'}
        </div>
      )}
    </div>
  );
}