import CustomSlider from "@/src/components/shared/CustomSlider";

const SECTION_TITLE = "text-4xl font-bold leading-tight mb-8";

const SliderSection = () => {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`${SECTION_TITLE} text-center`}>
          Ваши презентации после курса
        </h2>
        <CustomSlider />
      </div>
    </section>
  );
};

export default SliderSection;