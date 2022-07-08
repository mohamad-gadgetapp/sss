import { colors } from "./color";
import symbol from '../assets/Symbol.svg';
export const ColumnDefs = [
    {
        headerName: "Type",
        field: "type",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center', minWidth: 150 },
    },
    {
        headerName: "ID",
        field: "id",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
    },
    {
        headerName: "",
        field: "symbol",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        headerComponentParams: { template: `<img src="${symbol}"/>` },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center', justifyContent: 'center' },
    },
    {
        headerName: "Quantity",
        field: "quantity",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
    },
    {
        headerName: "Rate",
        field: "rate",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
    },
    {
        headerName: "Counter Party",
        field: "counter_party",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
    },
    {
        headerName: "Create Date",
        field: "create_date",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
    },
    {
        headerName: "Settle Date",
        field: "settle_date",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
    },
    {
        headerName: "Annotation",
        field: "annotation",
        floatingFilter: true,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center', width: 50, minWidth: 20, maxWidth: 100, suppressSizeToFit: true },
    },
    {
        headerName: "Status",
        field: "status",
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: function (params: any) {
            if (params.node.data.status == 'Complete') {
                return { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center', 'color': "#039100" };
            } else if (params.node.data.status == 'Error') {
                return { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center', 'color': "#E90909" };
            } else if (params.node.data.status == 'Pending') {
                return { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center', 'color': "#0D34FF" };
            }
        },
    },
    {
        headerName: "",
        field: "redrive",
        cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
    },
];