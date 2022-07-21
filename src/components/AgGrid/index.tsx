import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { ColumnDefs } from "../../common/columDef";
import { ColumnLoanDefs } from "../../common/columnLoan";
import { ColumnDefsTradeBooking } from "../../common/columnTradeBooking";
import ButtonCellRenderer from "../../common/ButtonCellRenderer";
import "./style.css";
import { ColDef, ColumnResizedEvent } from "ag-grid-community";
import "ag-grid-enterprise";

interface AgGridProps {
  title?: string;
  rowData: Array<object>;
  height?: number;
  type?: string;
  onClickHan?: any;
}

const AgGrid = ({ title, rowData, height, type, onClickHan }: AgGridProps) => {
  const gridRef = useRef<any>(null);
  const [columnDefs, setColumnDefs] = useState<any>(
    type === "loan"
      ? [...ColumnLoanDefs]
      : type === "trade"
      ? [...ColumnDefsTradeBooking]
      : [...ColumnDefs]
  );
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
    };
  }, []);

  useEffect(() => {
    console.log("type ", type);
  }, [type]);

  const onColumnResized = useCallback((params: ColumnResizedEvent) => {
    console.log("params ", params);
  }, []);

  const onGridReady = (params: any) => {
    params.api.sizeColumnsToFit();
    gridApi = params.api;
  };

  const getData = () => {
    let selectedNodes = gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node: any) => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    return selectedData;
  };

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current!.api.getSelectedRows();
    localStorage.setItem("rowData", JSON.stringify(selectedRows));
    onClickHan(selectedRows);
  }, []);

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: `${height}rem`,
        width: "100%",
      }}
    >
      {title != undefined && (
        <div className="drag-handle title-subHeaderTitle"> {title} </div>
      )}
      <AgGridReact
        ref={gridRef}
        rowStyle={{
          justifyContent: "center",
          borderBottom: "0.5px solid #6A7587",
          backgroundColor: "#EAECEF",
        }}
        rowHeight={23}
        columnDefs={columnDefs}
        rowData={rowData}
        suppressRowClickSelection={true}
        floatingFiltersHeight={30}
        defaultColDef={defaultColDef}
        suppressAggFuncInHeader={true}
        enableCellChangeFlash={true}
        enableRangeSelection={true}
        pagination={true}
        paginationPageSize={10}
        onGridReady={onGridReady}
        onColumnResized={onColumnResized}
        onSelectionChanged={onSelectionChanged}
        // rowSelection={"multiple"}
        // frameworkComponents={{
        //   ButtonCellRenderer,
        // }}
      ></AgGridReact>
    </div>
  );
};

export default AgGrid;
