import React, { InputHTMLAttributes, useState } from "react";
import AgGrid from "../../components/AgGrid";
import data from "../../contractsData.json";
import "./style.css";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SubHeader from "../../components/SubHeader";

interface ContractPageProps {
  height?: number;
  columns?: object;
}

const Contract = ({ height }: ContractPageProps) => {
  const [rowData, setRowData] = useState<Array<object>>([...data.contractsData]);
  const [heightAG_1, setHeightAG_1] = useState(30);
  const [excelFile, setExcelFile] = useState("")

 const handleClick = (event: any) => {
  console.log("handleClick "+JSON.stringify(event.target.files[0]))
  setExcelFile(event.target.files[0])
 }

 const onSubmit = () => {
  console.log("excelFile " + JSON.stringify(excelFile))
 }

  return (
    <>
      <div style={{ height: `${height}rem`, overflow: "auto" }}>
        <div className="subHeaderContract">
        <SubHeader title="Contract Booking"/>
        </div>
        <div className="react-grid-item-contract">
          <div className="contractBooking-Button">
            <div className="title-subHeaderTitle ">Contract</div>
            <div className="clear-submit-btn-div">
              <div>
                <button className="excel-upload-btn">
                  <input type="file" className="FileUpload" onChange={(event)=> handleClick(event)} accept=".xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlt,.xls,.xls"/>
                  <div className="dropZoneOverlay">
                  <AddCircleOutlineIcon
                    style={{
                      color: "grey",
                      marginBottom: "0.25rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Upload Excel File
                  </div>
                </button>
              </div>
              <Button title="Submit" onClick={onSubmit}/>
              <button type="submit" className="clearAll-Btn">
                Clear All
              </button>
            </div>
          </div>
          <AgGrid rowData={rowData} height={heightAG_1} />
        </div>
      </div>
    </>
  );
};

export default Contract;
