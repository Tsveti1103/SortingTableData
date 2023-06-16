import modalStyles from '../commonStyles/modal.module.css';

import { Edit } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Modal, Select, Tooltip, Typography } from "@mui/material";

import { useOrderContext } from "../../contexts/OrderContext";
import useForm from '../../hooks/useForm';
import useModal from "../../hooks/useModal";


export default function EditOrder({ currentRow, setOrders }) {
    const { editOrder } = useOrderContext();
    const { open, handleClickOpen, handleClose } = useModal()
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm(
        currentRow, editOrder, currentRow.id, setOrders, handleClose);
    const methods = ['CASH', 'CARD', "INVOICE"]
    return (
        <>
            <Tooltip title='Edit Order'>
                <IconButton onClick={handleClickOpen}>
                    <Edit></Edit>
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
                        Edit Order
                    </Typography>
                    <FormControl className={modalStyles.form}>
                        <label htmlFor="client_name">Client Name</label>
                        <input
                            type="text"
                            name="client_name"
                            id="client_name"
                            required
                            value={values.client_name}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="delivery_date">Created date</label>
                        <input
                            type="date"
                            name="delivery_date"
                            id="delivery_date"
                            required
                            value={values.delivery_date}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="details">Details</label>
                        <input
                            type="text"
                            name="details"
                            id="details"
                            required
                            value={values.details}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="finished">Finished</label>
                        <input
                            type="checkbox"
                            name="finished"
                            id="finished"
                            required
                            value={values.finished}
                            checked={values.finished}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="new_client">New Client</label>
                        <input
                            type="checkbox"
                            name="new_client"
                            id="new_client"
                            required
                            value={values.new_client}
                            checked={values.new_client}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="paid">Paid</label>
                        <input
                            type="checkbox"
                            name="paid"
                            id="paid"
                            required
                            value={values.paid}
                            checked={values.paid}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="refused">Refused</label>
                        <input
                            type="checkbox"
                            name="refused"
                            id="refused"
                            required
                            value={values.refused}
                            checked={values.refused}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            required
                            value={values.price}
                            onChange={onChangeHandler}
                        />

                        <InputLabel id="payment_method-label">Payment method</InputLabel>
                        <Select
                            labelId="payment_method-label"
                            id="payment_method"
                            name='payment_method'
                            value={values.payment_method}
                            label="Payment"
                            onChange={onChangeHandler}
                        >
                            <MenuItem value={"CASH"}>Cash</MenuItem>
                            <MenuItem value={"CARD"}>Card</MenuItem>
                            <MenuItem value={"INVOICE"}>Invoice</MenuItem>
                        </Select>
                    </FormControl>
                    <div className={modalStyles.modalBtns}>
                        <Button onClick={handleClose} className={modalStyles.closeBtn}>Close</Button>
                        <Button onClick={onSubmit} className={modalStyles.actionBtn}>Edit</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}