'use client';

import { ReactNode } from 'react';
import './style.css';

export default function TourCardButton({
    children
}: {
    children: ReactNode
})
{
    return (
        <div className="z-30 absolute moveable-button w-10 h-10 bg-lion dark:bg-darkBlue-marian-dark rounded-b-md text-xl flex justify-center items-center">
            <span onClick={(e) => {
                e.currentTarget.parentElement?.classList.toggle('active')
            }} className="fi fi-rs-calendar z-40 w-10 text-center h-auto absolute hover:cursor-pointer"></span>
            <div className='w-full h-full'>
                {children}
            </div>
        </div>
    )
}