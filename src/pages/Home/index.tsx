import React, { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import "./style.css"
import AgGrid from "../../components/AgGrid";
import data from "../../contractsData.json";
import ContractBooking from '../ContractBooking';
import ShowcaseLayout from "../../components/ShowcaseLayout";
const HomePage = () => {
  const [rowData, setRowData] = useState<Array<object>>([...data.contractsData]);
  const [layout, setLayout] = useState<Array<object>>([]);
  const [heightC, setHeightC] = useState(0);
  const [heightAG_1, setHeightAG_1] = useState(20.3);
  const [heightAG_2, setHeightAG_2] = useState(20.3);
  const [heightAG_3, setHeightAG_3] = useState(20.3);

  const onLayoutChange = (layout: any) => {
    console.log("layout ", layout)
    console.log("layout_2 ", ((layout[1].h * 20.3) / 7))

    setLayout(layout);
    setHeightC(((layout[0].h * 20.3) / 7))
    setHeightAG_1(((layout[1].h * 20.3) / 7))
    setHeightAG_2(((layout[2].h * 20.3) / 7))
    setHeightAG_3(((layout[3].h * 20.3) / 7))
  }
  return (
    <>
      <ShowcaseLayout
        onLayoutChange={onLayoutChange}
        child_list={[
          <ContractBooking height={heightC} />,
          <AgGrid title={"Borrow"} rowData={rowData} height={heightAG_1} />,
          <AgGrid title={"Match"} rowData={rowData} height={heightAG_2} />,
          <AgGrid title={"Not Match"} rowData={rowData} height={heightAG_3} />,
        ]}
        height={7}
      ></ShowcaseLayout>
    </>
  )
}

export default HomePage