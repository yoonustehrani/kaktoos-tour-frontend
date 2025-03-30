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
            <PopularDestinationsSection />
        </>
    )
}