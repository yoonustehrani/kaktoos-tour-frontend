'use client';

import { MouseEvent, useState } from 'react';
import Hexagon from '../Hexagon';
import './style.css';

export default function SearchTourForm() {
    const [formActive, setFormActive] = useState(false);

    function handleButtonClick(e: MouseEvent<HTMLDivElement>) {
        !formActive && setFormActive(true);
    }

    return (
        <div className="bg-black/20 backdrop-blur-lg shadow-lg rounded-md w-4/5 h-96 -mt-16">
            <div id='search-tour-form' className='w-full h-full relative'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='w-full h-full z-40 absolute top-0 left-0 px-3 py-2'>
                <div 
                    className={`w-full overflow-hidden duration-[1s] h-full transition-discrete
                        ${formActive ? 'max-h-[10.5rem] -mt-24' : 'max-h-full'} flex items-center justify-center`}
                >
                    <Hexagon 
                        onClick={handleButtonClick} 
                        labelClassName='bg-darkBlue-marian-dark' 
                        label={formActive ? 'جستجوی تور' : 'شروع جستجو' }
                        iconClass='bg-lightBlue-yin fi fi-rs-search' 
                        size={formActive ? 0 : 2} 
                        className='shadow-md bg-darkBlue-marian-light transition-discrete duration-[1s]' 
                    />
                </div>
            </div>
        </div>
    );
}
