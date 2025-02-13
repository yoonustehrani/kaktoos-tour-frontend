'use client';

import { MouseEvent, useRef, useState } from 'react';
import Hexagon from '../../Hexagon';
import '@/app/ui/forms/style.css';
import OriginField from './OriginField';
import { Formik } from 'formik';

export default function SearchTourForm() {
    const [formActive, setFormActive] = useState(false);

    const calendarModalRef = useRef<HTMLDialogElement>(null)

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
            <div className='w-full h-full z-20 absolute top-0 left-0 px-3 py-2 flex flex-col'>
                <div
                    className={`w-full overflow-hidden duration-[1s] h-full transition-discrete
                        ${formActive ? 'max-h-[9rem] -mt-24' : 'max-h-full'} flex items-center justify-center`}
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
                            origin: null
                        }}
                        onSubmit={() => {

                        }}
                    >
                        <div className='grow w-full grid grid-cols-2 xl:grid-cols-3 px-4'>
                            <OriginField />
                            {/* <button className='flex items-center gap-2' onClick={() => {
                                calendarModalRef.current?.showModal()
                            }}>
                                <i className="fi fi-rs-marker size-5"></i>
                                انتخاب تاریخ
                            </button>
                            <Modal ref={calendarModalRef}>
                                <Calendar handlePick={(date) => {
                                    console.log(date);
                                }} />
                            </Modal> */}
                        </div>
                    </Formik>
                )}
            </div>
        </div>
    );
}
