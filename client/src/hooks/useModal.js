import { useState } from "react";

export default function useModal() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = (e) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return{
        open,
        handleClickOpen,
        handleClose
    }
}

