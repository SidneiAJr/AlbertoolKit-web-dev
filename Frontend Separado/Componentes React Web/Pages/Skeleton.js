import React from 'react';
import './Skeleton.css';

export default function Skeleton({ width, height, borderRadius = '8px', margin = '0' }) {
  return (
    <div className="skeleton" style={{ width, height, borderRadius, margin }}></div>
  );
}