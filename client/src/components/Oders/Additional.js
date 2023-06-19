import style from '../commonStyles/Icons.module.css'
import { Box, Tooltip } from '@mui/material';
import { Cancel, AttachMoney, MoneyOff, AccountBox, DoneAll, } from '@mui/icons-material'
import { payment } from '../../services/utils';
export default function Additional({ params }) {
    const field = params.field
    if (field == 'paid') {
        const paid = params.row.paid;
        return (
            <>
                {paid ?
                    <Tooltip title='Paid'>
                        <AttachMoney />
                    </Tooltip>
                    :
                    <Tooltip title='Not Paid'>
                        <MoneyOff />
                    </Tooltip>
                }
            </>
        )
    }
    else if (field == 'new_client') {
        const newClient = params.row.new_client;
        return (
            <>
                {newClient ?
                    <Tooltip title='New client'>
                        <AccountBox className={style.do} />
                    </Tooltip>
                    :
                    <Tooltip title='Not new client'>
                        <AccountBox className={style.not} />
                    </Tooltip>
                }
            </>
        )
    }
    else if (field == 'refused') {
        const refused = params.row.refused;
        return (
            <>
                {refused ?
                    <Tooltip title='Refused order'>
                        <Cancel className={style.not} />
                    </Tooltip>
                    :
                    <Tooltip title='Open order'>
                        <Cancel className={style.do} />
                    </Tooltip>
                }
            </>
        )

    }
    else if (field == 'finished') {
        const finished = params.row.finished;
        return (
            <>
                {finished ?
                    <Tooltip title='Completed order'>
                        <DoneAll className={style.do} />
                    </Tooltip>
                    :
                    <Tooltip title='Open order'>
                        <DoneAll className={style.not} />
                    </Tooltip>
                }
            </>
        )

    }
    else if (field == 'payment_method') {
        const paymentMethod = params.row.payment_method;
        let method = payment(paymentMethod)
        return (
            <>
                {method}
            </>
        )

    }
}