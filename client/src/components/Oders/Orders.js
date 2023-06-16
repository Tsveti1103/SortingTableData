import { useState } from "react";
import { Typography, Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import * as itemService from "../../services/itemService";
import useFetcherCustom from "../../hooks/useFetcher";
import { takeColomns } from '../../tableUtils/tableColumns'
export default function Orders() {
    const [orders, setOrders] = useFetcherCustom(itemService.getAllOrders, []);
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0,
    });
    const columns = takeColomns(setOrders)
    const dataGrilOpt = {
        paginationModel: paginationModel,
        onPaginationModelChange: setPaginationModel,
        pageSizeOptions: [5, 10, 20, 50],
        editMode: "row",
        rows: orders,
        columns: columns,
        slots: { toolbar: GridToolbar, },
        slotProps: {
            toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
            },
        },
        checkboxSelection: true,
        getRowClassName: (params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
    }
    return (
        <Box sx={{ width: '94vw', }}>
            <Typography
                variant="h3"
                content="h3"
                sx={{ textAlign: 'center', mb: 3 }}
            >
                Orders
            </Typography>
            <DataGrid
                {...dataGrilOpt}
            />
        </Box>
    )
}

