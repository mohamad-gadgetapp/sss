import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import { colors } from "../../common/color"
import "./style.css"
import TextField from "../../components/TextField/index"
import AgGrid from "../../components/AgGrid";
import data from "../../data.json";

const HomePage = () => {
    const [columnDefs, setColumnDefs] = useState<Array<object>>([
        { headerName: "Type", field: "type", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "ID", field: "id", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "TSLA", field: "tsla", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "Quantity", field: "quantity", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "Rate", field: "rate", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "Counter Party", field: "counter_party", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "Create Date", field: "create_date", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "Settle Date", field: "settle_date", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "Annotation", field: "annotation", floatingFilter: true, cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "Status", field: "status", cellStyle: { 'background-color': colors.primary_light_grey, } },
        { headerName: "", field: "redrive", cellStyle: { 'background-color': colors.primary_light_grey, } },
    ]);
    const [rowData, setRowData] = useState<Array<object>>([...data.data]);
    const defaultColDef = {
        sortable: true,
        flex: 1,
        filter: true,
        floatingFliter: true,
    }

    useEffect(() => {
        data.data.map((item: any, index: any) => {
            console.log("Data from json ", item)
        })
    }, [])

    return (
        <>
            <div className='textFieldDiv'>
                <TextField name="hello" label="input" quantity='Quantity' rate='Rate' counterParty='Counter Party' annotation='Annotation' />
            </div>
            <AgGrid columnDefs={columnDefs} rowData={rowData} />
        </>
    )
}

export default HomePage