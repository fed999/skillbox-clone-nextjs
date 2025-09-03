import React from 'react';

const GifSection = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold leading-tight mb-6 text-center">
          Более 120 видеоуроков
        </h2>
        <div className="flex gap-1 items-stretch">
          <div className="flex-shrink-0 w-1/3">
            <div className="h-full w-">
              <img
                src="https://static.tildacdn.com/tild6262-3332-4939-b137-313236386334/f1gif.gif"
                alt="Вертикальная гифка"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-1 h-full">
            <div className="h-1/2 w-full">
              <img
                src="https://static.tildacdn.com/tild3136-3335-4236-b934-393566656361/f2gif.gif"
                alt="Горизонтальная 1"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="h-1/2 w-full">
              <img
                src="https://static.tildacdn.com/tild6164-3933-4263-a131-393939633337/f3gif.gif"
                alt="Горизонтальная 2"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GifSection;