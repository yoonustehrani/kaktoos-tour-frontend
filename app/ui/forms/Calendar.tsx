'use client';

import { getJalaliMonthNames, getCalendar, getJMoment, farsiNumber } from "@/app/utils"
import { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";

const weekDays = [
    {
        index: 1,
        name: 'شنبه',
        short_name: 'ش',
    },
    {
        index: 2,
        name: 'یکشنبه',
        short_name: 'ی',
    },
    {
        index: 3,
        name: 'دوشنبه',
        short_name: 'د',
    },
    {
        index: 4,
        name: 'سه‌شنبه',
        short_name: 'س',
    },
    {
        index: 5,
        name: 'چهارشنبه',
        short_name: 'چ',
    },
    {
        index: 6,
        name: 'پنجشنبه',
        short_name: 'پ',
    },
    {
        index: 7,
        name: 'جمعه',
        short_name: 'ج',
    },
]

export default function Calendar({
    handlePick
}: {
    handlePick: (date: string) => void
}) {
    const now = useMemo(() => getJMoment()(), []);
    const [year, setYear] = useState(now.jYear())
    const [month, setMonth] = useState(now.jMonth() + 1)
    const [selectedDate, setSelectedDate] = useState<[number, number, number]>()
    const isSelectedDate = useCallback((day: number) => {
        if (! selectedDate) return false
        return year == selectedDate[0] && month == selectedDate[1] && day == selectedDate[2]
    }, [selectedDate, year, month]);
    const isCurrentMonthCalendar = useMemo(() => year == now.jYear() && month == (now.jMonth() + 1), [year, month])
    const calendar = useMemo(() => getCalendar(year, month), [year, month]);
    const monthsList = useMemo(() => {
        if (year == now.jYear()) {
            return getJalaliMonthNames().filter((x) => x.id >= now.jMonth())
        }
        return getJalaliMonthNames()
    }, [year, month])

    const [prevDisabled, nextDisabled] = useMemo(() => ([
        now.jYear()== year && month == (now.jMonth() + 1),
        (now.jYear() + 1) == year && month == 12
    ]), [year, month]);
    
    useEffect(() => {
        if (selectedDate?.filter(x => x).length === 3) {
            let [year, month, day] = selectedDate
            handlePick(getJMoment()(`${year}/${month}/${day}`, 'jYYYY/jM/jD').format('YYYY-MM-DD'))
        }
    }, [selectedDate])

    function handleClick(e: MouseEvent<HTMLButtonElement>)
    {
        setSelectedDate([year, month, Number(e.currentTarget.value)])
    }

    function selectTodayDate()
    {
        let _selectedDate: [number, number, number] = [now.jYear(), now.jMonth() + 1, now.jDate()];
        setYear(_selectedDate[0])
        setMonth(_selectedDate[1])
        setSelectedDate(_selectedDate)
    }

    function handlePrevCalendar()
    {
        setYear(selectedYear => month - 1 < 1 ? selectedYear - 1 : selectedYear)
        setMonth(selectedMonth => selectedMonth - 1 < 1 ? 12 : selectedMonth - 1)
    }

    function handleNextCalendar()
    {
        setYear(selectedYear => month + 1 > 12 ? selectedYear + 1 : selectedYear)
        setMonth(selectedMonth => selectedMonth + 1 > 12 ? 1 : selectedMonth + 1)
    }

    return (
        <div className="flex items-center justify-center py-8 px-4 w-fit">
            <div className="max-w-sm md:max-w-md w-full shadow-lg">
                <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                    <div className="px-4 flex flex-row items-center justify-between">
                        <div className="focus:outline-none text-base font-bold dark:text-antiFlashWhite text-gray-800 flex gap-2 items-center">
                            <select onChange={(e) => setMonth(Number(e.target.value) + 1)} className="bg-gray-200 dark:bg-gray-900/50 rounded-md px-2 py-1" value={month - 1}>
                                {monthsList.map((m) => (
                                    <option key={m.id} value={m.id}>{m.name}</option>
                                ))}
                            </select>
                            <select onChange={(e) => setYear(Number(e.target.value))} className="bg-gray-200 dark:bg-gray-900/50 rounded-md px-2 py-1" value={year}>
                                {[now.jYear(), now.jYear() + 1].map((y) => (
                                    <option key={y} value={y}>{farsiNumber(y)}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <button disabled={prevDisabled} onClick={handlePrevCalendar} aria-label="calendar backward" className="disabled:text-gray-300 dark:disabled:text-gray-500 hover:text-gray-400 text-gray-800 dark:text-antiFlashWhite">
                                <span className="text-xs">قبل</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
                            <button disabled={nextDisabled} onClick={handleNextCalendar} aria-label="calendar forward" className="disabled:text-gray-300 dark:disabled:text-gray-500 hover:text-gray-400 text-gray-800 dark:text-antiFlashWhite">
                                <span className="text-xs">بعد</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex items-center my-3 px-3">
                        <button onClick={() => {}} aria-label="calendar backward" className={`${isCurrentMonthCalendar ? 'opacity-0' : 'opacity-100'} text-gray-800 dark:text-antiFlashWhite bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded-full`}>
                            <span>برو به امروز</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-6 overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    {weekDays.map(day => (
                                        <th key={day.index}>
                                            <div className="w-full flex justify-center">
                                                <span className="text-base font-medium text-center text-gray-800 dark:text-antiFlashWhite">{day.short_name}</span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {calendar.map((week, index) => (
                                    <tr key={index}>
                                        {week.map((day, i) => (
                                            <td key={`${year}-${month}-${i}`} className="pt-6 px-2">
                                                {day && (
                                                    <div className={`flex w-full justify-center pb-1 items-center ${isCurrentMonthCalendar && day == now.jDate() ? 'border-b-2 border-gray-500 dark:border-gray-100' : ''}`}>
                                                        {isSelectedDate(day) ? (
                                                            <span 
                                                            className="duration-300 text-base text-eerieBlack dark:text-antiFlashWhite h-8 w-8 bg-appleGreen dark:bg-darkBlue-marian-light rounded-full text-center flex items-center justify-center"
                                                            >{farsiNumber(day)}</span>
                                                        ): (
                                                            <button 
                                                                disabled={isCurrentMonthCalendar && day < now.jDate()} 
                                                                onClick={handleClick}
                                                                value={day}
                                                                type="button" 
                                                                className="duration-300 text-base text-eerieBlack dark:text-antiFlashWhite h-8 w-8 hover:bg-appleGreen dark:hover:bg-gray-500 rounded-full text-center flex items-center justify-center disabled:text-gray-300 disabled:dark:text-gray-600"
                                                                >{farsiNumber(day)}</button>
                                                        )}
                                                        
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}