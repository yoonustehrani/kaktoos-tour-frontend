import NewTourSearchForm from "./ui/forms/NewTourSearchForm/NewTourSearchForm";
import SuggestedDestinationsSection from "./ui/sections/SuggestedDestinationsSection";
import PopularDestinationsSection from "./ui/sections/PopularDestinationsSection";
import MainHeader from "./ui/header/MainHeader";
import Image from "next/image";
import Link from "next/link";
import ToursOnCalendarSection from "./ui/sections/ToursOnCalendarSection";
import StoriesSection from "./ui/sections/StoriesSection";
import { Suspense } from "react";
import CategoriesSection from "./ui/sections/CategoriesSection";

export default function Home() {
    return (
        <>
            <MainHeader />
            <section className="bg-websiteGreen w-full md:px-3 flex flex-wrap justify-center gap-y-12 pb-12">
                <StoriesSection />
                <SuggestedDestinationsSection />
            </section>
            <PopularDestinationsSection />
            <Suspense fallback={<div>Loading ...</div>}>
                <CategoriesSection />
            </Suspense>
            <ToursOnCalendarSection />
        </>
    )
}