import useFetcherCustom from "../../hooks/useFetcher";
import * as itemService from "../../services/itemService";
// import * as React from 'react';
import {
    DataGrid, GridToolbar
} from '@mui/x-data-grid';
import CustomPagination from "../../tableUtils/tablePagination";

export default function Orders() {
    const [orders, setOrders] = useFetcherCustom(itemService.getAllOrders, []);
    const haveOrders = orders.length > 0;

    const columns = [
        { field: 'id', headerName: 'Order number', width: 150 },
        { field: 'client_name', headerName: 'Client Name', width: 150, editable: true, },
        { field: 'details', headerName: 'Details', width: 150, editable: true, },
        { field: 'price', headerName: 'Price', width: 150, editable: true, },
        { field: 'date_created', headerName: 'Created on', width: 150, editable: true, },
        { field: 'delivery_date', headerName: 'Delivery date', width: 150, editable: true, },
        { field: 'payment_method', headerName: 'Payment method', width: 150, editable: true, },
    ];
    return (
        <>
            <h1>Orders</h1>
            {haveOrders &&
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        editMode="row"
                        pagination
                        rows={orders}
                        columns={columns}
                        slots={{ toolbar: GridToolbar, pagination: CustomPagination, }}
                        checkboxSelection={true}
                    />

                </div>
            }
        </>
    )
}

