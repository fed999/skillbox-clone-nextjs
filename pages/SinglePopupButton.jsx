import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const SinglePopupButton = ({ buttonId, label, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '500px',
      width: '90%',
      padding: '0',
      borderRadius: '8px',
      border: 'none',
      overflow: 'hidden'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    }
  };

  useEffect(() => {
    const getIframeUrl = () => {
      const baseUrl = 'https://pptsecrets.ru/pl/lite/widget/widget';
      const params = new URLSearchParams({
        id: '1078454',
        ref: document.referrer,
        loc: document.location.href,
        ...(window.clrtQueryData && { clrtQueryData: JSON.stringify(window.clrtQueryData) })
      });
      return `${baseUrl}?${params.toString()}`;
    };

    setIframeUrl(getIframeUrl());
  }, []); // Пустой массив зависимостей означает, что этот эффект будет запущен только один раз после монтирования.

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="popup-button"
      >
        {label}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel={`${title} Modal`}
      >
        <div style={{ position: 'relative' }}>
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#f8f9fa', 
            borderBottom: '1px solid #dee2e6' 
          }}>
            <h3 style={{ margin: 0, color: '#333', textAlign: 'center' }}>
              {title}
            </h3>
          </div>
          
          {iframeUrl && (
            <iframe
              src={iframeUrl}
              style={{
                width: '100%',
                height: '500px',
                border: 'none',
                display: 'block'
              }}
              allowFullScreen
              title={title}
            />
          )}

          <div style={{ 
            padding: '15px', 
            textAlign: 'center', 
            backgroundColor: '#f8f9fa',
            borderTop: '1px solid #dee2e6'
          }}>
            <button
              onClick={() => setIsOpen(false)}
              className="modal-close-btn"
            >
              Закрыть
            </button>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="modal-close-icon"
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SinglePopupButton;