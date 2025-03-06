'use client';

import { MouseEvent, useRef, useState } from 'react';
import Hexagon from '../../Hexagon';
import '../style.css';
import OriginField from './OriginField';
import { Formik, Form } from 'formik';
import DestinationsField from './DestinationsField';
import DatesField from './DatesField';
import { QueryClientProvider, QueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const queryClient = new QueryClient()

export default function SearchTourForm() {
    const [formActive, setFormActive] = useState(false);

    function handleButtonClick(e: MouseEvent<HTMLDivElement>) {
        !formActive && setFormActive(true);
    }
    const router = useRouter()
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
                        label={formActive ? 'فرم جستجو' : 'شروع جستجو'}
                        iconClass='bg-zinc-600 dark:bg-lightBlue-yin fi fi-rs-search'
                        size={formActive ? 0 : 2}
                        className='shadow-md bg-zinc-700 dark:bg-darkBlue-marian-light transition-discrete duration-[1s]'
                    />
                </div>
                <QueryClientProvider client={queryClient}>
                {formActive && (
                    <Formik
                        initialValues={{
                            origins: null,
                            destinations: null,
                            start_date: null,
                            end_date: null
                        } as {
                            origins: null|number[],
                            destinations: null|number[],
                            start_date: null|string,
                            end_date: null|string
                        }}
                        onSubmit={(values) => {
                            let queries: string[] = []
                            Object.entries(values).filter(([k, v]) => v).forEach(([k, v]) => {
                                if (Array.isArray(v)) {
                                    k += '[]'
                                    v.forEach(x => {
                                        queries.push(`${k}=${x}`)
                                    })
                                    return;
                                }
                                queries.push(`${k}=${v}`)
                            })
                            router.push('/tours?' + queries.join('&'))
                        }}
                    >
                        {({setFieldValue, submitForm}) => (
                            <div className='grow w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 pt-8'>
                                <OriginField />
                                <DestinationsField />
                                <DatesField setFieldValue={setFieldValue}/>
                                <div className='col-span-full mt-12 w-full flex items-center justify-center'>
                                    <button onClick={submitForm} type='button' className="bg-butterscotch border-raw-umber dark:bg-darkBlue-marian-light dark:border-darkBlue-marian-dark border-b-4 border-r-4 px-3 py-1 rounded-md flex items-center gap-2"> {/** min-w-44 md:w-auto justify-between md:justify-start */}
                                        <span className="fi fi-rs-search w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                                        جستجو کن
                                    </button>
                                </div>
                            </div>
                        )}
                    </Formik>
                )}
                </QueryClientProvider>
            </div>
        </div>
    );
}
