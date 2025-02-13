'use client';

import { getJalaliMonthNames, getCalendar, getJMoment, farsiNumber } from "@/app/utils"
import { Moment } from "moment-jalaali";
import { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import TableHead from "./TableHead";
import DayCell from "./DayCell";
import MoveButtons from "./MoveButtons";
import { CALENDAR_MODE, DATE_ARRAY } from "./types";

export default function Calendar({
    range,
    handlePick
}: {
    range: boolean
    handlePick: (startDate: string, endDate?: string) => void
}) {
    const now = useMemo(() => getJMoment()(), []);
    const [year, setYear] = useState<number>(now.jYear())
    const [month, setMonth] = useState<number>(now.jMonth() + 1)
    const [selectedDate, setSelectedDate] = useState<DATE_ARRAY>()
    const [endDate, setEndDate] = useState<DATE_ARRAY>()
    const mode = useMemo<CALENDAR_MODE>(() => {
        if (selectedDate) {
            return endDate ? 'RANGE' : 'SINGLE';
        }
        return 'SINGLE';
    }, [selectedDate, endDate])
    const rangeStart = useMemo(() => {
        if (selectedDate) {
            let [year, month, day] = selectedDate;
            return getJMoment()(`${year}/${month}/${day}`, 'jYYYY/jM/jD')
        }
        return null
    }, [selectedDate])

    const isEndDay = (day: number) => {
        if (!endDate) return false
        return year == endDate[0] && month == endDate[1] && day == endDate[2]
    }

    const isSelectedDate = useCallback((day: number) => {
        if (!selectedDate) return false
        return year == selectedDate[0] && month == selectedDate[1] && day == selectedDate[2]
    }, [selectedDate, year, month]);

    const isCurrentMonthCalendar = useMemo(() => year == now.jYear() && month == (now.jMonth() + 1), [year, month])
    function isDateUnavailable(day: number) {
        if (!rangeStart) {
            return isCurrentMonthCalendar && day < now.jDate();
        }
        if (year < rangeStart.jYear()) return true;
        if (year == rangeStart.jYear()) {
            if (month < (rangeStart.jMonth() + 1)) return true;
            return (month == (rangeStart.jMonth() + 1)) && day < rangeStart.jDate();
        }
    }
    const calendar = useMemo(() => getCalendar(year, month), [year, month]);
    const monthsList = useMemo(() => {
        if (year == now.jYear()) {
            return getJalaliMonthNames().filter((x) => x.id >= now.jMonth())
        }
        return getJalaliMonthNames()
    }, [year, month])

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        let _date: DATE_ARRAY = [year, month, Number(e.currentTarget.value)];
        if (selectedDate && range) {
            setEndDate(_date)
        } else {
            setSelectedDate(_date)
        }
    }

    function reset() {
        setSelectedDate(undefined)
        setEndDate(undefined)
    }

    function convertToString(dateArray: DATE_ARRAY) {
        let [year, month, day] = dateArray;
        return `${year}/${month}/${day}`;
    }

    function returnDates() {
        if (selectedDate) {
            handlePick(
                getJMoment()(convertToString(selectedDate), 'jYYYY/jM/jD').format('YYYY-MM-DD'),
                endDate && getJMoment()(convertToString(endDate), 'jYYYY/jM/jD').format('YYYY-MM-DD'),
            )
        }
    }
    // function selectTodayDate()
    // {
    //     let _selectedDate: [number, number, number] = [now.jYear(), now.jMonth() + 1, now.jDate()];
    //     setYear(_selectedDate[0])
    //     setMonth(_selectedDate[1])
    //     setSelectedDate(_selectedDate)
    // }

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
                        <MoveButtons
                            nextDisabled={(now.jYear() + 1) == year && month == 12}
                            handleNextCalendar={() => {
                                setYear(selectedYear => month + 1 > 12 ? selectedYear + 1 : selectedYear)
                                setMonth(selectedMonth => selectedMonth + 1 > 12 ? 1 : selectedMonth + 1)
                            }}
                            prevDisabled={now.jYear() == year && month == (now.jMonth() + 1)}
                            handlePrevCalendar={() => {
                                setYear(selectedYear => month - 1 < 1 ? selectedYear - 1 : selectedYear)
                                setMonth(selectedMonth => selectedMonth - 1 < 1 ? 12 : selectedMonth - 1)
                            }}
                        />
                    </div>
                    {/* <div className="w-full flex items-center my-3 px-3">
                        <button onClick={() => {}} aria-label="calendar backward" className={`${isCurrentMonthCalendar ? 'opacity-0' : 'opacity-100'} text-gray-800 dark:text-antiFlashWhite bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded-full`}>
                            <span>برو به امروز</span>
                        </button>
                    </div> */}
                    <div className="w-full mt-3 flex gap-2">
                        {selectedDate && (
                            <button onClick={reset} className="text-gray-800 dark:text-antiFlashWhite bg-gray-200 dark:bg-gray-900 px-3 py-1 rounded-full">بازنشانی</button>
                        )}
                        {endDate && (
                            <button onClick={() => setEndDate(undefined)} className="text-gray-800 dark:text-antiFlashWhite bg-gray-200 dark:bg-gray-900 px-3 py-1 rounded-full">حذف تاریخ پایان</button>
                        )}
                    </div>

                    <div className="flex items-center justify-between mt-6 overflow-x-auto">
                        <table className="w-full">
                            <TableHead />
                            <tbody>
                                {calendar.map((week, index) => (
                                    <tr key={index}>
                                        {week.map((day, i) => (
                                            <DayCell
                                                key={`${year}-${month}-${i}`}
                                                isToday={isCurrentMonthCalendar && day == now.jDate()}
                                                disabled={!!(day && isDateUnavailable(day))}
                                                isSelected={!!(day && isSelectedDate(day))}
                                                isEndDay={!!(day && isEndDay(day))}
                                                onClick={handleClick}
                                                day={day}
                                                mode={mode}
                                            />
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full mt-3 flex justify-end gap-2">
                        <button onClick={returnDates} className="text-gray-800 dark:text-antiFlashWhite bg-gray-200 dark:bg-blue-900 px-3 py-1 rounded-full">ذخیره</button>
                    </div>
                </div>
            </div>
        </div>
    )
}