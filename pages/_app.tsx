import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Modal from 'react-modal'; // <-- Импортируем Modal
import { useEffect } from 'react';

// Устанавливаем корневой элемент приложения для модального окна
if (typeof window !== 'undefined') {
  Modal.setAppElement('#__next');
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;