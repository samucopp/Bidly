import React from 'react';
import './GenericModal.css';

const GenericModal = ({ 
  isOpen, 
  onClose, 
  children, 
  variant = 'default',
  showCloseButton = true,
  className = '' 
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-container ${variant} ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {showCloseButton && (
          <button 
            onClick={onClose}
            className="modal-close-button"
            aria-label="Close modal"
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default GenericModal;