import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Устанавливаем корневой элемент приложения для модального окна
    // только на клиентской стороне
    if (typeof window !== 'undefined') {
      Modal.setAppElement('#__next');
    }
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз после монтирования

  return <Component {...pageProps} />;
}

export default MyApp;