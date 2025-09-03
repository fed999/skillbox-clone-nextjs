import React from 'react';

const Tariffs = () => {
  const tariffs = [
    {
      id: "basic",
      name: 'Тариф "Основы"',
      price: '3 900 ₽',
      old: '7 900 ₽',
      scriptId: 'abce55cdc9d88345aa01253e09efa5affc2e2242',
      scriptSrc: 'https://pptsecrets.ru/pl/lite/widget/script?id=1121043',
      features: [
        'Доступ на 3 месяца',
        'Модуль "Основы PowerPoint"',
        '54 видеоурока',
        'Чат с куратором',
        'Именной сертификат',
        'Проверка домашних заданий',
        'Помощь кураторов по заданиям',
      ],
    },
    {
      id: "start",
      name: 'Тариф "Старт"',
      price: '9 900 ₽',
      old: '19 900 ₽',
      scriptId: '803be69c43fd4304a7418fcec5ebff96792b95d0',
      scriptSrc: 'https://pptsecrets.ru/pl/lite/widget/script?id=1122565',
      features: [
        'Доступ на 3 месяца',
        'Модуль "Основы PowerPoint"',
        'Модуль "Мастерство дизайна"',
        'Чат с куратором',
        'Именной сертификат',
        'Проверка домашних заданий',
        'Помощь кураторов по заданиям',
      ],
    },
    {
      id: "pro",
      name: 'Тариф "Профи"',
      price: '14 900 ₽',
      old: '29 900 ₽',
      scriptId: '00a285f938dcc6c184b4b111bd63b865b188ecc7',
      scriptSrc: 'https://pptsecrets.ru/pl/lite/widget/script?id=1121022',
      features: [
        'Доступ на 6 месяцев',
        'Модуль "Основы PowerPoint"',
        'Модуль "Мастерство дизайна"',
        'Модуль "Мир анимации"',
        'Чат с куратором',
        'Именной сертификат',
        'Проверка домашних заданий',
        'Помощь кураторов по заданиям',
      ],
    },
    {
      id: "expert",
      name: 'Тариф "Эксперт"',
      price: '24 900 ₽',
      old: '49 900 ₽',
      scriptId: '26cf310792c688c3c68fe753b871cd34fa7ed888',
      scriptSrc: 'https://pptsecrets.ru/pl/lite/widget/script?id=1078454',
      features: [
        'Доступ навсегда',
        'Модуль "Основы PowerPoint"',
        'Модуль "Мастерство дизайна"',
        'Модуль "Мир анимации"',
        'Чат с куратором',
        'Именной сертификат',
        'Проверка домашних заданий',
        'Помощь кураторов по заданиям',
      ],
    },
  ];

  const openWidgetPopup = (tariffId) => {
    const urlMap = {
      basic: "/ppt-basic.html",
      start: "/ppt-start.html",
      pro: "/ppt-pro.html",
      expert: "/ppt-expert.html",
    };
  
    const url = urlMap[tariffId];
    if (url) {
      window.open(
        url,
        "_blank",
        "width=800,height=900,resizable=yes,scrollbars=yes"
      );
    }
  };

  return (
    <section className="w-full py-12 flex flex-col items-center" id="tariffs">
      <h2 className="text-4xl font-bold mb-8 text-center">Тарифы обучения</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl w-full px-4">
        {tariffs.map((tariff) => (
          <div 
            key={tariff.id}
            className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-between shadow-lg bg-white hover:shadow-xl transition-shadow"
          >
            <div className="w-full">
              <h3 className="text-xl font-semibold text-center text-gray-800">{tariff.name}</h3>
              <p className="text-sm text-gray-500 text-center mt-1">Можно в рассрочку</p>
              
              <div className="flex flex-col items-center mt-4 mb-4">
                <p className="line-through text-gray-400">{tariff.old}</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{tariff.price}</p>
              </div>
              
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                {tariff.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          
          <button
            onClick={() => openWidgetPopup(tariff.id)}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full font-medium"
          >
            Записаться
          </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tariffs;