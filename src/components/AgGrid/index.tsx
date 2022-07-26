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
      floatingFilter: false,
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
    var gridColumnApi = params.columnApi;
    let result:any = {};
    gridColumnApi.getAllGridColumns().forEach((item:any) => {
      result[item.colId] = null;
    });
    let columnsWithAggregation = ['quantity','value','daily_debits']
    columnsWithAggregation.forEach(element => {
      gridApi.forEachNodeAfterFilter((rowNode:any) => {
        console.log("footer: ", rowNode);
        if (rowNode.data[element]) {
         let numberWithoutCommas = removeCommas(rowNode.data[element]);
          result[element] += Number(parseFloat(numberWithoutCommas).toFixed(2));
        }
      });
      result[element]=(Number(result[element])).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    console.log("result", result);
    });
    result['b_l'] = 'Total:';
    gridApi.setPinnedBottomRowData([result]);
  };

  const removeCommas = (str:string) => {
    while (str.search(",") >= 0) {
      str = (str + "").replace(',', '');
    }
    return str;
  };

  const rowClassRules = useMemo(() => {
    return {
      'is-new-warning': (params:any) => {
        console.log("params ", params.data.is_new)
        var isNew = params.data.is_new;
        return isNew === "TRUE" ;
      }
    };
  }, []);

  const getRowStyle = (params:any) => {
    console.log("pin: ", params.node.RowNode)
    if (params.node.rowPinned === 'bottom') {
      return { "background-color": "#6a7587" };
    } else {
      return { "background-color": "white" };
    }
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
        onGridReady={onGridReady}
        onColumnResized={onColumnResized}
        rowClassRules={rowClassRules}
        onSelectionChanged={onSelectionChanged}
        rowSelection={'multiple'}
        getRowStyle={getRowStyle}
      ></AgGridReact>
    </div>
  );
};

export default AgGrid