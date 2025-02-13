import { Ref, useRef, useState } from "react";
import Modal from "@/app/ui/Modal"
import { ORIGIN } from "@/app/ui/types"
import SearchInput from "./SearchInput"
import Image from "next/image";
import { useField } from "formik";

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

export default function OriginField() {
    const [field, meta, helpers] = useField<ORIGIN|null>({ name: 'origin' });
    const modalRef = useRef<HTMLDialogElement>(null);
    return (
        <div>
            <button className='flex items-center gap-2 dark:bg-gray-700 pl-3 rounded-md overflow-hidden shadow-md' onClick={() => {
                modalRef.current?.showModal()
            }}>
                <span className="h-full px-3 py-2 inline-flex items-center justify-center dark:bg-gray-800">
                    <i className="fi fi-rs-marker h-full w-full pt-1"></i>
                </span>
                {field.value !== null ? `مبدا: ${field.value.name_fa}` : `انتخاب مبدا`}
            </button>
            <Modal ref={modalRef}>
                {/* border-gray-900/30 */}
                <form method="dialog" className='w-full max-w-[24rem] bg-white dark:bg-darkBlue-oxford border-2 border-black/10 shadow-md dark:text-antiFlashWhite rounded-lg px-4 py-3 flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-xl w-full'>
                        <i className="fi fi-rs-marker size-5"></i>
                        <h4>یک مبدا انتخاب کنید.</h4>
                    </div>
                    <SearchInput />
                    <ul className='w-full flex flex-col gap-2 text-lg'>
                        {origins.map(origin => (
                            <li
                                key={origin.id}
                                className={`select-item ${field.value?.id == origin.id ? 'active' : ''}`}
                                onClick={() => {
                                    helpers.setValue(origin)
                                    modalRef.current?.close()
                                }}>
                                <div className='flex item-center gap-3'>
                                    <Image className='rounded-full' width={30} height={30} alt='Country Flag' src={`/flags/1x1/${origin.country_code.toLowerCase()}.svg`} />
                                    <span>{origin.name_fa} - {origin.name}</span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full bg-sky-800 text-xs'>{origin.tours_from_count} تور</span>
                                    <span className={`input ${field.value?.id == origin.id ? 'active' : ''}`}></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </form>
            </Modal>
        </div>
    )
}