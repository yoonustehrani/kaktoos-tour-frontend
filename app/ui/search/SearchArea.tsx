import { getTours } from "@/app/lib/api";
import FilterBox from "./FilterBox";
import CountryFilter from "./Filters/CountryFilter";
import FilterHead from "./Filters/FilterHead";
import LocationFilter from "./Filters/LocationFilter";
import NightsFilter from "./Filters/NightsFilter";
import PriceInput from "./PriceInput";
import { SEARCH_TOUR_ROUTE_SEARCH_PARAMS } from "@/app/utils/types";
import Tours from "./Tours";
import { unstable_cache } from "next/cache";

export default async function SearchArea(searchParams: SEARCH_TOUR_ROUTE_SEARCH_PARAMS)
{
    function getSearchParamAsArray(searchParams: {[key:string]: any}, key: string): string[]|undefined {
        let items = searchParams?.[`${key}[]`] || undefined;
        if(typeof items == 'string') {
            items = [items];
        }
        return items
    }
    
    const tours = await unstable_cache(async () => {
        return getTours({
            countries: getSearchParamAsArray(searchParams, 'countries'),
            origins: getSearchParamAsArray(searchParams, 'origins')?.map(x => Number(x)),
            destinations: getSearchParamAsArray(searchParams, 'destinations')?.map(x => Number(x)),
            nights: getSearchParamAsArray(searchParams, 'nights')?.map(x => Number(x)),
        })
    }, ['tours', JSON.stringify(searchParams)], { revalidate: 5 * 60, tags: ['tours'] })();

    return (
        <div className="w-full flex gap-3">
            <aside className="dark:bg-darkBlue-oxford bg-white border border-black/10 dark:border-none shadow-md rounded-lg w-96 p-5 flex flex-col flex-none gap-6">
                <FilterHead />
                <hr />
                <FilterBox title="بازه قیمتی">
                    <div className="flex flex-col gap-3 py-4">
                        <div className="flex w-2/3 items-center gap-1 px-3 relative bg-gray-900 rounded-lg">
                            <label className="text-sm" htmlFor="">از:</label>
                            <PriceInput initialValue={tours.meta.price.min} className="w-full bg-transparent py-2 px-2" />
                            <span className="text-xs">تومان</span>
                        </div>
                        <div className="flex w-2/3 items-center gap-1 px-3 relative bg-gray-900 rounded-lg">
                            <label className="text-sm" htmlFor="">تا:</label>
                            <PriceInput initialValue={tours.meta.price.max} className="w-full bg-transparent py-2 px-2" />
                            <span className="text-xs">تومان</span>
                        </div>
                    </div>
                </FilterBox>
                <hr />
                <CountryFilter items={tours.meta.countries} />
                <hr />
                <LocationFilter searchKey="destinations" title="مقصد ها" items={tours.meta.destinations} />
                <hr />
                <LocationFilter searchKey="origins" title="مبدا ها" items={tours.meta.origins} />
                <hr />
                <NightsFilter items={tours.meta.number_of_nights} />
            </aside>
            <Tours tours={tours.results.data} />
        </div>
    )
}