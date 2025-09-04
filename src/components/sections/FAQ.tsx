import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqItems } from "@/src/data/content";

const CONTAINER = "max-w-7xl mx-auto w-full px-4";
const SECTION_TITLE = "text-4xl font-bold leading-tight mb-8";
const CARD_TITLE = "text-xl font-semibold"; // Slightly adjusted for better hierarchy
const REGULAR_TEXT = "text-lg leading-relaxed text-gray-700";

const FAQ = () => {
    return (
        <section className="w-full py-16 sm:py-20">
            <div className={`${CONTAINER}`}>
            <h2 className={`${SECTION_TITLE} text-center`}>Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                    <AccordionItem value={item.value} key={item.value}>
                        <AccordionTrigger>
                            <span className={CARD_TITLE}>{item.trigger}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <span className={REGULAR_TEXT}>
                            {item.content}
                            </span>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            </div>
      </section>
    );
}

export default FAQ;