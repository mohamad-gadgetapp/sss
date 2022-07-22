import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import { ColumnDefs } from "../../common/columDef";
import { ColumnLoanDefs } from "../../common/columnLoan";
import { ColumnDefsTradeBooking } from "../../common/columnTradeBooking";
import ButtonCellRenderer from "../../common/ButtonCellRenderer";
import "./style.css";
import { ColDef, ColumnResizedEvent, } from 'ag-grid-community';
import 'ag-grid-enterprise';


interface AgGridProps {
    title?: string;
    rowData: Array<object>;
    height?: number;
    type?: string;
    onClickHan?: (e: React.MutableRefObject<any>) => void;
}

const AgGrid = ({ title, rowData, height, type, onClickHan }: AgGridProps) => {
    const gridRef = useRef<any>(null)
    const [columnDefs, setColumnDefs] = useState<any>(type === "loan" ? [...ColumnLoanDefs] : type === "trade" ? [...ColumnDefsTradeBooking] : [...ColumnDefs]);
    let gridApi: any;
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            flex: 1,
            sortable: true,
            filter: true,
            floatingFilter: true,
            suppressFilterButton: false,
            editable: true,
            resizable: true,
        }
    }, []);

    useEffect(() => {
        console.log("type ", type)
    }, [type])



    const onColumnResized = useCallback((params: ColumnResizedEvent) => {
        console.log("params ", params)
    }, []);

    const onGridReady = (params: any) => {
        params.api.sizeColumnsToFit();
        console.log("params", params);
        gridApi = params.api;
    }

//     const onRowDataChanged = () => {       
//         var ageColumn = gridRef.current.columnApi.getColumn("QUANTITY")
//         var rowCount = gridRef.current.api.getDisplayedRowCount()
//         ageColumn.colDef.headerName = `QUANTITY ${rowCount}`;
//         gridRef.current.api.refreshHeader();
//    }

   
      const rowClassRules = useMemo(() => {
        return {
          'is-new-warning': (params:any) => {
            console.log("params ", params.data.is_new)
            var isNew = params.data.is_new;
            return isNew === "TRUE" ;
          }
        };
      }, []);
    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current!.api.getSelectedRows();
        console.log("selectedRows 01: ", selectedRows);
        localStorage.setItem('rowData', JSON.stringify(selectedRows));
        
    }, []);
    
    return (
        <div
            className="ag-theme-balham"
            style={{
                height: `${height}rem`,
                width: '100%'
            }}
        >
            {title != undefined && <div className="drag-handle title-subHeaderTitle"> {title} </div>}
            {/*<button onClick={() => getData ()}>Check</button>*/}
            <AgGridReact
                ref={gridRef}
                rowStyle={{ justifyContent: "center", borderBottom: '0.5px solid #6A7587', backgroundColor: '#EAECEF' }}
                rowHeight={23}
                columnDefs={columnDefs}
                rowData={rowData}
                suppressRowClickSelection={true}
                floatingFiltersHeight={30}
                defaultColDef={defaultColDef}
                suppressAggFuncInHeader={true}
                enableCellChangeFlash={true}
                enableRangeSelection={true}
                // suppressClickEdit={true}
                pagination={true}
                paginationPageSize={10}
                onGridReady={onGridReady}
                onColumnResized={onColumnResized}
                onSelectionChanged={onSelectionChanged}
                rowSelection={'multiple'}
                rowClassRules={rowClassRules}
                frameworkComponents={{
                    ButtonCellRenderer
                }}>
                {/* onRowDataChanged={onRowDataChanged} */}
            </AgGridReact>
        </div>
    )
}

export default AgGrid