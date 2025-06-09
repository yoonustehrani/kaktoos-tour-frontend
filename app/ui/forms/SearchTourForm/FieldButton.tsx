import { ButtonHTMLAttributes } from "react";

export default function FieldButton(props: ButtonHTMLAttributes<{}>) {
    return (
        <button className='flex items-center bg-zinc-700 text-antiFlashWhite rounded-t-lg overflow-hidden shadow-md' onClick={props.onClick}>
            <span className="h-full px-3 py-2 inline-flex items-center justify-center gap-2">
                {props.children}
            </span>
        </button>
    )
}