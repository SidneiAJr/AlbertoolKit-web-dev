import React from 'react';
import './ModalColorido.css';

export default function ModalColorido({ isOpen, onClose, title, children, cor = 'azul' }) {
  if (!isOpen) return null;

  const cores = {
    azul: 'linear-gradient(135deg, #2196F3, #1976D2)',
    vermelho: 'linear-gradient(135deg, #f44336, #d32f2f)',
    verde: 'linear-gradient(135deg, #4CAF50, #388E3C)',
    roxo: 'linear-gradient(135deg, #9C27B0, #7B1FA2)'
  };

  return (
    <div className="modal-colorido-overlay" onClick={onClose}>
      <div className="modal-colorido-content" style={{ background: cores[cor] || cores.azul }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-colorido-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <div className="modal-colorido-body">{children}</div>
        <button className="modal-colorido-btn" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}