import style from '../commonStyles/Icons.module.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Tooltip } from '@mui/material';
import { payment } from '../../services/utils';
import DoneAllIcon from '@mui/icons-material/DoneAll';
export default function Additional({ params }) {
    const paid = params.row.paid;
    const newClient = params.row.new_client;
    const paymentMethod = params.row.payment_method;
    const refused = params.row.refused;
    const finished = params.row.finished;
    let method = payment(paymentMethod)
    return (
        <Box className={style.container}>
            {paid ?
                <Tooltip title='Paid'>
                    <AttachMoneyIcon />
                </Tooltip>
                :
                <Tooltip title='Not Paid'>
                    <MoneyOffIcon />
                </Tooltip>
            }
            {newClient ?
                <Tooltip title='New client'>
                    <AccountBoxIcon className={style.do} />
                </Tooltip>
                :
                <Tooltip title='Not new client'>
                    <AccountBoxIcon className={style.not} />
                </Tooltip>
            }
            {method}
            {refused &&
                <Tooltip title='Refused order'>
                    <CancelIcon className={style.not} />
                </Tooltip>
            }
            {finished &&
                <Tooltip title='Completed order'>
                    <DoneAllIcon className={style.do}/>
                </Tooltip>
            }
        </Box>
    )
}