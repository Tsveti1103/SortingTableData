import { Box } from '@mui/material'
import DeleteOrder from '../Delete/Delete';
import EditOrder from '../Edit/Edit';
import Details from '../Details/Details';


export default function OrdersActions({ params, setOrders }) {
    let currentRow = params.row
    return (
        <Box>
            <Details currentRow={currentRow} />
            <EditOrder currentRow={currentRow} setOrders={setOrders} />
            <DeleteOrder currentRow={currentRow} setOrders={setOrders} />
        </Box>
    )
}