import Field from "../Field";
import IconSquare from "../../IconSquare";
import { ChangeEvent, useEffect, useReducer, useRef, useState } from "react";
import { useField } from "formik";
import { DESTINATION, DESTINATIONS_GROUPPED, HttpError, ID, ORIGIN } from "@/app/utils/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getDestinations } from "@/app/utils/queries";
import ModalForm from "../ModalForm";
import SearchInput from "../../../SearchTourForm/SearchInput";
import Image from "next/image";

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

export default function SelectDestinationsField()
{
    const modalRef = useRef<HTMLDialogElement>(null);
    const [field, meta, helpers] = useField<number[]|null>({ name: 'destinations' });
    const [state, dispath] = useReducer(destinationReducer, [])
    useEffect(() => {
        if (state) {
            if (state.length > 0) {
                helpers.setValue(state.map(x => x.id))
                return;
            }
            helpers.setValue(null)
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
        <Field>
            <IconSquare onClick={() => modalRef.current?.showModal()} iconClassName="fi-rs-route">
                {state.length === 0 && (
                    <span className="text-lg">انتخاب مقصد<span className="text-sm px-1">(ها)</span></span>
                )}
                {state.length === 1 && (
                    <div className="flex items-center gap-3">
                        <Image className="rounded-lg" src={`/flags/1x1/${state[0]?.country_code.toLowerCase()}.svg`} height={36} width={36} alt="Country Flag" />
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-xs">{state[0].name_fa}</h5>
                            <h6 className="text-xs">{state[0].name}</h6>
                        </div>
                        <span onClick={(e) => {
                            e.stopPropagation()
                            removeDesination(state[0].id)
                        }} className="bg-gray-300 dark:text-white dark:bg-red-700 size-5 flex items-center justify-center rounded-sm shadow-md">
                            <i className="block fi fi-rs-cross text-xs size-3"></i>
                        </span>
                    </div>
                )}
                {state.length > 1 && (
                    <span className="text-lg">{state.length} مقصد</span>
                )}
            </IconSquare>
            <h4 className="text-xl font-semibold">مقصد تور</h4>
            <ModalForm modalRef={modalRef} title="مقاصد موردنظر را انتخاب کنید." iconClass="fi-rs-route">
                <SearchInput loading={isPending} value={searchTerm} changeHandler={handleSearchInputChange} placeHolder="یک شهر را جستجو کنید" />
                <p className="h-4 text-sm text-red-500">{isError && error?.response?.data.message}</p>
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
                                                <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full text-label text-xs'>{dest.tours_count} تور</span>
                                                <input type="checkbox" onChange={() => { }} checked={isChecked(dest.id)} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </ModalForm>
        </Field>
    )
}