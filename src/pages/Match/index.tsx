import React, { useState } from "react";
import AgGrid from "../../components/AgGrid";
import data from "../../data.json";
import "./style.css";

const Match = () => {
  const [rowData, setRowData] = useState<Array<object>>([...data.match]);
  const [heightAG_1, setHeightAG_1] = useState(30);

  return (
    <div className="react-grid-item-contract">
      <div className="title-subHeaderTitle"> Match </div>
      <AgGrid  rowData={rowData} height={heightAG_1} />
    </div>
  );
};

export default Match;
