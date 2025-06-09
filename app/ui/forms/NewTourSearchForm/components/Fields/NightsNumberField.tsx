import { useEffect, useState } from "react";
import IconSquare from "../../IconSquare";
import Field from "../Field";
import { useField } from "formik";

export default function NightsNumberField()
{
    const [count, setCount] = useState<number>(0);
    const [field, meta, helpers] = useField<number | null>({ name: 'nights' });

    useEffect(() => {
        if (count) {
            helpers.setValue(count)
            return;
        }
        helpers.setValue(null)
    }, [count])

    function increase()
    {
        setCount(c => c === 10 ? c : c + 1)
    }

    function decrease()
    {
        setCount(c => c === 0 ? c : c - 1)
    }


    return (
        <Field>
            <div className="flex items-center gap-2 w-fit">
                <span className="bg-white shadow-md rounded-xl size-9 md:size-10 p-3 text-lg md:text-xl flex items-center justify-center">
                    <i className={`h-5 fi fi-rs-moon`}></i>
                </span>
                <div className="flex items-center text-2xl gap-3">
                    <button onClick={increase} className="flex items-center justify-center size-5 bg-white rounded-full">+</button>
                    <input onChange={e => setCount(Number(e.currentTarget.value) || 0)} value={count} className="flex bg-transparent text-center w-8 border-b border-black/10" />
                    <button onClick={decrease} className="flex items-center justify-center size-5 bg-white rounded-full">-</button>
                </div>
            </div>
            <h4 className="text-lg md:text-xl font-semibold">مدت اقامت</h4>
        </Field>
    )
}