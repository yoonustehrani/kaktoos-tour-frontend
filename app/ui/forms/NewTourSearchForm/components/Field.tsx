import { ReactNode } from "react";

export default function Field({children}: {children: ReactNode})
{
    return (
        <div className="bg-gray-200 p-3 h-full rounded-xl aspect-video w-auto flex flex-col gap-4 justify-center">{children}</div>
    )
}