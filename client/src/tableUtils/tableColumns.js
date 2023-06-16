import moment from "moment";
import OrdersActions from "../components/Oders/OrdersActions";
import Additional from "../components/Oders/Additional";


export function takeColomns(setOrders) {
    const idFieldOpt = {
        field: 'id',
        headerName: '№',
        align: 'center',
        headerAlign: 'center',
        width: 80,
    }
    const clientNameFieldOpt = {
        field: 'client_name',
        headerName: 'Client Name',
        align: 'center',
        headerAlign: 'center',
        width: 200,
    }
    const detailsFieldOpt = {
        field: 'details',
        headerName: 'Details',
        align: 'center',
        headerAlign: 'center',
        width: 150,
    }
    const priceFieldOpt = {
        field: 'price',
        headerName: 'Price',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        type: 'number',
        valueFormatter: ({ value }) => (Number(value).toFixed(2)),
    };
    const creationDateFieldOpt = {
        field: 'date_created',
        headerName: 'Created on',
        align: 'center',
        headerAlign: 'center',
        width: 150,
        type: 'dateTime',
        valueGetter: (params) =>
            new Date(params.row.date_created),
    }
    const deliveryDateFieldOpt = {
        field: 'delivery_date',
        headerName: 'Delivery date',
        align: 'center',
        headerAlign: 'center',
        width: 150,
        type: 'date',
        valueFormatter: params =>
            moment(params?.value).format("DD/MM/YYYY"),
    }
    const additionalFieldOpt = {
        field: 'additional',
        headerName: 'Additional Information',
        align: 'left',
        headerAlign: 'center',
        width: 200,
        renderCell: (params) =>
            <Additional {...{ params }} />
    }
    const actionsFieldOpt = {
        field: 'actions',
        headerName: 'Actions',
        align: 'center',
        headerAlign: 'center',
        width: 150,
        type: 'actions',
        renderCell: (params) =>
            <OrdersActions {...{ params }} setOrders={setOrders} />
    }
    const columns = [
        { ...idFieldOpt },
        { ...clientNameFieldOpt },
        { ...detailsFieldOpt },
        { ...priceFieldOpt },
        { ...creationDateFieldOpt },
        { ...deliveryDateFieldOpt },
        { ...additionalFieldOpt },
        { ...actionsFieldOpt }
    ];
    return columns
}

