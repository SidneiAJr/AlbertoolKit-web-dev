import React, { useState } from 'react';
import './DatePicker.css';

export default function DatePicker({ value, onChange, placeholder = 'DD/MM/YYYY' }) {
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  };

  return (
    <div className="datepicker">
      <input
        type="text"
        className="datepicker-input"
        value={value ? formatDate(value) : ''}
        placeholder={placeholder}
        onFocus={() => setShowCalendar(true)}
        readOnly
      />
      {showCalendar && (
        <div className="datepicker-calendar">
          <input
            type="date"
            className="datepicker-native"
            value={value || ''}
            onChange={(e) => {
              onChange(e.target.value);
              setShowCalendar(false);
            }}
          />
          <button onClick={() => setShowCalendar(false)} className="datepicker-close">Fechar</button>
        </div>
      )}
    </div>
  );
}