'use client';

import Hexagon from '../Hexagon';
import './style.css';

export default function SearchTourForm() {
    return (
        <div id='search-tour-form' className="bg-black/20 backdrop-blur-lg shadow-lg rounded-md w-4/5 h-96 -mt-16 relative">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className='w-full h-full'>
                <div className='w-full h-full flex items-center justify-center'>
                    <Hexagon labelClassName='bg-darkBlue-marian-dark' label='شروع جستجو' iconClass='bg-lightBlue-yin fi fi-rs-search text-4xl' size={2} className='shadow-md bg-darkBlue-marian-light' />
                </div>
            </div>
        </div>
    )
}