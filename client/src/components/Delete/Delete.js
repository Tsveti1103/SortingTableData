import { Delete } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { useOrderContext } from "../../contexts/OrderContext";
import modalStyles from '../commonStyles/modal.module.css';
import useModal from "../../hooks/useModal";


export default function DeleteOrder({ currentRow, setOrders }) {
    const { deleteOrder } = useOrderContext();
    const { open, handleClickOpen, handleClose } = useModal()

    const onDelete = () => {
        deleteOrder(currentRow.id, setOrders);
        handleClose()
    }
    return (
        <>
            <Tooltip title='Delete Order'>
                <IconButton onClick={handleClickOpen}>
                    <Delete></Delete>
                </IconButton>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={modalStyles.modal}
            >
                <Box className={modalStyles.modalBox}>
                    <Button className={modalStyles.close} onClick={handleClose}><span>&#10005;</span></Button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Order
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You are about to delete order № <b>{currentRow.id}</b> ?
                    </Typography>
                    <div className={modalStyles.modalBtns}>
                        <Button onClick={handleClose} className={modalStyles.closeBtn}>Close</Button>
                        <Button onClick={onDelete} className={modalStyles.actionBtn}>Delete</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

