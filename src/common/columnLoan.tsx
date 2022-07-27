import { colors } from "./color";
import symbol from "../assets/Symbol.svg";
import ButtonCellRenderer from "./ButtonCellRenderer";

var numberFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
});

var myValueFormatter = (p:any) => {
    numberFormatter.format(p.value);
}

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
            borderRight: "1px solid #DFDFDF"
        },
        width: 100,
        minWidth: 60,
        maxWidth: 100,
        suppressSizeToFit: false,
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
            borderRight: "1px solid #DFDFDF"
        },
        width: 120,
        minWidth: 60,
        maxWidth: 130,
        suppressSizeToFit: false,
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
            borderRight: "1px solid #DFDFDF"
        },
        width: 250,
        minWidth: 150,
        maxWidth: 300,
        suppressSizeToFit: false,
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
            borderRight: "1px solid #DFDFDF"
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
            // backgroundColor: "#ffffff",
            borderBottom: "1px solid #DFDFDF",
            borderRight: "1px solid #DFDFDF"
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
        headerName: "QUANTITY",
        field: "quantity",
        floatingFilter: false,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle:function (params: any) {
            if (params.node.data.quantity < 0) {
                return {
                    display: "flex",
                    alignItems: "center",
                    border:"2px solid red",
                    // backgroundColor: "#ffffff",
                }
            }else{
                return {
                    display: "flex",
                    alignItems: "center",
                    // backgroundColor: "#ffffff",
                    borderBottom: "1px solid #DFDFDF",
                    borderRight: "1px solid #DFDFDF"
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
            // backgroundColor: "#ffffff",
            borderBottom: "1px solid #DFDFDF",
            borderRight: "1px solid #DFDFDF"
        },
        width: 90,
        minWidth: 90,
        maxWidth: 100,
    },
    {
        headerName: "CONTRACT VALUE",
        field: "value",
        floatingFilter: false,
        floatingFilterComponentParams: { suppressFilterButton: true },
        // valueFormatter: myValueFormatter,
        cellStyle: {
            display: "flex",
            alignItems: "center",
            // backgroundColor: "#ffffff",
            borderBottom: "1px solid #DFDFDF",
            borderRight: "1px solid #DFDFDF"
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
            // backgroundColor: "#ffffff",
            borderBottom: "1px solid #DFDFDF",
            borderRight: "1px solid #DFDFDF"
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
            // backgroundColor: "#ffffff",
            borderBottom: "1px solid #DFDFDF",
            borderRight: "1px solid #DFDFDF"
        },
        width: 120,
        minWidth: 100,
        maxWidth: 150,
        suppressSizeToFit: false,
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
            borderRight: "1px solid #DFDFDF"
        },
        width: 120,
        minWidth: 100,
        maxWidth: 150,
        suppressSizeToFit: false,
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
            borderRight: "1px solid #DFDFDF"
        },
        width: 120,
        minWidth: 100,
        maxWidth: 150,
        suppressSizeToFit: false,
    },
    {
        headerName: "DAILY_ACCRUALS",
        field: "daily_accruals",
        floatingFilter: false,
        floatingFilterComponentParams: { suppressFilterButton: true },
        // valueFormatter: myValueFormatter,
        cellStyle: {
            display: "flex",
            alignItems: "center",
            // backgroundColor: "#ffffff",
            borderBottom: "1px solid #DFDFDF",
            borderRight: "1px solid #DFDFDF"
        },
        width: 150,
        minWidth: 100,
        maxWidth: 180,
        suppressSizeToFit: false,
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
            borderRight: "1px solid #DFDFDF"
        },
        width: 120,
        minWidth: 100,
        maxWidth: 150,
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
            // backgroundColor: "#ffffff",
            borderBottom: "1px solid #DFDFDF",
            borderRight: "1px solid #DFDFDF"
        },
        width: 200,
        minWidth: 100,
        maxWidth: 220,
        suppressSizeToFit: false,
    }
];
