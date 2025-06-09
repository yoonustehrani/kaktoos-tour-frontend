import Nav from "../ui/nav/Nav";
import BreadCrumbs from "../ui/nav/BreadCrumbs";
import { SEARCH_TOUR_ROUTE_PROPS } from "../utils/types";
// import { Suspense } from "react";
import SearchArea from "../ui/search/SearchArea";

export default async function SearchPage(props: SEARCH_TOUR_ROUTE_PROPS) {
    const searchParams = await props.searchParams;
    
    return (
        <>
            <header className="w-full px-8 py-2 bg-antiFlashWhite">
                <Nav />
            </header>
            <main className="bg-antiFlashWhite flex flex-wrap gap-x-8 gap-y-8 py-12 px-6 md:px-8">
                <BreadCrumbs links={[{href: '/tours', text: 'تور ها'}]}/>
                <SearchArea {...searchParams}/>
            </main>
        </>
    )
}