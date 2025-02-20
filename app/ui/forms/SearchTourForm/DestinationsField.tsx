import { ChangeEvent, Ref, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Modal from "@/app/ui/Modal"
import { DESTINATION, DESTINATIONS_GROUPPED, HttpError, ID } from "@/app/utils/types"
import SearchInput from "./SearchInput"
import Image from "next/image";
import { useField } from "formik";
import FieldButton from "./FieldButton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getDestinations } from "@/app/utils/queries";

type Action =
    | { type: 'ADD_DESTINATION'; payload: DESTINATION }
    | { type: 'UPDATE_DESTINATION'; payload: DESTINATION }
    | { type: 'DELETE_DESTINATION'; payload: ID }
    | { type: 'SET_DESTINATIONS'; payload: DESTINATION[] };

function destinationReducer(state: DESTINATION[], action: Action): DESTINATION[] {
    switch (action.type) {
        case 'ADD_DESTINATION':
            return [...state, action.payload];
        case 'UPDATE_DESTINATION':
            return state.map(destination =>
                destination.id === action.payload.id ? action.payload : destination
            );
        case 'DELETE_DESTINATION':
            return state.filter(destination => destination.id !== action.payload);
        case 'SET_DESTINATIONS':
            return action.payload;
        default:
            return state;
    }
}


export default function DestinationsField() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [field, meta, helpers] = useField<number[]>({ name: 'destinations[]' });
    // const initialState = useMemo(() => field.value, [])
    const [state, dispath] = useReducer(destinationReducer, [])
    useEffect(() => {
        if (state) {
            helpers.setValue(state.map(x => x.id))
        }
    }, [state])

    function isChecked(id: ID) {
        return state.filter(x => x.id === id).length > 0
    }

    function addDesination(destination: DESTINATION) {
        dispath({ type: 'ADD_DESTINATION', payload: destination })
    }

    function removeDesination(id: ID) {
        dispath({ type: 'DELETE_DESTINATION', payload: id })
    }

    function handleToggle(destination: DESTINATION) {
        isChecked(destination.id)
            ? removeDesination(destination.id)
            : addDesination(destination)
    }

    const [searchTerm, setSearchTerm] = useState<string>('');
    function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.currentTarget.value)
    }

    const {data, isPending, isError, error} = useQuery<DESTINATIONS_GROUPPED, HttpError>({
        queryKey: ['destinations', {searchTerm: searchTerm.length > 2 ? searchTerm : ''}],
        queryFn: () => getDestinations(searchTerm.length > 2 ? searchTerm : ''),
        staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
        retry: 1,
        placeholderData: keepPreviousData,
    })
    
    return (
        <div>
            <FieldButton onClick={() => modalRef.current?.showModal()}>
                <i className="fi fi-rs-route h-full pt-1"></i>
                <span>{state.length > 0 ? 'افزودن مقصد' : 'انتخاب مقصد'}</span>
            </FieldButton>
            <div className={`w-full max-w-xs bg-white dark:bg-gray-800 p-3 flex flex-col gap-2 rounded-md rounded-tr-none`}>
                {state.length === 0 && (
                    <p className="text-justify">با کلیک روی انتخاب مقصد می توانید مقاصد سفر خود را مشخص کنید.</p>
                )}
                {state.map(dest => (
                    <div key={dest.id} className={`w-full bg-gray-200 dark:bg-gray-700 h-12 px-3 py-1 flex items-center gap-3 rounded-md`}>
                        <Image className="rounded-full" src={`/flags/1x1/${dest?.country_code.toLowerCase()}.svg`} height={30} width={30} alt="Country Flag" />
                        <div className="flex flex-col gap-1 grow">
                            <h5 className="font-bold text-sm">{dest.name_fa}</h5>
                            <h6 className="text-xs">{dest.name}</h6>
                        </div>
                        <button onClick={() => removeDesination(dest.id)} className="bg-gray-300 dark:text-white dark:bg-red-700 size-5 flex items-center justify-center rounded-sm shadow-md">
                            <i className="block fi fi-rs-cross text-xs size-3"></i>
                        </button>
                    </div>
                ))}
            </div>
            <Modal ref={modalRef}>
                {/* border-gray-900/30 */}
                <form method="dialog" className='w-full max-w-[24rem] bg-white dark:bg-darkBlue-oxford border-2 border-black/10 shadow-md dark:text-antiFlashWhite rounded-lg px-4 py-3 flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-xl w-full'>
                        <i className="fi fi-rs-route size-5"></i>
                        <h4>مقاصد موردنظر را انتخاب کنید.</h4>
                    </div>
                    <SearchInput loading={isPending} value={searchTerm} changeHandler={handleSearchInputChange} placeHolder="یک شهر را جستجو کنید" />
                    <ul className='w-full flex flex-col gap-2 text-lg'>
                        {data && Object.entries(data).map(([countryCode, destinations]) => (
                            <li key={countryCode}>
                                <div className='flex flex-wrap items-center gap-3 text-sm py-2 px-3'>
                                    <span>-</span>
                                    <Image className='p-0' width={28} height={21} alt='Country Flag' src={`/flags/4x3/${countryCode.toLowerCase()}.svg`} />
                                    {destinations.length > 1 && (
                                        <span className="block h-fit">{destinations[0].country.name_fa} - {destinations[0].country.name}</span>
                                    )}
                                    <ul className="w-full rounded-md flex flex-col gap-2 text-lg">
                                        {destinations.map(dest => (
                                            <li
                                                key={dest.id}
                                                className={`select-item ${isChecked(dest.id) ? 'active' : ''}`}
                                                onClick={handleToggle.bind(null, dest)}
                                            >
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span>{dest.name_fa} - {dest.name}</span>
                                                </div>
                                                <div className='flex items-center gap-4'>
                                                    <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full bg-green-100 dark:bg-sky-800 text-xs'>{dest.tours_count} تور</span>
                                                    <input type="checkbox" onChange={() => { }} checked={isChecked(dest.id)} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </form>
            </Modal>
        </div>
    )
}