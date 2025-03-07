import { ReactNode } from "react"

type Props = {
    title: string
    children: ReactNode
}

export default function FilterBox({title, children}: Props)
{
    return (
        <details open className="relative">
            <summary className="text-xl font-bold">{title}</summary>
            {children}
        </details>
    )
}