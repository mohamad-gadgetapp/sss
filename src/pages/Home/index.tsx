import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import { colors } from "../../common/color"
import "./style.css"
import AgGrid from "../../components/AgGrid";
import data from "../../data.json";
import ContractBooking from '../ContractBooking';

const HomePage = () => {
  const [rowData, setRowData] = useState<Array<object>>([...data.match]);
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
