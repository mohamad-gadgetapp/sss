import React, { useState } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import symbol from '../../assets/Symbol.svg';
import inputLogo from "../TextField/Inputlogo.svg";
import { colors } from "../../common/color"
import "./style.css"

interface AgGridProps {
    title?: string;
    rowData: Array<object>;
}

const AgGrid = ({ title, rowData }: AgGridProps) => {

    const [columnDefs, setColumnDefs] = useState<Array<object>>([
        {
            headerName: "Type",
            field: "type",
            floatingFilter: true,
            floatingFilterComponentParams: { suppressFilterButton: true },
            cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
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
            cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
        },
        {
            headerName: "Status",
            field: "status",
            floatingFilterComponentParams: { suppressFilterButton: true },
            cellStyle: function (params: any) {
                if (params.node.data.status == 'Complete') {
                    return { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center', 'color': "#039100" };
                } else if (params.node.data.status == 'Error') {
                    return { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center', 'color': "#E90909" };
                } else if (params.node.data.status == 'Pending') {
                    return { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center', 'color': "#0D34FF" };
                }
            },
        },
        {
            headerName: "",
            field: "redrive",
            cellStyle: { backgroundColor: colors.primary_light_grey, display: "flex", alignItems: 'center' },
        },
    ]);

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFliter: true,
        suppressFilterButton: false,
        editable: true,
        resizable: true,
    }
    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '52vh',
                width: '100%'
            }}
        >
            <AgGridReact
                rowStyle={{ justifyContent: "center", 'border-bottom': '5px solid white', 'background-color': '#EAECEF' }}
                rowHeight={64}
                columnDefs={columnDefs}
                rowData={rowData}
                floatingFiltersHeight={50}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={10}>
            </AgGridReact>
        </div>
    )
}

export default AgGrid