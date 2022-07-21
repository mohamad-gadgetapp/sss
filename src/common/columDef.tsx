import { colors } from "./color";
import symbol from "../assets/Symbol.svg";

export const ColumnDefs = [
  {
    headerName: "",
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    floatingFilter: false,
    // suppressClickEdit: true,
    editable:false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    width: 50,
    minWidth: 30,
    maxWidth: 30,
    suppressSizeToFit: false,
  },
  {
    headerName: "DTC NO",
    field: "dtc_no",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle:function (params: any){
      if (params.node.data.dtc_no == "") {
        return {
          display: "flex",
          alignItems: "center",
          border:"2px solid red"
          }
      }else{
        return {
          display: "flex",
          alignItems: "center",
        }
      }
    },
    width: 120,
    minWidth: 60,
    maxWidth: 130,
    suppressSizeToFit: false,
  },
  {
    headerName: "CPTY_NAME",
    field: "cpty_name",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 250,
    minWidth: 150,
    maxWidth: 300,
    suppressSizeToFit: false,
  },
  {
    headerName: "TB_TICKER",
    field: "tb_ticker",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    headerComponentParams: { template: `<img src="${symbol}"/>` },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    width: 120,
    minWidth: 60,
    maxWidth: 130,
    suppressSizeToFit: false,
  },
  {
    headerName: "CUSIP",
    field: "cusip",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 150,
    minWidth: 100,
    maxWidth: 180,
    suppressSizeToFit: false,
    filterParams: {
      allowedCharPattern: "\\d\\-\\,", // note: ensure you escape as if you were creating a RegExp from a string
      numberParser: (text: any) => {
        return parseFloat(text.replace(",", ""));
      },
    },
  },
  {
    headerName: "B/L",
    field: "b/l",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 100,
    minWidth: 60,
    maxWidth: 100,
    suppressSizeToFit: false,
  },
  {
    headerName: "QUANTITY",
    field: "quantity",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle:function (params: any) {
      if (params.node.data.quantity < 0) {
        return {
          display: "flex",
          alignItems: "center",
          border:"2px solid red"
          }
      }else{
        return {
          display: "flex",
          alignItems: "center",
          }
      }
      
    },
    width: 90,
    minWidth: 90,
    maxWidth: 100,
    suppressSizeToFit: false,
   
  },
  {
    headerName: "RATE",
    field: "rate",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 90,
    minWidth: 90,
    maxWidth: 100,
  },
  {
    headerName: "VALUE",
    field: "value",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 150,
    minWidth: 150,
    maxWidth: 180,
  },
  {
    headerName: "TRADE_DATE",
    field: "trade_date",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 120,
    minWidth: 100,
    maxWidth: 150,
    suppressSizeToFit: false,
  },
  {
    headerName: "SETTLE_DATE",
    field: "settle_date",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 120,
    minWidth: 100,
    maxWidth: 150,
    suppressSizeToFit: false,
  },
  {
    headerName: "DAILY DEBITS",
    field: "daily_debits",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 150,
    minWidth: 100,
    maxWidth: 180,
    suppressSizeToFit: false,
  },
  {
    headerName: "CONTRACT_ID",
    field: "contract_id",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
    },
    width: 200,
    minWidth: 100,
    maxWidth: 220,
    suppressSizeToFit: false,
  },
  {
    headerName: "STATUS",
    field: "status",
    floatingFilter: false,
    editable:false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: function (params: any) {
      if (params.node.data.status === "Complete") {
        return {
          display: "flex",
          alignItems: "center",
          color: "#039100",
        };
      } else if (params.node.data.status === "Error") {
        return {
          display: "flex",
          alignItems: "center",
          color: "#E90909",
        };
      } else if (params.node.data.status === "Pending") {
        return {
          display: "flex",
          alignItems: "center",
          color: "#0D34FF",
        };
      }
    },
  },
];
