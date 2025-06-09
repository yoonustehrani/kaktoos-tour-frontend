import { useEffect, useMemo, useReducer, useRef } from "react";
import Field from "../Field";
import IconSquare from "../../IconSquare";
import Modal from "@/app/ui/Modal";
import Calendar from "../../../Calendar/Calendar";
import { convertToJalali } from "@/app/utils";

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

export default function PickDatesField({
    setFieldValue
}: {
    setFieldValue: Function
})
{
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
        <Field>
            <IconSquare onClick={() => modalRef.current?.showModal()} iconClassName="fi-rs-calendar">
                {noDatePicked ? (
                    <span className="md:text-lg text-right">انتخاب تاریخ</span>
                ): (
                    state.end_date == null ? (
                        <span className="text-justify">
                            تاریخ رفت: {convertToJalali((state.start_date as string))}
                            <br />
                            انتخاب تاریخ برگشت</span>
                    ) : (
                        <span className="text-justify">تاریخ رفت: {convertToJalali((state.start_date as string))} <br /> تاریخ برگشت: {convertToJalali(state.end_date)}</span>
                    )
                )}
            </IconSquare>
            <h4 className="text-lg md:text-xl font-semibold">تاریخ رفت و برگشت</h4>
            <Modal ref={modalRef}>
                <Calendar range={true} handlePick={(startDate, endDate) => {
                    addStartDate(startDate || null)
                    addEndDate(endDate || null)
                    modalRef.current?.close()
                }} />
            </Modal>
        </Field>
    )
}