import { farsiNumber } from "@/app/utils"
import { MouseEventHandler } from "react"
import { CALENDAR_MODE } from "./types"

export default function DayCell({
    day,
    isToday,
    isEndDay,
    onClick,
    disabled,
    isSelected,
    mode,
    data = null
}: {
    day: number | null
    isToday: boolean
    isEndDay: boolean
    disabled: boolean,
    isSelected: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
    mode: CALENDAR_MODE
    data?: string | number | null
}) {
    return (
        <td className="pt-6 px-2">
            {day && (
                <div className={`flex w-full justify-center pb-1 relative items-center ${isToday ? 'border-b-2 border-gray-500' : ''}`}>
                    {data && (<span className="text-xs absolute bg-websiteOrange text-white size-6 flex items-center justify-center rounded-full -top-3 -left-3">{data}</span>)}
                    {isSelected || isEndDay  ? ( // || isRangeStartDay(day)
                        <span 
                        className={`
                            duration-300 text-base text-eerieBlack h-8 w-8 
                            bg-appleGreen
                            ${mode === 'RANGE' ? (isEndDay ? 'rounded-l-full' : 'rounded-r-full') : 'rounded-full'} text-center flex items-center justify-center    
                        `}
                        >{farsiNumber(day)}</span>
                    ): (
                        <button 
                            disabled={disabled} 
                            onClick={onClick}
                            value={day}
                            type="button" 
                            className="duration-300 text-base text-eerieBlack h-8 w-8 hover:bg-appleGreen rounded-full text-center flex items-center justify-center disabled:text-gray-300"
                            >{farsiNumber(day)}</button>
                    )}
                </div>
            )}
        </td>
    )
}