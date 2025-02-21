import Nav from "../ui/nav/Nav";
import BreadCrumbs from "../ui/nav/BreadCrumbs";
import { SEARCH_TOUR_ROUTE_PROPS } from "../utils/types";
import { Suspense } from "react";
import SearchArea from "../ui/search/SearchArea";

export default async function SearchPage(props: SEARCH_TOUR_ROUTE_PROPS) {
    const searchParams = await props.searchParams;
    // // const currentPage = Number(searchParams?.page) || 1;
    

    // function isChecked(id: number|string) {
    //     return false
    // }
    
    return (
        <>
            <header className="w-full bg-lemmonChiffon dark:bg-darkBlue-oxford flex flex-col">
                <Nav />
            </header>
            <main className="dark:bg-gray-900 flex flex-wrap gap-x-8 gap-y-8 py-12 px-8">
                <BreadCrumbs />
                <Suspense fallback={<div>Loading ...</div>}>
                    <SearchArea {...searchParams}/>
                </Suspense>
            </main>
        </>
    )
}