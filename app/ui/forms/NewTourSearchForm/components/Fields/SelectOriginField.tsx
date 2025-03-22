import Field from "../Field";
import IconSquare from "../../IconSquare";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useField } from "formik";
import { HttpError, ID, ORIGIN } from "@/app/utils/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrigins } from "@/app/utils/queries";
import ModalForm from "../ModalForm";
import SearchInput from "../../../SearchTourForm/SearchInput";
import Image from "next/image";

export default function SelectOriginField()
{
    const modalRef = useRef<HTMLDialogElement>(null);
    const [field, meta, helpers] = useField<number[] | null>({ name: 'origins' });
    const [state, setState] = useState<ORIGIN>()
    useEffect(() => {
        if (state) {
            helpers.setValue([state.id])
            modalRef.current?.close()
            return;
        }
        helpers.setValue(null)
    }, [state])

    function isChecked(id: ID) {
        return state && state.id === id
    }

    function handleToggle(origin: ORIGIN) {
        setState(prevState => prevState?.id === origin.id ? undefined : origin)
    }
    
    const [searchTerm, setSearchTerm] = useState<string>('');
    function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.currentTarget.value)
    }

    const {data, isPending, isError, error} = useQuery<ORIGIN[], HttpError>({
        queryKey: ['origins', {searchTerm: searchTerm.length > 2 ? searchTerm : ''}],
        queryFn: () => getOrigins(searchTerm.length > 2 ? searchTerm : ''),
        staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
        retry: 1,
        placeholderData: keepPreviousData,
    })

    return (
        <Field>
            <IconSquare onClick={() => modalRef.current?.showModal()} iconClassName="fi-rs-marker">
                {!state && (
                    <span className="text-lg">انتخاب مبدا</span>
                )}
                {state && (
                    <div className="flex items-center gap-3">
                        <Image className="rounded-lg" src={`/flags/1x1/${state?.country_code.toLowerCase()}.svg`} height={36} width={36} alt="Country Flag" />
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-xs">{state.name_fa}</h5>
                            <h6 className="text-xs">{state.name}</h6>
                        </div>
                        <span onClick={(e) => {
                            e.stopPropagation()
                            setState(undefined)
                        }} className="bg-gray-300 dark:text-white dark:bg-red-700 size-5 flex items-center justify-center rounded-sm shadow-md">
                            <i className="block fi fi-rs-cross text-xs size-3"></i>
                        </span>
                    </div>
                )}
            </IconSquare>
            <h4 className="text-xl font-semibold">مبدا تور</h4>
            <ModalForm modalRef={modalRef} title="یک مبدا انتخاب کنید." iconClass="fi-rs-marker">
                <SearchInput loading={isPending} value={searchTerm} changeHandler={handleSearchInputChange} placeHolder='مبدا را جستجو کنید' />
                <p className="h-4 text-sm text-red-500">{isError && error?.response?.data.message}</p>
                <ul className='w-full flex flex-col gap-2 text-lg'>
                    {data && data.map(origin => (
                        <li
                            key={origin.id}
                            className={`select-item ${isChecked(origin.id) ? 'active' : ''}`}
                            onClick={handleToggle.bind(null, origin)}>
                            <div className='flex item-center gap-3'>
                                <Image className='rounded-full' width={30} height={30} alt='Country Flag' src={`/flags/1x1/${origin.country_code.toLowerCase()}.svg`} />
                                <span>{origin.name_fa} - {origin.name}</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <span className='inline-flex justify-center items-center h-6 w-fit px-3 rounded-full text-label text-xs'>{origin.tours_count} تور</span>
                                <span className={`input ${isChecked(origin.id) ? 'active' : ''}`}></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </ModalForm>
        </Field>
    )
}