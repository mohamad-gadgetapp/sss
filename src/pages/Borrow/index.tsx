import React, { useState } from "react";
import AgGrid from "../../components/AgGrid";
import data from "../../loansData.json";
import "./style.css"

const Borrow = () => {
  const [rowData, setRowData] = useState<Array<object>>([...data.loansData]);
  const [heightAG_1, setHeightAG_1] = useState(30);
  return (
    <div className="react-grid-item-contract">
      <div className="title-subHeaderTitle"> Borrow </div>
      <AgGrid rowData={rowData} height={heightAG_1}/>
    </div>
  );
};

export default Borrow;
