'use client';
import React, { useState, useRef, useEffect } from 'react';
import { sliderImages } from '@/src/data/content'; // Импортируем данные

const SLIDES = sliderImages;

export default function CustomSlider() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx(prevIdx => (prevIdx + 1) % SLIDES.length);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const resetInterval = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx(prevIdx => (prevIdx + 1) % SLIDES.length);
    }, 3000);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
    if (timerRef.current) clearInterval(timerRef.current);
  };
  
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 40) {
      setIdx(prevIdx => (prevIdx === 0 ? SLIDES.length - 1 : prevIdx - 1));
    } else if (diff < -40) {
      setIdx(prevIdx => (prevIdx + 1) % SLIDES.length);
    }
    startX.current = null;
    resetInterval();
  };

  const prev = () => {
    setIdx(i => (i === 0 ? SLIDES.length - 1 : i - 1));
    resetInterval();
  };
  
  const next = () => {
    setIdx(i => (i + 1) % SLIDES.length);
    resetInterval();
  };
  
  const goTo = (i: number) => {
    setIdx(i);
    resetInterval();
  };

  return (
    <div
      className="relative w-full select-none overflow-hidden rounded-2xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {SLIDES.map((slide) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="w-full flex-shrink-0 object-contain bg-black"
            draggable={false}
          />
        ))}
      </div>
      
      {/* Стрелки */}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-[#0B1120] rounded-full p-2 shadow-lg hover:bg-white transition-colors" aria-label="Назад">
        <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-[#0B1120] rounded-full p-2 shadow-lg hover:bg-white transition-colors" aria-label="Вперёд">
        <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      
      {/* Булеты */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Слайд ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-colors border-2 ${i === idx ? "bg-blue-600 border-blue-600" : "bg-white/70 border-white/80 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}