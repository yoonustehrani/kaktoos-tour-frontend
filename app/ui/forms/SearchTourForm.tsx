'use client';

import { MouseEvent, useRef, useState } from 'react';
import Hexagon from '../Hexagon';
import './style.css';
import Modal from '../Modal';
import SearchInput from './SearchInput';
import { ORIGIN } from '../types';
import Image from 'next/image';

const origins: ORIGIN[] = [
    {
        "id": 1,
        "name": "Mashhad",
        "name_fa": "مشهد",
        "country_code": "IR",
        "tours_from_count": 8
    },
    {
        "id": 2,
        "name": "Tehran",
        "name_fa": "تهران",
        "country_code": "IR",
        "tours_from_count": 0
    }
]

export default function SearchTourForm() {
    const [formActive, setFormActive] = useState(true);
    const [selectedOrigin, setOrigin] = useState(0);
    console.log(selectedOrigin);
    
    const modal = useRef<HTMLDialogElement>(null);

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
                    <div className='grow w-full'>
                        <button className='flex items-center gap-2' onClick={() => {
                            modal.current?.showModal()
                        }}>
                            <i className="fi fi-rs-marker size-5"></i>
                            انتخاب مبدا
                        </button>
                        <Modal ref={modal}>
                            {/* border-gray-900/30 */}
                            <form method="dialog" className='w-full max-w-[24rem] bg-white dark:bg-darkBlue-oxford border-2 border-black/10 shadow-md dark:text-antiFlashWhite rounded-lg px-4 py-3 flex flex-col gap-4'>
                                <div className='flex items-center gap-2 text-xl w-full'>
                                    <i className="fi fi-rs-marker size-5"></i>
                                    <h4>یک مبدا انتخاب کنید.</h4>
                                </div>
                                <SearchInput />
                                <ul className='w-full flex flex-col gap-2 text-lg'>
                                    {origins.map(origin => (
                                        <li className={`select-item ${selectedOrigin == origin.id ? 'active' : ''}`} key={origin.id} onClick={() => setOrigin(origin.id)}>
                                            <div className='flex item-center gap-3'>
                                                <Image className='rounded-full' width={30} height={30} alt='Country Flag' src={`/flags/1x1/${origin.country_code.toLowerCase()}.svg`}/>
                                                <span>{origin.name_fa} - {origin.name}</span>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full bg-sky-800 text-xs'>{origin.tours_from_count} تور</span>
                                                <span className={`input ${selectedOrigin == origin.id ? 'active' : ''}`}></span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </form>
                        </Modal>
                    </div>
                )}
            </div>
        </div>
    );
}
