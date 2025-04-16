import { ReactNode } from "react";

export default function Field({children}: {children: ReactNode})
{
    return (
        // w-1/2 
        <div className="bg-gray-200 p-3 h-full rounded-xl md:w-52 flex flex-col gap-4 justify-center">{children}</div>
    )
}