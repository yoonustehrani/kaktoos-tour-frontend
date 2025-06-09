import { ReactNode, Ref } from "react";

export default function Modal({
    children,
    ref,
    handleClose
}: {
    ref: Ref<HTMLDialogElement>
    children: ReactNode,
    handleClose?: () => void
}) {
    return (
        <dialog className="bg-transparent outline-none border-none" onClose={handleClose} onClick={(e) => {
            if (e.target === e.currentTarget) {
                e.currentTarget.close()
            }
        }} ref={ref}>
            {children}
        </dialog>
    )
}