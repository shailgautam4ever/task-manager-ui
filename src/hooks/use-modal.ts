import { useEffect, useRef } from "react";

const useModal = () => {
    const modalRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        const modal = document.getElementById('task-modal')
        if (modal) {
            modalRef.current = modal as HTMLDialogElement
        }
    }, [])
    return {
        ref: modalRef,
        show: () => {
            modalRef.current.showModal()
        },
        close: () => {
            modalRef.current.close()
        }
    }
}
 
export default useModal;