import { useState } from "react"

export const useChangeHeart = () => {

    const [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return { open, close, isOpen }
}