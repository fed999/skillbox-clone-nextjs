import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/src/data/content";

const CONTAINER = "max-w-7xl mx-auto w-full px-4";
const SECTION_TITLE = "text-4xl font-bold leading-tight mb-8";
const REGULAR_TEXT = "text-lg leading-relaxed";
const SMALL_TEXT = "text-base leading-6";

const Testimonials = () => {
    return (
        <section className="w-full py-16 sm:py-20">
            <div className={`${CONTAINER}`}>
            <h2 className={`${SECTION_TITLE} text-center`}>Отзывы</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, idx) => (
                    <Card key={idx} className="bg-white">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <p className={`${REGULAR_TEXT} italic text-gray-700 leading-relaxed`}>
                            "{testimonial.quote}"
                            </p>
                            <div className="mt-2">
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                            <p className={`${SMALL_TEXT} text-gray-600`}>{testimonial.role}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            </div>
      </section>
    );
}

export default Testimonials;