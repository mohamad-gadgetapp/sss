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
    var gridColumnApi = params.columnApi;
    let result:any = {};
    gridColumnApi.getAllGridColumns().forEach((item:any) => {
      result[item.colId] = null;
    });
    let columnsWithAggregation = ['quantity','value','daily_debits']
    columnsWithAggregation.forEach(element => {
      gridApi.forEachNodeAfterFilter((rowNode:any) => {
        if (rowNode.data[element]) {
         let numberWithoutCommas = removeCommas(rowNode.data[element]);
          result[element] += Number(parseFloat(numberWithoutCommas).toFixed(2));
        }
      });
      result[element]=(Number(result[element])).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    })
    result['dtc_no'] = 'Total:';
    gridApi.setPinnedBottomRowData([result]);
  };

  const removeCommas = (str:string) => {
    while (str.search(",") >= 0) {
      str = (str + "").replace(',', '');
    }
    return str;
  };

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current!.api.getSelectedRows();
    localStorage.setItem("rowData", JSON.stringify(selectedRows));
    onClickHan(selectedRows);
  }, []);

    const rowClassRules = useMemo(() => {
        return {
            'is-new-warning': (params:any) => {
                console.log("params ", params.data.is_new)
                var isNew = params.data.is_new;
                return isNew === "TRUE" ;
            }
        };
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
        // pagination={true}
        // paginationPageSize={10}
        onGridReady={onGridReady}
        onColumnResized={onColumnResized}
        rowClassRules={rowClassRules}
        onSelectionChanged={onSelectionChanged}
        // pinnedBottomRowData={pinnedBottomRowData}
        // rowSelection={"multiple"}
        // frameworkComponents={{
        //   ButtonCellRenderer,
        // }}
      ></AgGridReact>
    </div>
  );
};

export default AgGrid