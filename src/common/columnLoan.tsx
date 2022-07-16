import { colors } from "./color";
import symbol from "../assets/Symbol.svg";
export const ColumnLoanDefs = [
  {
    headerName: "DTC NO",
    field: "dtc_no",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 120,
    minWidth: 60,
    maxWidth: 130,
    suppressSizeToFit: false,
    
  },
  {
    headerName: "CPTY_NAME",
    field: "cpty_name",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 120,
    minWidth: 60,
    maxWidth: 130,
    suppressSizeToFit: false,
  },
  {
    headerName: "TB_TICKER",
    field: "tb_ticker",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    headerComponentParams: { template: `<img src="${symbol}"/>` },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
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
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 120,
    minWidth: 60,
    maxWidth: 130,
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
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 120,
    minWidth: 60,
    maxWidth: 130,
    suppressSizeToFit: false,
  },
  {
    headerName: "QUANTITY",
    field: "quantity",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    suppressSizeToFit: false,
  },
  {
    headerName: "RATE",
    field: "rate",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
  },
  {
    headerName: "VALUE",
    field: "value",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
  },
  {
    headerName: "TRADE_DATE",
    field: "trade_date",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 200,
    minWidth: 100,
    maxWidth: 220,
    suppressSizeToFit: false,
  },
  {
    headerName: "SETTLE_DATE",
    field: "settle_date",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 200,
    minWidth: 100,
    maxWidth: 220,
    suppressSizeToFit: false,
  },
  {
    headerName: "TERM_DATE",
    field: "term_date",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 200,
    minWidth: 100,
    maxWidth: 220,
    suppressSizeToFit: false,
  },
  {
    headerName: "DAILY DEBITS",
    field: "daily_debits",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
      display: "flex",
      alignItems: "center",
    },
    width: 200,
    minWidth: 100,
    maxWidth: 220,
    suppressSizeToFit: false,
  },
  {
    headerName: "CONTRACT_ID",
    field: "contract_id",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      backgroundColor: colors.primary_light_grey,
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
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: function (params: any) {
      if (params.node.data.status == "Complete") {
        return {
          backgroundColor: colors.primary_light_grey,
          display: "flex",
          alignItems: "center",
          color: "#039100",
        };
      } else if (params.node.data.status == "Error") {
        return {
          backgroundColor: colors.primary_light_grey,
          display: "flex",
          alignItems: "center",
          color: "#E90909",
        };
      } else if (params.node.data.status == "Pending") {
        return {
          backgroundColor: colors.primary_light_grey,
          display: "flex",
          alignItems: "center",
          color: "#0D34FF",
        };
      }
    },
  },
  // {
  //   headerName: "",
  //   field: "redrive",
  //   cellStyle: {
  //     backgroundColor: colors.primary_light_grey,
  //     display: "flex",
  //     alignItems: "center",
  //   },
  // },
];
