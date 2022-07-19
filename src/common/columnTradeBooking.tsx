import { colors } from "./color";
export const ColumnDefsTradeBooking = [
    {
        headerName: "",
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        floatingFilter: false,
        floatingFilterComponentParams: { suppressFilterButton: true },
        width: 30,
        cellStyle: {
            display: "flex",
            alignItems: "center", justifyContent: "center"
        },
        minWidth: 30,
        maxWidth: 30,
        suppressSizeToFit: false,
    },
    {
        headerName: "Status",
        field: "status",
        floatingFilter: false,
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
    {
        headerName: "Trade Type",
        field: "trade_type",
        floatingFilter: false,
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
        headerName: "Cparty",
        field: "cparty",
        floatingFilter: false,
        floatingFilterComponentParams: { suppressFilterButton: true },
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
        headerName: "Security",
        field: "security",
        floatingFilter: false,
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
        headerName: "Quantity",
        field: "quantity",
        floatingFilter: false,
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
        headerName: "Loan Value",
        field: "loan_value",
        floatingFilter: false,
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
        headerName: "Collateral Code",
        field: "collateral_code",
        floatingFilter: false,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: {
            backgroundColor: colors.primary_light_grey,
            display: "flex",
            alignItems: "center",
        },
    },
    {
        headerName: "Haircut",
        field: "haircut",
        floatingFilter: false,
        floatingFilterComponentParams: { suppressFilterButton: true },
        cellStyle: {
            backgroundColor: colors.primary_light_grey,
            display: "flex",
            alignItems: "center",
        },
    },
    {
        headerName: "Profit Center",
        field: "profit_center",
        floatingFilter: false,
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
        headerName: "Term Date",
        field: "term_date",
        floatingFilter: false,
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
        headerName: "Action",
        cellRenderer: "ButtonCellRenderer",
        floatingFilter: false,
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
];
