import modalStyles from '../commonStyles/modal.module.css';
import style from '../commonStyles/Icons.module.css'
import { Box, Button, Dialog, IconButton, Tooltip, Typography } from "@mui/material";
import { Preview, Check, Close } from '@mui/icons-material'
import { convertDate } from "../../services/utils";
import useModal from "../../hooks/useModal";
export default function Details({ currentRow }) {
    const { open, handleClickOpen, handleClose } = useModal()

    const created = convertDate(currentRow.date_created, true)
    const delivery = convertDate(currentRow.delivery_date)
    return (
        <>
            <Tooltip title='View Order Details'>
                <IconButton onClick={handleClickOpen}>
                    <Preview></Preview>
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                scroll='body'
            >
                <Box className={modalStyles.modalBox}>
                    <Button className={modalStyles.close} onClick={handleClose}><span>&#10005;</span></Button>
                    <Typography id="modal-modal-title" variant="h2" component="h2">
                        Order Details
                    </Typography>
                    <div className={modalStyles.info}>
                        <h3>Order number: {currentRow.id}</h3>
                        <p><b>Client name:</b> {currentRow.client_name}</p>
                        <p><b>Created on:</b> {created}</p>
                        <p><b>Delivery date:</b> {delivery}</p>
                        <p><b>Details:</b> {currentRow.details}</p>
                        <p><b>Total price:</b> {currentRow.price}</p>
                        <p><b>Payment method:</b> {currentRow.payment_method}</p>
                        <p><b>The order is paid:</b> {currentRow.paid ? <Check className={style.do} /> : <Close className={style.not} />}</p>
                        <p><b>The client is new:</b> {currentRow.new_client ? <Check className={style.do} /> : <Close className={style.not} />}</p>
                        <p><b>The order is finished:</b> {currentRow.finished ? <Check className={style.do} /> : <Close className={style.not} />}</p>
                        <p><b>The order is refused:</b> {currentRow.refused ? <Check className={style.do} /> : <Close className={style.not} />}</p>
                    </div>
                    <div className={modalStyles.modalBtns}>
                        <Button onClick={handleClose} className={modalStyles.closeBtn}>Close</Button>
                    </div>
                </Box>
            </Dialog>

        </>
    )
}