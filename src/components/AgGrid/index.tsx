import React, { useState } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
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
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "ID",
            field: "id",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "TSLA",
            field: "tsla",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "Quantity",
            field: "quantity",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "Rate",
            field: "rate",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "Counter Party",
            field: "counter_party",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "Create Date",
            field: "create_date",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "Settle Date",
            field: "settle_date",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "Annotation",
            field: "annotation",
            floatingFilter: true,
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "Status",
            field: "status",
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
        {
            headerName: "",
            field: "redrive",
            cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
        },
    ]);

    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFliter: true,
    }
    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '100vh',
                width: '100%'
            }}
        >
            <AgGridReact
                rowStyle={{ justifyContent: "center", 'border-bottom': '5px solid white', 'background-color': '#EAECEF' }}
                rowHeight={64}
                columnDefs={columnDefs}
                rowData={rowData}
                floatingFiltersHeight={50}
                defaultColDef={defaultColDef}>
            </AgGridReact>
        </div>
    )
}

export default AgGrid