// import style from '../commonStyles/Icons.module.css'
// import { Box, Tooltip } from '@mui/material';
// import { Cancel, AttachMoney, MoneyOff, AccountBox, DoneAll, } from '@mui/icons-material'
// import { payment } from '../../services/utils';
// export default function Additional({ params }) {
//     const paid = params.row.paid;
//     const newClient = params.row.new_client;
//     const paymentMethod = params.row.payment_method;
//     const refused = params.row.refused;
//     const finished = params.row.finished;
//     let method = payment(paymentMethod)
//     return (
//         <Box className={style.container}>
//             {paid ?
//                 <Tooltip title='Paid'>
//                     <AttachMoney />
//                 </Tooltip>
//                 :
//                 <Tooltip title='Not Paid'>
//                     <MoneyOff />
//                 </Tooltip>
//             }
//             {newClient ?
//                 <Tooltip title='New client'>
//                     <AccountBox className={style.do} />
//                 </Tooltip>
//                 :
//                 <Tooltip title='Not new client'>
//                     <AccountBox className={style.not} />
//                 </Tooltip>
//             }
//             {method}
//             {refused &&
//                 <Tooltip title='Refused order'>
//                     <Cancel className={style.not} />
//                 </Tooltip>
//             }
//             {finished &&
//                 <Tooltip title='Completed order'>
//                     <DoneAll className={style.do} />
//                 </Tooltip>
//             }
//         </Box>
//     )
// }