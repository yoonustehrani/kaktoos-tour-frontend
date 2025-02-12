'use client';

import { useState } from "react";

export default function SearchInput() {
    const [loading, setLoading] = useState(false);
    return (
        <div className='w-full text-lg flex items-center relative'>
            <span className={`left-3 absolute fi fi-rs-${loading ? 'spinner animate-spin' : 'search'} size-4`}></span>
            <input autoFocus={false} onKeyUp={() => setLoading(true)} dir='rtl' type="text" placeholder='مبدا را جستجو کنید' className='w-full pr-1 pl-8 py-2 text-right bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-darkBlue-delft'/>
        </div>
    )
}