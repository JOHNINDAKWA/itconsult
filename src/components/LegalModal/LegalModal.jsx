import React from 'react';
import './LegalModal.css';

const LegalModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="legal-modal-overlay" onClick={onClose}>
            <div className="legal-modal-content" onClick={e => e.stopPropagation()}>
                <div className="legal-modal-header">
                    <h4 className="legal-modal-title">{title}</h4>
                    <button className="legal-modal-close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="legal-modal-body">
                    {content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LegalModal;