'use client';

import { MouseEvent, useRef, useState } from 'react';
import Hexagon from '../../Hexagon';
import '@/app/ui/forms/style.css';
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
        <div className="bg-black/20 backdrop-blur-lg shadow-lg rounded-md w-4/5 min-h-96 h-fit -mt-16">
            <div id='search-tour-form' className='w-full h-full relative'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='w-full h-full z-20 sticky top-0 left-0 px-3 pt-3 pb-12 flex flex-col gap-3'>
                <div
                    className={`w-full duration-[1s] h-full transition-discrete
                        ${formActive ? 'max-h-[9rem] -mt-14' : 'min-h-96 max-h-full'} flex items-center justify-center`}
                >
                    <Hexagon
                        onClick={handleButtonClick}
                        labelClassName='bg-darkBlue-marian-dark'
                        label={formActive ? 'جستجوی تور' : 'شروع جستجو'}
                        iconClass='bg-lightBlue-yin fi fi-rs-search'
                        size={formActive ? 0 : 2}
                        className='shadow-md bg-darkBlue-marian-light transition-discrete duration-[1s]'
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
                            <div className='grow w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 mt-6 md:mt-3'>
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
