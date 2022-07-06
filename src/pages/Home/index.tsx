import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { colors } from "../../common/color";
import "./style.css";
import TextField from "../../components/TextField/index";
import AgGrid from "../../components/AgGrid";
import ContractBooking from "../ContractBooking";

const HomePage = () => {
  const [columnDefs, setColumnDefs] = useState<Array<object>>([
    {
      headerName: "Type",
      field: "type",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "ID",
      field: "id",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "TSLA",
      field: "tsla",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "Quantity",
      field: "quantity",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "Rate",
      field: "rate",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "Counter Party",
      field: "counter_party",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "Create Date",
      field: "create_date",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "Settle Date",
      field: "settle_date",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "Annotation",
      field: "annotation",
      floatingFilter: true,
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "Status",
      field: "status",
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
    {
      headerName: "",
      field: "redrive",
      cellStyle: { "background-color": colors.primary_light_grey, display: "flex", 'align-items': 'center' },
    },
  ]);
  const [rowData, setRowData] = useState<Array<object>>([
    {
      type: "Loan",
      id: "10002",
      tsla: "TSLA",
      quantity: "10,000",
      rate: "5.14%",
      counter_party: "Dhaval shah",
      create_date: "14/07/2022",
      settle_date: "09/10/2022",
      annotation: "Lorieam lissum",
      status: "Compalte",
      redrive: "",
    },
    {
      type: "Borrow",
      id: "10014",
      tsla: "TSLA",
      quantity: "10,000",
      rate: "5.14%",
      counter_party: "momin mohammad",
      create_date: "09/10/2022",
      settle_date: "09/12/2022",
      annotation: "Lorieam lissum",
      status: "Compalte",
      redrive: "readdrive",
    },
    {
      type: "Loan",
      id: "10035",
      tsla: "TSLA",
      quantity: "10,000",
      rate: "5.14%",
      counter_party: "Dhaval verariay",
      create_date: "14/08/2022",
      settle_date: "09/11/2022",
      annotation: "Lorieam lissum",
      status: "Compalte",
      redrive: "",
    },
  ]);
  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFliter: true,
  };
  return (
    <>
      <div className="textFieldDiv">
        <ContractBooking />
      </div>
      <AgGrid columnDefs={columnDefs} rowData={rowData} />
    </>
  );
};

export default HomePage;
