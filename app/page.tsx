import NewTourSearchForm from "./ui/forms/NewTourSearchForm/NewTourSearchForm";
import SuggestedDestinationsSection from "./ui/sections/SuggestedDestinationsSection";
import PopularDestinationsSection from "./ui/sections/PopularDestinationsSection";
import MainHeader from "./ui/header/MainHeader";

export default function Home() {
    return (
        <>
            <MainHeader />
            <section className="bg-[#0C3923] w-full px-3 flex flex-wrap justify-center gap-y-12 pb-12">
                <NewTourSearchForm />
                <SuggestedDestinationsSection />
            </section>
            <section className="w-full bg-antiFlashWhit flex flex-col items-center gap-2 py-6 px-3">
                <h3 className="text-gray-900 font-bold text-4xl">مقصدهای پیشنهادی</h3>
                <p className="mb-8 text-gray-500">مقصدهای متناسب سلیقه مسافران کاکتوس</p>
                <PopularDestinationsSection />
            </section>
        </>
    )
}