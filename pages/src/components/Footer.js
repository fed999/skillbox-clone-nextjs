import React from 'react';

const Footer = () => {
  const CONTAINER = "max-w-7xl mx-auto w-full px-4";

  return (
    <footer className="w-full bg-[#F3F4F6] dark:bg-[#E5E7EB] py-8 text-center text-sm text-gray-600">
      <div className={CONTAINER}>
        <p className="mb-2">
          ИП Кондратьев Олег Ильич <br />
          ИНН: 143531243189 &nbsp; ОГРН: 324140000063590
        </p>
        <p className="space-x-4">
          <a
            href="https://pptsecrets.ru/oferta"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 transition-colors"
          >
            Оферта
          </a>
          <a
            href="https://pptsecrets.ru/pd"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 transition-colors"
          >
            Политика конфиденциальности
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;