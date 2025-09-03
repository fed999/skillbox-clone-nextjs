import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-14">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="bg-[#0B1120] rounded-3xl px-6 py-16 shadow-lg">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                Зарабатывай на презентациях с PowerPoint!
              </span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">
              Присоединяйся к онлайн-обучению: монетизируй свои навыки, выделяйся, делай вау-презентации в любой сфере.
            </p>
            <a
              href="#tariffs"
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
            >
              Записаться сейчас!
              <svg className="w-6 h-6 ml-8 -mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                { title: "Обучение с нуля", value: ">100", sub: "Учеников" },
                { title: "Помощь куратора", value: ">120", sub: "Видео-уроков" },
                { title: "Ваш заработок", value: "~1500₽", sub: "За один слайд" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#131A2B] rounded-xl flex flex-col items-center justify-center shadow min-w-[180px] min-h-[112px] w-full max-w-[200px] py-6 px-3"
                >
                  <p className="text-xs text-gray-400 mb-1 text-center">{item.title}</p>
                  <p className="text-xl text-white font-bold mb-0.5 text-center">{item.value}</p>
                  <p className="text-xs text-gray-400 text-center">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;