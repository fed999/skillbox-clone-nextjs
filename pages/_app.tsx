import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';

// Import the PopupButton component
import PopupButton from '../pages/PopupButton'; 

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* This renders the page component */}
      <Component {...pageProps} />
      
      {/* This adds your popup buttons to the layout */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Нажмите кнопку, чтобы открыть виджет</h2>
        <PopupButton />
      </div>
    </div>
  );
}

export default MyApp;