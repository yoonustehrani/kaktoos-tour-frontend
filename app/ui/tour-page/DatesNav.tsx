import { FunctionComponent, PropsWithChildren } from "react";
import Link from "next/link";
import { getJalaliMomentOf } from "@/app/utils";
import { TOUR_DATE } from "@/app/utils/types"

// const date_format = 'dddd jD jMMMM';
const getFormattedDate = (date: string, format: string = 'jD jMMMM') => (
    getJalaliMomentOf(date).format(format)
)

const staticClassNames = 'rounded-md p-3 border-2 flex flex-col-reverse lg:flex-row gap-3 items-center justify-center text-sm lg:text-base'

function Div(props: PropsWithChildren) {
    return <div className={`${staticClassNames} text-white bg-dark-moss-green border-dark-moss-green dark:bg-transparent dark:text-blue-500 dark:border-darkBlue-marian-light`}>{props.children}</div>
}

interface DatePillProps {date: TOUR_DATE, is_current: boolean, is_cheapest: boolean, is_most_expensive: boolean}

function DatePill(
    {date, is_current = false, is_cheapest = false, is_most_expensive = false}: DatePillProps
) {
    const Comp = is_current ? Div : Link;
    return (
        <Comp href={`?date=${date.id}`} className={`${staticClassNames} text-gray-700 hover:text-white hover:bg-dark-moss-green hover:border-dark-moss-green dark:hover:bg-transparent dark:text-gray-400 dark:border-gray-500 hover:dark:border-darkBlue-marian-light`}>                 
            <div className="flex gap-3 items-center justify-center lg:justify-start w-full md:w-auto">
                <div className="flex gap-2 items-center">
                    <span className="hidden md:fi h-7 fi-rs-hourglass-start"></span>
                    <div className="flex flex-col-reverse items-center md:flex-row gap-2">
                        <span>{getFormattedDate(date.start_date, 'dddd')}</span>
                        <span className="w-max">{getFormattedDate(date.start_date)}</span>
                    </div>
                    <span>-</span>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="hidden md:fi h-7 fi-rs-hourglass-end"></span>
                    <div className="flex flex-col-reverse items-center md:flex-row gap-2">
                        <span>{getFormattedDate(date.end_date, 'dddd')}</span>
                        <span className="w-max">{getFormattedDate(date.end_date)}</span>
                    </div>
                </div>
            </div>
            {is_cheapest && <span className="dark:text-green-600 dark:bg-gray-800 px-2 text-sm rounded-full">ارزان ترین</span>}
            {is_most_expensive && <span className="dark:text-red-500 dark:bg-gray-800 px-2 text-sm rounded-full">گران ترین</span>}
        </Comp>
    )
}

interface DatesNavProps {
    dates: TOUR_DATE[]
    currentDateId: number
}

const DatesNav: FunctionComponent<DatesNavProps> = ({dates, currentDateId}) => {
    const cheapestDateId = dates.toSorted((a, b) => a.min_adult_price - b.min_adult_price)[0].id;
    const mostExpensiveDateId = dates.toSorted((a, b) => b.min_adult_price - a.min_adult_price)[0].id;
    return (
        <nav className="w-full">
            <h3 className="mb-5 font-bold text-2xl flex items-center gap-3"><i className="fi fi-rs-calendar"></i> تاریخ های رفت و برگشت</h3>
            <ul className="flex w-full overflow-x-auto snap-x pb-4 lg:grid lg:grid-cols-1 gap-3 items-center">
                {dates.map((date, i) => (
                    <li className="snap-center" key={date.id}>
                        <DatePill date={date} is_most_expensive={date.id === mostExpensiveDateId && dates.length > 1} is_cheapest={date.id === cheapestDateId} is_current={currentDateId === date.id}/>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default DatesNav;