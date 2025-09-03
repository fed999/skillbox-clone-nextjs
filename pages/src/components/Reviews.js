import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const CONTAINER = "max-w-7xl mx-auto w-full px-4";
  const SECTION_TITLE = "text-4xl font-bold leading-tight mb-6";
  const REGULAR_TEXT = "text-lg leading-relaxed";
  const SMALL_TEXT = "text-base leading-6";

  return (
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
  );
};

export default Reviews;