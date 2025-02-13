'use client';

import { MouseEvent, useRef, useState } from 'react';
import Hexagon from '../../Hexagon';
import '../style.css';
import OriginField from './OriginField';
import { Formik } from 'formik';
import DestinationsField from './DestinationsField';
import DatesField from './DatesField';

export default function SearchTourForm() {
    const [formActive, setFormActive] = useState(false);

    function handleButtonClick(e: MouseEvent<HTMLDivElement>) {
        !formActive && setFormActive(true);
    }

    return (
        <div className="dark:bg-black/20 bg-yellow-100/80 shadow-lg rounded-md w-4/5 min-h-96 h-fit -mt-16 relative">
            {/* This div is relative and will act as the base layer */}
            <div id='search-tour-form' className='w-full min-h-96 h-full absolute z-10 overflow-hidden'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* This div will overlap the #search-tour-form */}
            <div className='h-fit z-20 relative top-0 left-0 w-full px-3 pt-3 pb-12 flex flex-col gap-3'>
                <div
                    className={`w-full duration-[1s] h-full transition-discrete
                        ${formActive ? 'max-h-[9rem] -mt-14' : 'min-h-96 max-h-full'} flex items-center justify-center text-white`}
                >
                    <Hexagon
                        onClick={handleButtonClick}
                        labelClassName='bg-zinc-800 dark:bg-darkBlue-marian-dark'
                        label={formActive ? 'جستجوی تور' : 'شروع جستجو'}
                        iconClass='bg-zinc-600 dark:bg-lightBlue-yin fi fi-rs-search'
                        size={formActive ? 0 : 2}
                        className='shadow-md bg-zinc-700 dark:bg-darkBlue-marian-light transition-discrete duration-[1s]'
                    />
                </div>
                {formActive && (
                    <Formik
                        initialValues={{
                            origin: null,
                            destinations: [],
                            start_date: null,
                            end_date: null
                        }}
                        onSubmit={() => {
        
                        }}
                    >
                        {({setFieldValue}) => (
                            <div className='grow w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 pt-8'>
                                <OriginField />
                                <DestinationsField />
                                <DatesField setFieldValue={setFieldValue}/>
                            </div>
                        )}
                    </Formik>
                )}
            </div>
        </div>
    );
}
