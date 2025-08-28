import React, { useState, useRef, useEffect } from 'react'; // импорт для хуков

const SLIDES = [
  { src: "/1.jpg", alt: "Презентация 1" },
  { src: "/2.jpg", alt: "Презентация 2" },
  { src: "/3.jpg", alt: "Презентация 3" },
  { src: "/4.jpg", alt: "Презентация 4" },
  { src: "/5.jpg", alt: "Презентация 5" },
  { src: "/6.jpg", alt: "Презентация 6" },
];
const SECTION_TITLE = "text-4xl font-bold leading-tight mb-6";
export default function CustomSlider() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef();
  const startX = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  function handleTouchStart(e) { startX.current = e.touches[0].clientX; clearInterval(timerRef.current); }
  function handleTouchEnd(e) {
    if (startX.current == null) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 40) setIdx(i => i === 0 ? SLIDES.length - 1 : i - 1);
    if (diff < -40) setIdx(i => (i + 1) % SLIDES.length);
    startX.current = null;
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 3000);
  }

  const prev = () => setIdx(i => i === 0 ? SLIDES.length - 1 : i - 1);
  const next = () => setIdx(i => (i + 1) % SLIDES.length);
  const goTo = i => setIdx(i);

  return (
    
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`${SECTION_TITLE} text-center`}>
          Ваши презентации после курса
        </h2>
        <div
          className="relative w-full select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={SLIDES[idx].src}
            alt={SLIDES[idx].alt}
            className="w-full object-contain bg-black rounded-2xl shadow-xl transition-all duration-500"
            draggable={false}
          />
          {/* Стрелки */}
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-[#0B1120] rounded-full p-2 shadow hover:bg-gray-200 transition" aria-label="Назад" style={{zIndex: 1}}>
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#232f64" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-[#0B1120] rounded-full p-2 shadow hover:bg-gray-200 transition" aria-label="Вперёд" style={{zIndex: 1}}>
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#232f64" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Булеты */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Слайд ${i + 1}`}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition border ${i === idx ? "bg-[#3369FF] border-[#3369FF]" : "bg-white/70 border-white"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}