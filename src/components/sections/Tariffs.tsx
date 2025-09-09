import { tariffs } from "@/src/data/content";
import SinglePopupButton from "../shared/SinglePopupButton";

const Tariffs = () => {
    return (
        <section className="w-full py-16 sm:py-20 flex flex-col items-center" id="tariffs">
            <h2 className="text-4xl font-bold mb-8 text-center">Тарифы обучения</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl w-full px-4">
            {tariffs.map((tariff) => (
                <div 
                key={tariff.id}
                className="border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-between shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                <div className="w-full text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{tariff.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Можно в рассрочку</p>
                    <div className="my-4">
                    <p className="line-through text-gray-400">{tariff.old}</p>
                    <p className="text-3xl font-bold text-blue-600 mt-1">{tariff.price}</p>
                    </div>
                    <ul className="mt-4 text-sm text-gray-700 space-y-2 text-left">
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
                    label="Записаться"
                    scriptSrc={tariff.scriptSrc}
                    scriptId={tariff.scriptId} // Передаём scriptId
                />
                </div>
            ))}
            </div>
      </section>
    );
}

export default Tariffs;