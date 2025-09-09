import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';

interface SinglePopupButtonProps {
  label: string;
  title: string;
  scriptSrc: string;
  scriptId: string; // Обязательный пропс
}

const SinglePopupButton: React.FC<SinglePopupButtonProps> = ({ label, title, scriptSrc, scriptId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('');
  const [iframeHeight, setIframeHeight] = useState('500px');
  const iframeRef = useRef(null);

  useEffect(() => {
    const getIframeUrl = () => {
      try {
        const url = new URL(scriptSrc);
        const id = url.searchParams.get('id');
        if (!id) return '';
        
        const baseUrl = 'https://pptsecrets.ru/pl/lite/widget/widget';
        const params = new URLSearchParams({
          id,
          ref: document.referrer,
          loc: document.location.href,
        });
        
        if (typeof window !== 'undefined' && (window as any).clrtQueryData) {
            params.append('clrtQueryData', JSON.stringify((window as any).clrtQueryData));
        }
        return `${baseUrl}?${params.toString()}`;
      } catch (error) {
        console.error("Invalid scriptSrc URL:", error);
        return '';
      }
    };
    
    if (isOpen) {
        setIframeUrl(getIframeUrl());
    }
  }, [isOpen, scriptSrc]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === 'https://pptsecrets.ru' && 
        event.data.uniqName === scriptId && // Использование динамического scriptId
        event.data.height
      ) {
        setIframeHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener('message', handleMessage, false);

    return () => {
      window.removeEventListener('message', handleMessage, false);
    };
  }, [scriptId]);

  const customStyles = {
    overlay: {
      position: 'fixed' as 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 50,
    },
    content: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: '#fff',
      overflow: 'hidden',
      borderRadius: '0.75rem',
      outline: 'none',
      padding: '0',
      maxWidth: '500px',
      width: '90%',
      maxHeight: '90vh',
    },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
      >
        {label}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel={`${title} Modal`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 bg-gray-50 border-b border-gray-200 text-center">
            <h3 className="m-0 font-semibold text-lg text-gray-800">{title}</h3>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            {iframeUrl ? (
              <iframe
                ref={iframeRef}
                src={iframeUrl}
                className="w-full border-none block"
                style={{ height: iframeHeight }}
                allowFullScreen
                title={title}
              />
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center">
                <p className="text-gray-500">Загрузка формы...</p>
              </div>
            )}
          </div>

          <div className="p-4 text-center bg-gray-50 border-t border-gray-200">
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Закрыть
            </button>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-2 text-gray-400 rounded-full hover:bg-gray-200 hover:text-gray-600 transition-colors"
            aria-label="Закрыть"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SinglePopupButton;