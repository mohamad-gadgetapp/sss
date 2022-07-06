import React, { useState } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import { colors } from "../../common/color"
import "./style.css"
import AgGrid from "../../components/AgGrid";
import ContractBooking from '../ContractBooking';

const HomePage = () => {

  const [rowData, setRowData] = useState<Array<object>>([
    { type: "Loan", id: "10002", tsla: "TSLA", quantity: "10,000", rate: "5.14%", counter_party: "Dhaval shah", create_date: "14/07/2022", settle_date: "09/10/2022", annotation: "Lorieam lissum", status: "Compalte", redrive: "" },
    { type: "Borrow", id: "10014", tsla: "TSLA", quantity: "10,000", rate: "5.14%", counter_party: "momin mohammad", create_date: "09/10/2022", settle_date: "09/12/2022", annotation: "Lorieam lissum", status: "Compalte", redrive: "readdrive" },
    { type: "Loan", id: "10035", tsla: "TSLA", quantity: "10,000", rate: "5.14%", counter_party: "Dhaval verariay", create_date: "14/08/2022", settle_date: "09/11/2022", annotation: "Lorieam lissum", status: "Compalte", redrive: "" }
  ]);
  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFliter: true,
  }
  return (
    <>
      <div className='textFieldDiv'>
        <ContractBooking />
      </div>
      <AgGrid rowData={rowData} />
    </>
  )
}

export default HomePage
