'use client';

import { COUNTRY, LOCATION, TOURS_COUNT_OBJECT } from "@/app/utils/types"
import FilterBox from "../FilterBox"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'nextjs-toploader/app';

type COUNTRY_OBJECT = (COUNTRY & TOURS_COUNT_OBJECT)

type Props = {
    title: string
    items: (LOCATION & TOURS_COUNT_OBJECT)[]
    searchKey: string
}

export default function LocationFilter({items, title, searchKey}: Props)
{
    const searchParams = useSearchParams();
    const locations = searchParams.getAll(`${searchKey}[]`);
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = (id: number|string) => { 
        id = String(id)
        // console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        if (locations.includes(id)) {
            params.delete(`${searchKey}[]`, id)
        } else {
            params.append(`${searchKey}[]`, id)
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
        return locations.includes(String(id))
    }
    return (
        <FilterBox title={title}>
            <ul className='w-full flex flex-col gap-2 text-lg pt-3'>
                {items.map(location => (
                    <li
                        key={location.id}
                        className={`select-item ${isChecked(location.id) ? 'active' : ''}`}
                        onClick={handleSearch.bind(null, location.id)}
                    >
                        <div className='flex item-center gap-3'>
                            <Image className='rounded-full' width={30} height={30} alt='Country Flag' src={`/flags/1x1/${location.country_code.toLowerCase()}.svg`} />
                            <span>{location.name_fa} - {location.name}</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full text-label text-xs'>{location.tours_count} تور</span>
                            <input type="checkbox" onChange={() => {}} checked={isChecked(location.id)}/>
                        </div>
                    </li>
                ))}
            </ul>
        </FilterBox>
    )
}