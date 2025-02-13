import { MouseEventHandler, ReactNode } from "react"

type ButtonClickHandler = MouseEventHandler<HTMLButtonElement>

function Button({
    text,
    children,
    disabled,
    onClick
}: {
    text: string
    children: ReactNode
    disabled: boolean
    onClick: ButtonClickHandler
}) {
    return (
        <button disabled={disabled} onClick={onClick} aria-label="calendar backward" className="disabled:text-gray-300 dark:disabled:text-gray-500 hover:text-gray-400 text-gray-800 dark:text-antiFlashWhite">
            <span className="text-xs">{text}</span>
            {children}
        </button>
    )
}

export default function MoveButtons({
    prevDisabled,
    nextDisabled,
    handlePrevCalendar,
    handleNextCalendar
}: {
    prevDisabled: boolean,
    nextDisabled: boolean,
    handlePrevCalendar: ButtonClickHandler,
    handleNextCalendar: ButtonClickHandler
}) {
    return (
        <div className="flex flex-row items-center gap-3">
            <Button text="قبل" disabled={prevDisabled} onClick={handlePrevCalendar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                </svg>
            </Button>
            <Button text="بعد" disabled={nextDisabled} onClick={handleNextCalendar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                </svg>
            </Button>
        </div>
    )
}