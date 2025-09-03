import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* This renders the page component */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;