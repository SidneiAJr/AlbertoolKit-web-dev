import React from 'react';
import './Select.css';

export default function Select({ options, value, onChange, placeholder = 'Selecione...' }) {
  return (
    <div className="select-container">
      <select className="select" value={value} onChange={onChange}>
        <option value="" disabled>{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className="select-arrow">▼</span>
    </div>
  );
}