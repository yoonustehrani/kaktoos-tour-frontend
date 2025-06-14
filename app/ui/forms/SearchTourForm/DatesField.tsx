import { useEffect, useMemo, useReducer, useRef } from "react"
import Calendar from "../Calendar/Calendar"
import Modal from "../../Modal"
import { convertToJalali, getJMoment } from "@/app/utils"
import { useField } from "formik"
import FieldButton from "./FieldButton"

// type DATE_ARRAY = [number, number, number]

type DATES = {
    start_date: string | null
    end_date: string | null
}

type Action =
    | { type: 'SET_START_DATE'; payload: string | null }
    | { type: 'SET_END_DATE'; payload: string | null };

function datesReducer(state: DATES, action: Action): DATES {
    switch (action.type) {
        case 'SET_START_DATE':
            return { ...state, start_date: action.payload };
        case 'SET_END_DATE':
            return { ...state, end_date: action.payload };
        default:
            return state;
    }
}


export default function DatesField({
    setFieldValue
}: {
    setFieldValue: Function
}) {
    const modalRef = useRef<HTMLDialogElement>(null)
    const [state, dispatch] = useReducer(datesReducer, {
        start_date: null,
        end_date: null
    })
    const noDatePicked = useMemo(() => state.start_date === null && state.end_date == null, [state])

    useEffect(() => {
        setFieldValue('start_date', state.start_date || null)
        setFieldValue('end_date', state.end_date || null)
    }, [state])

    function addStartDate(date: string|null) {
        dispatch({ type: 'SET_START_DATE', payload: date })
    }

    function addEndDate(date: string|null) {
        dispatch({ type: 'SET_END_DATE', payload: date })
    }

    return (
        <div>
            <FieldButton onClick={() => modalRef.current?.showModal()}>
                <i className="fi fi-rs-calendar h-full pt-1"></i>
                <span>{`انتخاب تاریخ`}</span>
            </FieldButton>
            <div className={`w-full max-w-xs bg-vanilla p-3 flex items-center gap-3 rounded-md rounded-tr-none`}>
                {noDatePicked ? (
                    <p className="text-justify">روی انتخاب تاریخ کلیک کنید تا تاریخ رفت یا برگشت خود را مشخص کنید.</p>
                ): (
                    state.end_date == null ? (
                        <p className="text-justify">
                            تاریخ شروع: {convertToJalali((state.start_date as string))}
                            <br />
                            می توانید انتخاب تاریخ کلیک کنید تا تاریخ برگشت خود را مشخص کنید.</p>
                    ) : (
                        <p className="text-justify">تاریخ شروع: {convertToJalali((state.start_date as string))} <br /> تاریخ پایان: {convertToJalali(state.end_date)}</p>
                    )
                )}
            </div>
            <Modal ref={modalRef}>
                <Calendar range={true} handlePick={(startDate, endDate) => {
                    addStartDate(startDate || null)
                    addEndDate(endDate || null)
                    modalRef.current?.close()
                }} />
            </Modal>
        </div>
    )
}