import React, { useState } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import "./style.css"

interface AgGridProps {
    title?: string;
    columnDefs: Array<object>;
    rowData: Array<object>;
}

const AgGrid = ({ title, columnDefs, rowData }: AgGridProps) => {
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