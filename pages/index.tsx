import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CustomSlider from "@/components/ui/CustomSlider";
import { Suspense } from 'react';
import { Metrika } from '@/components/metrika';

import SinglePopupButton from './SinglePopupButton';

declare global {
  interface Window {
    PPTSecretsWidget?: any;
  }
}

const CONTAINER = "max-w-7xl mx-auto w-full px-4";
const SECTION_TITLE = "text-4xl font-bold leading-tight mb-6";
const CARD_TITLE = "text-2xl font-semibold leading-snug";
const REGULAR_TEXT = "text-lg leading-relaxed";
const SMALL_TEXT = "text-base leading-6";
const UL = "space-y-1 pl-5 list-disc";

type Tariff = {
  id: string;
  name: string;
  price: string;
  old: string;
  scriptId: string;
  scriptSrc: string;
  features: string[];
};

const tariffs: Tariff[] = [
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

export default function SkillboxClone() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen text-gray-800 bg-[#F9FAFB] font-sans">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <section className="relative py-14">
        <header className="flex items-center justify-between max-w-7xl mx-auto w-full mb-8 px-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Логотип" className="w-10 h-10" />
            <span className="font-semibold text-lg sm:text-xl">PPTSecrets</span>
          </div>
          <p className="font-semibold text-sm sm:text-base text-gray-800">
            Онлайн-курс "<span className="text-blue-600">Секреты PowerPoint</span>"
          </p>
        </header>
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
      <CustomSlider />
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`${SECTION_TITLE} text-center`}>
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
      <section className="w-full py-12">
        <h2 className={`${SECTION_TITLE} text-center`}>
          Кому подходит этот курс
        </h2>
        <div className={`${CONTAINER} flex flex-col gap-6 mt-8`}>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Для студентов и школьников",
                desc: "Выделяйтесь на защите проектов и олимпиадах с презентациями, которые запомнятся преподавателям.",
                icon: "🎓"
              },
              {
                title: "Для специалистов",
                desc: "Экономьте часы работы и делайте понятные отчёты и презентации для руководителей и клиентов.",
                icon: "📊"
              },
              {
                title: "Для всех, кто хочет делать презентации",
                desc: "Освойте навык, который приносит доход и выделяет в любой сфере.",
                icon: "💼"
              }
            ].map((item, idx) => (
              <Card
                key={idx}
                className="rounded-xl shadow hover:scale-[1.02] transition-transform bg-[#F9FAFB]"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-5xl">
                    {item.icon}
                  </div>
                  <div className="text-left flex flex-col gap-1">
                    <p className={`${CARD_TITLE}`}>
                      {item.title}
                    </p>
                    <p className={`${REGULAR_TEXT} text-gray-600`}>
                      {item.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
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
              <SinglePopupButton
                buttonId={tariff.id}
                label="Записаться"
                title={`Записаться на тариф "${tariff.name}"`}
                scriptSrc={tariff.scriptSrc}
                scriptId={tariff.scriptId}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-12">
        <div className={`${CONTAINER} flex flex-col gap-6`}>
          <h2 className={`${SECTION_TITLE} text-center`}>Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col gap-3">
                <p className={REGULAR_TEXT + " italic text-gray-700 leading-relaxed"}>
                  Защитила диплом, комиссии очень понравилась моя презентация, спасибо, я получила 5 за проект!
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Саша Бубякина</p>
                  <p className={SMALL_TEXT + " text-gray-600"}>Студент</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col gap-3">
                <p className={REGULAR_TEXT + " italic text-gray-700 leading-relaxed"}>
                  Презентации стали более яркими, детям очень нравится, стали больше интересоваться. Спасибо за курс, время зря не потратила, подняла свой скилл в PowerPoint 👍
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Елена Бенько</p>
                  <p className={SMALL_TEXT + " text-gray-600"}>Учитель английского языка</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col gap-3">
                <p className={REGULAR_TEXT + " italic text-gray-700 leading-relaxed"}>
                  Получилось сделать информативную презентацию по полугодовому отчёту. Получили очень хорошие отзывы, спасибо за курс!
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Александр Евгеньевич</p>
                  <p className={SMALL_TEXT + " text-gray-600"}>Проектный менеджер</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className={`${CONTAINER} flex flex-col gap-6`}>
          <h2 className={`${SECTION_TITLE} text-center`}>Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq1">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Как мне произвести оплату за курс?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Чтобы оплатить курс, необходимо подать заявку. После завершения оплаты вы получите доступ к вашему Личному кабинету на курсе.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Какую версию PowerPoint мне следует использовать?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Для работы подойдет версия PowerPoint 2019 и выше, однако мы настоятельно рекомендуем использовать PowerPoint 2021 или версию по подписке Office 365 для наилучшего опыта.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Получу ли я сертификат после прохождения курса?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Каждый участник, успешно завершивший все задания курса, получит персонализированный сертификат об окончании.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Есть ли возможность оплатить курс частями?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Да, мы предлагаем возможность рассрочки для удобства оплаты.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq5">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Подходит ли ваш курс для начинающих в дизайне?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Абсолютно! Наш курс разработан специально для тех, кто только начинает свой путь в дизайне.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq6">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Где будет проходить обучение?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Весь образовательный процесс осуществляется на платформе Getcourse, а общение с куратором курса происходит через Telegram.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq7">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Как часто мне будут давать задания?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Задания выдаются по мере прохождения уроков.
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq8">
              <AccordionTrigger>
                <span className={CARD_TITLE}>Сколько времени займет прохождение курса?</span>
              </AccordionTrigger>
              <AccordionContent>
                <span className={REGULAR_TEXT}>
                  Продолжительность курса составляет примерно один месяц, но точная длительность зависит от индивидуального темпа обучения.
                </span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
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
      <Suspense>
        <Metrika />
      </Suspense>
    </main>
  );
}