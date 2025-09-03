import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CustomSlider from './components/CustomSlider';
import GifSection from './components/GifSection';
import TargetAudience from './components/TargetAudience';
import Tariffs from './components/Tariffs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Suspense } from 'react';
import Metrika from './components/Metrika';

function App() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen text-gray-800 bg-[#F9FAFB] font-sans">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      
      <Header />
      <HeroSection />
      <CustomSlider />
      <GifSection />
      <TargetAudience />
      <Tariffs />
      <Reviews />
      <FAQ />
      <Footer />
      
      <Suspense>
        <Metrika />
      </Suspense>
    </main>
  );
}

export default App;