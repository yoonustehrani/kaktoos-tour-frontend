'use client';

import { TOUR_META_NIGHT } from "@/app/utils/types";
import FilterBox from "../FilterBox";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NightsFilter({items}: {items: TOUR_META_NIGHT[]})
{
    const searchParams = useSearchParams();
    const nights = searchParams.getAll(`nights[]`);
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = (id: number|string) => { 
        id = String(id)
        // console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        if (nights.includes(id)) {
            params.delete(`nights[]`, id)
        } else {
            params.append(`nights[]`, id)
        }
        // params.set('page', '1');
        // if (term) {
        // params.set('query', term);
        // } else {
        // params.delete('query');
        // }
        replace(`${pathname}?${decodeURI(params.toString())}`)
    }
    function isChecked(id: number) {
        return nights.includes(String(id))
    }
    return (
        <FilterBox title="مدت اقامت">
            <ul className='w-full flex flex-col gap-2 text-lg pt-3'>
                {items.map(item => (
                    <li
                        key={item.nights}
                        className={`select-item ${isChecked(item.nights) ? 'active' : ''}`}
                        onClick={handleSearch.bind(null, item.nights)}
                    >
                        <div className='flex item-center gap-3'>
                            <i className="fi fi-rs-moon h-5 text-xl"></i>
                            <span>{item.nights} شب</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full bg-green-100 dark:bg-sky-800 text-xs'>{item.tours_count} تور</span>
                            <input type="checkbox" onClick={() => {}} checked={isChecked(item.nights)} />
                        </div>
                    </li>
                ))}
            </ul>
        </FilterBox>
    )
}