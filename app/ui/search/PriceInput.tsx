'use client';

import { ChangeEvent, useState } from "react"

export default function({className, initialValue}: {className: string, initialValue: number}) {
    const [price, setPrice] = useState<number>(initialValue);
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setPrice(Number(
            e.currentTarget.value.replaceAll(',', '')
        ))
    }
    const formattedValue = price ? price.toLocaleString() : ''
    
    return (
        <input onChange={handleChange} value={formattedValue} type="text" className={className}/>
    )
}