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
    mode
}: {
    day: number | null
    isToday: boolean
    isEndDay: boolean
    disabled: boolean,
    isSelected: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
    mode: CALENDAR_MODE
}) {
    return (
        <td className="pt-6 px-2">
            {day && (
                <div className={`flex w-full justify-center pb-1 items-center ${isToday ? 'border-b-2 border-gray-500 dark:border-gray-100' : ''}`}>
                    {isSelected || isEndDay  ? ( // || isRangeStartDay(day)
                        <span 
                        className={`
                            duration-300 text-base text-eerieBlack dark:text-antiFlashWhite h-8 w-8 
                            bg-appleGreen dark:bg-darkBlue-marian-light 
                            ${mode === 'RANGE' ? (isEndDay ? 'rounded-l-full' : 'rounded-r-full') : 'rounded-full'} text-center flex items-center justify-center    
                        `}
                        >{farsiNumber(day)}</span>
                    ): (
                        <button 
                            disabled={disabled} 
                            onClick={onClick}
                            value={day}
                            type="button" 
                            className="duration-300 text-base text-eerieBlack dark:text-antiFlashWhite h-8 w-8 hover:bg-appleGreen dark:hover:bg-gray-500 rounded-full text-center flex items-center justify-center disabled:text-gray-300 disabled:dark:text-gray-600"
                            >{farsiNumber(day)}</button>
                    )}
                </div>
            )}
        </td>
    )
}