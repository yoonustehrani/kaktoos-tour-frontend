'use client';

import { COUNTRY, LOCATION, TOURS_COUNT_OBJECT } from "@/app/utils/types"
import FilterBox from "../FilterBox"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';

type Props = {
    items: (COUNTRY & TOURS_COUNT_OBJECT)[]
}

export default function CountryFilter({items}: Props)
{
    const searchParams = useSearchParams();
    const countries = searchParams.getAll('countries[]');
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleSearch = (code: string) => { 
        // console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        if (countries.includes(code)) {
            params.delete('countries[]', code)
        } else {
            params.append('countries[]', code)
        }
        // params.set('page', '1');
        // if (term) {
        // params.set('query', term);
        // } else {
        // params.delete('query');
        // }
        replace(`${pathname}?${decodeURI(params.toString())}`)
    }
    
    function isChecked(code: string) {
        return countries.includes(code)
    }

    return (
        <FilterBox title={`کشور ها`}>
            <ul className='w-full flex flex-col gap-2 text-lg pt-3'>
                {items.map(location => (
                    <li
                        key={location.code}
                        className={`select-item ${isChecked(location.code) ? 'active' : ''}`}
                        onClick={handleSearch.bind(null, location.code)}
                    >
                        <div className='flex item-center gap-3'>
                            <Image className='rounded-full' width={30} height={30} alt='Country Flag' src={`/flags/1x1/${location.code.toLowerCase()}.svg`} />
                            <span>{location.name_fa} - {location.name}</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full bg-green-100 dark:bg-sky-800 text-xs'>{location.tours_count} تور</span>
                            <input type="checkbox" onChange={() => {}} checked={isChecked(location.code)}/>
                        </div>
                    </li>
                ))}
            </ul>
        </FilterBox>
    )
}