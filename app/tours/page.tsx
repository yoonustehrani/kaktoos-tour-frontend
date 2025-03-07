import Nav from "../ui/nav/Nav";
import BreadCrumbs from "../ui/nav/BreadCrumbs";
import { SEARCH_TOUR_ROUTE_PROPS } from "../utils/types";
// import { Suspense } from "react";
import SearchArea from "../ui/search/SearchArea";

export default async function SearchPage(props: SEARCH_TOUR_ROUTE_PROPS) {
    const searchParams = await props.searchParams;
    
    return (
        <>
            <header className="w-full bg-beige border-b border-black/10 dark:bg-darkBlue-oxford flex flex-col">
                <Nav />
            </header>
            <main className="dark:bg-gray-900 bg-beige flex flex-wrap gap-x-8 gap-y-8 py-12 px-6 md:px-8">
                <BreadCrumbs links={[{href: '/tours', text: 'تور ها'}]}/>
                <SearchArea {...searchParams}/>
            </main>
        </>
    )
}