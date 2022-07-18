import { colors } from "./color";
import symbol from "../assets/Symbol.svg";

export const ColumnDefs = [
  {
    headerName: "DTC NO",
    children : [
      {
        headerName: 'TOTAL',
      }],
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
    children : [
      {
        headerName: '',
      }],
    field: "contractsData.cpty_name",
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
    children : [
      {
        headerName: '',
      }],
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
    children : [
      {
        headerName: '',
      }],
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
    children : [
      {
        headerName: '',
      }],
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
    children : [
      {
        field: 'totals.quantity',
      }],
    field: "contractsData.quantity",
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
    children : [
      {
        headerName: '',
      }],
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
    children : [
      {
        headerName: 'totals.value',
      }],
    field: "contractsData.value",
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
    children : [
      {
        headerName: '',
      }],
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
    children : [
      {
        headerName: '',
      }],
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
    headerName: "DAILY DEBITS",
    children : [
      {
        field: 'totals.daily_debits',
      }],
    field: "contractsData.daily_debits",
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
    children : [
      {
        headerName: '',
      }],
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
    // headerGroupComponent: CustomHeaderGroup,
    children : [
        {
          headerName: '',
        }],
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
];
