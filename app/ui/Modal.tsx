import { ReactNode, Ref } from "react";

export default function Modal({
    children,
    ref
}: {
    ref: Ref<HTMLDialogElement>
    children: ReactNode
}) {
    return (
        <dialog className="bg-transparent" onClick={(e) => {
            if (e.target === e.currentTarget) {
                e.currentTarget.close()
            }
        }} ref={ref}>
            {children}
        </dialog>
    )
}