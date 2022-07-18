'use strict';

import React, {useCallback, useMemo, useRef, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './styles.css';
import {ColDef, GetRowIdFunc, GetRowIdParams, ValueFormatterParams, ValueGetterParams,} from 'ag-grid-community';
import {getData} from './data';

var callCount = 1;

var totalValueGetter = function (params: ValueGetterParams) {
    var q1 = params.getValue('q1');
    var q2 = params.getValue('q2');
    var q3 = params.getValue('q3');
    var q4 = params.getValue('q4');
    var result = q1 + q2 + q3 + q4;
    console.log(
        `Total Value Getter (${callCount}, ${params.column.getId()}): ${[
            q1,
            q2,
            q3,
            q4,
        ].join(', ')} = ${result}`
    );
    callCount++;
    return result;
};

var total10ValueGetter = function (params: ValueGetterParams) {
    var total = params.getValue('total');
    return total * 10;
};

function formatNumber(params: ValueFormatterParams) {
    var number = params.value;
    // this puts commas into the number eg 1000 goes to 1,000,
    // i pulled this from stack overflow, i have no idea how it works
    return Math.floor(number)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const GridExample = () => {
    const gridRef = useRef<AgGridReact>(null);
    const containerStyle = useMemo(() => ({width: '100%', height: '100%'}), []);
    const gridStyle = useMemo(() => ({height: '100%', width: '100%'}), []);
    const [rowData, setRowData] = useState<any[]>(getData());
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        {field: 'q1', type: 'quarterFigure'},
        {field: 'q2', type: 'quarterFigure'},
        {field: 'q3', type: 'quarterFigure'},
        {field: 'q4', type: 'quarterFigure'},
        {field: 'year', rowGroup: true, hide: true},
        {
            headerName: 'Total',
            colId: 'total',
            cellClass: ['number-cell', 'total-col'],
            aggFunc: 'sum',
            valueFormatter: formatNumber,
            valueGetter: totalValueGetter,
        },
        {
            headerName: 'Total x 10',
            cellClass: ['number-cell', 'total-col'],
            aggFunc: 'sum',
            minWidth: 120,
            valueFormatter: formatNumber,
            valueGetter: total10ValueGetter,
        },
    ]);
    const defaultColDef = useMemo<ColDef>(() => {
        return {
            flex: 1,
            resizable: true,
        };
    }, []);
    const autoGroupColumnDef = useMemo<ColDef>(() => {
        return {
            minWidth: 130,
        };
    }, []);
    const columnTypes = useMemo<{
        [key: string]: ColDef;
    }>(() => {
        return {
            quarterFigure: {
                editable: true,
                cellClass: 'number-cell',
                aggFunc: 'sum',
                valueFormatter: formatNumber,
                valueParser: function numberParser(params) {
                    return Number(params.newValue);
                },
            },
        };
    }, []);
    const getRowId = useMemo<GetRowIdFunc>(() => {
        return (params: GetRowIdParams) => {
            return params.data.id;
        };
    }, []);

    const onCellValueChanged = useCallback(() => {
        console.log('onCellValueChanged');
    }, []);

    const onExpireValueCache = useCallback(() => {
        console.log('onInvalidateValueCache -> start');
        gridRef.current!.api.expireValueCache();
        console.log('onInvalidateValueCache -> end');
    }, []);

    const onRefreshCells = useCallback(() => {
        console.log('onRefreshCells -> start');
        gridRef.current!.api.refreshCells();
        console.log('onRefreshCells -> end');
    }, []);

    const onUpdateOneValue = useCallback(() => {
        var randomId = Math.floor(Math.random() * 10) + '';
        var rowNode = gridRef.current!.api.getRowNode(randomId);
        if (rowNode) {
            var randomCol = ['q1', 'q2', 'q3', 'q4'][Math.floor(Math.random() * 4)];
            var newValue = Math.floor(Math.random() * 1000);
            console.log('onUpdateOneValue -> start');
            rowNode.setDataValue(randomCol, newValue);
            console.log('onUpdateOneValue -> end');
        }
    }, []);

    return (
        <div style={containerStyle}>
            <div className="example-wrapper">
                <div style={{marginBottom: '5px'}}>
                    <button onClick={onExpireValueCache}>Invalidate Value Cache</button>
                    <button onClick={onRefreshCells}>Refresh Cells</button>
                    <button onClick={onUpdateOneValue}>Update One Value</button>
                </div>

                <div style={{height: '100%', width: '100%'}} className="ag-theme-balham">
                    <AgGridReact
                        ref={gridRef}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        autoGroupColumnDef={autoGroupColumnDef}
                        columnTypes={columnTypes}
                        suppressAggFuncInHeader={true}
                        enableCellChangeFlash={true}
                        enableRangeSelection={true}
                        groupDefaultExpanded={1}
                        valueCache={true}
                        getRowId={getRowId}
                        onCellValueChanged={onCellValueChanged}
                    ></AgGridReact>
                </div>
            </div>
        </div>
    );
};

export default GridExample;