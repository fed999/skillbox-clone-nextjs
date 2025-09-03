import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TargetAudience = () => {
  const CONTAINER = "max-w-7xl mx-auto w-full px-4";
  const CARD_TITLE = "text-2xl font-semibold leading-snug";
  const REGULAR_TEXT = "text-lg leading-relaxed";

  return (
    <section className="w-full py-12">
      <h2 className="text-4xl font-bold leading-tight mb-6 text-center">
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
  );
};

export default TargetAudience;