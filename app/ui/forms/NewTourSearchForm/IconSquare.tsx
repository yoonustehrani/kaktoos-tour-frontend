import { MouseEventHandler, ReactNode } from "react";

export default function IconSquare({iconClassName, children, onClick}: {iconClassName: string, children: ReactNode, onClick: MouseEventHandler<HTMLButtonElement>}) {
    return (
        <button type="button" className="flex items-end gap-2 w-fit" onClick={onClick}>
            <span className="bg-white hover:bg-websiteOrange duration-300 shadow-md rounded-xl size-9 md:size-10 p-3 text-lg md:text-xl flex items-center justify-center">
                <i className={`h-5 fi ${iconClassName}`}></i>
            </span>
            {children}
        </button>
    )
}