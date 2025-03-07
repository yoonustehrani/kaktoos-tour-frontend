'use client';

import { ChangeEventHandler, RefObject, useState } from "react";

export default function SearchInput({
    placeHolder = '',
    ref,
    value = '',
    changeHandler,
    loading
}: {
    ref?: RefObject<HTMLInputElement | null>
    placeHolder: string,
    value: string,
    changeHandler: ChangeEventHandler<HTMLInputElement>,
    loading: boolean
}) {
    return (
        <div className='w-full text-lg flex items-center relative'>
            <span className={`left-3 absolute fi fi-rs-${loading ? 'spinner animate-spin' : 'search'} size-4`}></span>
            <input 
                onChange={changeHandler}
                ref={ref}
                autoFocus={false}
                dir='rtl'
                type="text"
                placeholder={placeHolder}
                className='w-full pr-1 pl-8 py-2 text-right bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-darkBlue-delft'
            />
        </div>
    )
}