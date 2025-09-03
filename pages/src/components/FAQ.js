import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQ = () => {
  const CONTAINER = "max-w-7xl mx-auto w-full px-4";
  const SECTION_TITLE = "text-4xl font-bold leading-tight mb-6";
  const CARD_TITLE = "text-2xl font-semibold leading-snug";
  const REGULAR_TEXT = "text-lg leading-relaxed";

  return (
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
  );
};

export default FAQ;