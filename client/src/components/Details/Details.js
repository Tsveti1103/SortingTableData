import { Box, Button, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import modalStyles from '../commonStyles/modal.module.css';
import style from '../commonStyles/Icons.module.css'
import { Preview } from '@mui/icons-material'
import useModal from "../../hooks/useModal";
import { convertDate } from "../../services/utils";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
export default function Details({ currentRow }) {
    const { open, handleClickOpen, handleClose } = useModal()

    const created = convertDate(currentRow.date_created,true)
    const delivery = convertDate(currentRow.delivery_date)
    return (
        <>
            <Tooltip title='View Order Details'>
                <IconButton onClick={handleClickOpen}>
                    <Preview></Preview>
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
                        Order Details
                    </Typography>
                    <div>
                        <h3>Order number: {currentRow.id}</h3>
                        <p>Client name: {currentRow.client_name}</p>
                        <p>Created on: {created}</p>
                        <p>Delivery date: {delivery}</p>
                        <p>Details: {currentRow.details}</p>
                        <p>Total price: {currentRow.price}</p>
                        <p>Payment method: {currentRow.payment_method}</p>
                        <p>The order is paid: {currentRow.paid ?<CheckIcon className={style.do}/> : <CloseIcon className={style.not}/> }</p>
                        <p>The client is new: {currentRow.new_client ?<CheckIcon className={style.do}/> : <CloseIcon className={style.not}/> }</p>
                        <p>The order is finished: {currentRow.finished ?<CheckIcon className={style.do}/> : <CloseIcon className={style.not}/> }</p>
                        <p>The order is refused: {currentRow.refused ?<CheckIcon className={style.do}/> : <CloseIcon className={style.not}/> }</p>
                    </div>
                    <div className={modalStyles.modalBtns}>
                        <Button onClick={handleClose} className={modalStyles.closeBtn}>Close</Button>
                    </div>
                </Box>
            </Modal>

        </>
    )
}