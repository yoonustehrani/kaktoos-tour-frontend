import { Ref, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Modal from "@/app/ui/Modal"
import { ID, ORIGIN } from "@/app/ui/types"
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
    const modalRef = useRef<HTMLDialogElement>(null);
    const [field, meta, helpers] = useField<number | null>({ name: 'origin' });
    const [state, setState] = useState<ORIGIN>()
    useEffect(() => {
        if (state) {
            helpers.setValue(state.id)
            modalRef.current?.close()
        }
    }, [state])

    function isChecked(id: ID) {
        return state && state.id === id
    }

    function handleToggle(origin: ORIGIN) {
        setState(prevState => prevState?.id === origin.id ? undefined : origin)
    }
    return (
        <div>
            <button className='flex items-center dark:bg-gray-900 rounded-t-lg overflow-hidden shadow-md' onClick={() => {
                modalRef.current?.showModal()
            }}>
                <span className="h-full px-3 py-2 inline-flex items-center justify-center gap-2">
                    <i className="fi fi-rs-marker h-full pt-1"></i>
                    <span>{`انتخاب مبدا`}</span>
                </span>
            </button>
            <div className={`w-full max-w-xs bg-gray-800 p-3 flex items-center gap-3 rounded-md rounded-tr-none`}>
                {!state && (
                    <p className="text-justify">روی انتخاب مبدا کلیک کنید تا شهر مبدا سفر خود را مشخص کنید.</p>
                )}
                {state && (
                    <>
                        <Image className="rounded-full" src={`/flags/1x1/${state?.country_code.toLowerCase()}.svg`} height={45} width={45} alt="Country Flag"/>
                        <div className="flex flex-col gap-1 grow">
                            <h5 className="font-bold text-base">{state.name_fa}</h5>
                            <h6 className="text-xs">{state.name}</h6>
                        </div>
                        <button onClick={() => setState(undefined)} className="bg-red-700 size-5 flex items-center justify-center rounded-sm shadow-md">
                            <i className="block fi fi-rs-cross text-xs size-3"></i>
                        </button>
                    </>
                )}
            </div>
            <Modal ref={modalRef}>
                <form method="dialog" className='w-full max-w-[24rem] bg-white dark:bg-darkBlue-oxford border-2 border-black/10 shadow-md dark:text-antiFlashWhite rounded-lg px-4 py-3 flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-xl w-full'>
                        <i className="fi fi-rs-marker size-5"></i>
                        <h4>یک مبدا انتخاب کنید.</h4>
                    </div>
                    <SearchInput placeHolder='مبدا را جستجو کنید'/>
                    <ul className='w-full flex flex-col gap-2 text-lg'>
                        {origins.map(origin => (
                            <li
                                key={origin.id}
                                className={`select-item ${isChecked(origin.id) ? 'active' : ''}`}
                                onClick={handleToggle.bind(null, origin)}>
                                <div className='flex item-center gap-3'>
                                    <Image className='rounded-full' width={30} height={30} alt='Country Flag' src={`/flags/1x1/${origin.country_code.toLowerCase()}.svg`} />
                                    <span>{origin.name_fa} - {origin.name}</span>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full bg-sky-800 text-xs'>{origin.tours_from_count} تور</span>
                                    <span className={`input ${isChecked(origin.id) ? 'active' : ''}`}></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </form>
            </Modal>
        </div>
    )
}