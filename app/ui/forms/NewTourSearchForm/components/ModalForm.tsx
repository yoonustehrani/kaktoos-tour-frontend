import Modal from "@/app/ui/Modal";
import { ReactNode, Ref } from "react";

type Props = {
    modalRef: Ref<HTMLDialogElement>,
    title: string
    iconClass: string
    children: ReactNode
}

export default function ModalForm({modalRef, title, iconClass, children}: Props)
{
    return (
        <Modal ref={modalRef}>
            <form method="dialog" className='w-full max-w-[24rem] bg-white border-2 border-black/10 shadow-md rounded-lg px-4 py-3 flex flex-col gap-4'>
                <div className='flex items-center gap-2 text-xl w-full'>
                    <i className={`size-5 fi ${iconClass}`}></i>
                    <h4>{title}</h4>
                </div>
                {children}
            </form>
        </Modal>
    )
}