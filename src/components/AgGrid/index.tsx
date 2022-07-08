import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import { ColumnDefs } from "../../common/columDef"
import "./style.css"
import { ColDef } from 'ag-grid-community';

interface AgGridProps {
    title?: string;
    rowData: Array<object>;
    height?: number;
}

const AgGrid = ({ title, rowData, height }: AgGridProps) => {
    const gridRef = useRef(null)
    const [columnDefs, setColumnDefs] = useState<any>([...ColumnDefs]);

    const defaultColDef = useMemo<ColDef>(() => {
        return {
            sortable: true,
            filter: true,
            floatingFilter: true,
            suppressFilterButton: false,
            editable: true,
            resizable: true,
            flex: 0.5
        }
    }, []);

    useEffect(() => {
        console.log("height ", height)
    }, [height])

    const autoSizeAll = useCallback((skipHeader: boolean) => {
        // gridRef.current!.columnApi.autoSizeColumns(skipHeader);
    }, []);

    return (
        <div
            className="ag-theme-balham"
            style={{
                height: `${height}rem`,
                width: '100%'
            }}
        >
            <div className="drag-handle title-subHeaderTitle"> {title} </div>
            <AgGridReact
                ref={gridRef}
                rowStyle={{ justifyContent: "center", borderBottom: '0.5px solid #6A7587', backgroundColor: '#EAECEF' }}
                rowHeight={23}
                columnDefs={columnDefs}
                rowData={rowData}
                floatingFiltersHeight={30}
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={10}>

            </AgGridReact>
        </div>
    )
}
export default AgGrid