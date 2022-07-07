import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import "./style.css"
import AgGrid from "../../components/AgGrid";
import data from "../../data.json";
import ContractBooking from '../ContractBooking';
import ShowcaseLayout from "../../components/ShowcaseLayout";
const HomePage = () => {
  const [rowData, setRowData] = useState<Array<object>>([...data.match]);
  const [layout, setLayout] = useState<Array<object>>([]);
  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFliter: true,
  }
  const onLayoutChange = (layout: any) => {
    console.log("layout ", layout)
    setLayout(layout);
  }
  return (
    <>
      <ShowcaseLayout
        onLayoutChange={onLayoutChange}
        child_list={[
          <ContractBooking />,
          <AgGrid rowData={rowData} />,
          <AgGrid rowData={rowData} />,
          <AgGrid rowData={rowData} />,
        ]}
        height={6}
      ></ShowcaseLayout>
    </>
  )
}

export default HomePage