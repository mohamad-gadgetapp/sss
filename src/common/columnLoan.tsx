import { colors } from "./color";
import symbol from "../assets/Symbol.svg";
import ButtonCellRenderer from "./ButtonCellRenderer";
import searchLogo from "../assets/searchLogo.svg";

var numberFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 2,
});

var myValueFormatter = (p: any) => {
  numberFormatter.format(p.value);
};

// var myValueFormatter = (p:any) => {
//     console.log("number: ", p);
//     return "$" + formatNumber(p.value)
//   };
//   const formatNumber = (number:any) => {
//     return parseFloat(number)
//     .toFixed(2)
//     .toString()
//     .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
//   };

export const ColumnLoanDefs = [
  {
    headerName: "B/L",
    field: "b_l",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 100,
    maxWidth: 120,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "COUNTERPARTY_ID",
    field: "cpty_id",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 170,
    maxWidth: 200,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "COUNTERPARTY_NAME",
    field: "cpty_name",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 190,
    maxWidth: 250,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "TICKER",
    field: "tb_ticker",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 100,
    maxWidth: 130,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "CUSIP",
    field: "cusip",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 100,
    maxWidth: 180,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
    filterParams: {
      allowedCharPattern: "\\d\\-\\,", // note: ensure you escape as if you were creating a RegExp from a string
      numberParser: (text: any) => {
        return parseFloat(text.replace(",", ""));
      },
    },
  },
  {
    headerName: "QUANTITY",
    field: "quantity",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: function (params: any) {
      if (params.node.data.quantity < 0) {
        return {
          display: "flex",
          alignItems: "center",
          border: "2px solid red",
          // backgroundColor: "#ffffff",
        };
      } else {
        return {
          display: "flex",
          alignItems: "center",
          // backgroundColor: "#ffffff",
          borderBottom: "1px solid #DFDFDF",
          borderRight: "1px solid #DFDFDF",
        };
      }
    },
    minWidth: 120,
    maxWidth: 150,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "RATE",
    field: "rate",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 90,
    maxWidth: 100,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "CONTRACT VALUE",
    field: "value",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    valueFormatter: myValueFormatter,
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 160,
    maxWidth: 180,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "TRADE_DATE",
    field: "trade_date",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 130,
    maxWidth: 150,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "SETTLE_DATE",
    field: "settle_date",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 140,
    maxWidth: 180,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "PROFIT CENTER",
    field: "profit_center",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 150,
    maxWidth: 180,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "TERM_DATE",
    field: "term_date",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 130,
    maxWidth: 150,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "DAILY_ACCRUALS",
    field: "daily_accruals",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    valueFormatter: myValueFormatter,
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 160,
    maxWidth: 180,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
      headerName: "SOD QUANTITY",
      field: "sod_quantity",
      floatingFilter: false,
      floatingFilterComponentParams: { suppressFilterButton: true },
      valueFormatter: myValueFormatter,
      cellStyle: {
          display: "flex",
          alignItems: "center",
          // backgroundColor: "#ffffff",
          borderBottom: "1px solid #DFDFDF",
          borderRight: "1px solid #DFDFDF",
        },
        minWidth: 160,
        maxWidth: 180,
        suppressSizeToFit: false,
        icons: {
            menu: `<img src="${searchLogo}" />`,
        },
    },
    {
      headerName: "RECALL",
      field: "recall",
      floatingFilter: false,
      floatingFilterComponentParams: { suppressFilterButton: true },
      valueFormatter: myValueFormatter,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        // backgroundColor: "#ffffff",
        borderBottom: "1px solid #DFDFDF",
        borderRight: "1px solid #DFDFDF",
      },
      minWidth: 160,
      maxWidth: 180,
      suppressSizeToFit: false,
      icons: {
        menu: `<img src="${searchLogo}" />`,
      },
    },
  {
    headerName: "SETTLE_DATE",
    field: "settle_date_diff",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 160,
    maxWidth: 180,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
  {
    headerName: "CONTRACT_ID",
    field: "contract_id",
    floatingFilter: false,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellStyle: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#ffffff",
      borderBottom: "1px solid #DFDFDF",
      borderRight: "1px solid #DFDFDF",
    },
    minWidth: 160,
    maxWidth: 180,
    suppressSizeToFit: false,
    icons: {
      menu: `<img src="${searchLogo}" />`,
    },
  },
];
