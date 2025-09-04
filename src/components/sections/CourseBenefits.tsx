import { Card, CardContent } from "@/components/ui/card";
import { courseAudience } from "@/src/data/content";

const CONTAINER = "max-w-7xl mx-auto w-full px-4";
const SECTION_TITLE = "text-4xl font-bold leading-tight mb-8";
const CARD_TITLE = "text-2xl font-semibold leading-snug";
const REGULAR_TEXT = "text-lg leading-relaxed";

const CourseBenefits = () => {
    return (
        <section className="w-full py-16 sm:py-20">
            <h2 className={`${SECTION_TITLE} text-center`}>
            Кому подходит этот курс
            </h2>
            <div className={`${CONTAINER} mt-8`}>
            <div className="grid md:grid-cols-3 gap-6">
                {courseAudience.map((item, idx) => (
                <Card
                    key={idx}
                    className="rounded-xl shadow bg-white transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
                >
                    <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-5xl pt-1">
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
}

export default CourseBenefits;