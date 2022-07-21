import React, { useEffect, useState } from "react";
import AgGrid from "../../components/AgGrid";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SubHeader from "../../components/SubHeader";
import * as XLSX from "xlsx";
import data from "../../contractsData.json";
import CancelIcon from '@mui/icons-material/Cancel';

interface ContractPageProps {
  height?: number;
  columns?: object;
  title?: string;
}

const Contract = ({ height, title }: ContractPageProps) => {
  const [rowData, setRowData] = useState<Array<object>>([...data.contractsData,]);
  const [heightAG_1] = useState(30);
  const [excelFileName, setExcelFileName] = useState("");
  const [workbookData, setworkbookData] = useState<any>(null);
  // const [excelData, setExcelData] = useState<any>(null);


  const onClear = () => {
    // setRowData([...data.contractsData]);
    setExcelFileName("");
    //setworkbookData([]);
  };
  const onChange = (e: any) => {
    makeRequest(
      "GET",
      `${URL.createObjectURL(e.target.files[0])}`,
      function (data) {
        var workbook = convertDataToWorkbook(data);
        populateGrid(workbook);
        setworkbookData(workbook);
        setExcelFileName(e.target.files[0].name);
      },
      function (error) {
        throw error;
      }
    );
  };

  const makeRequest = (
    method: string,
    url: string,
    success: (data: any) => void,
    error: (error: any) => void
  ) => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.responseType = "arraybuffer";

    httpRequest.open(method, url);
    httpRequest.onload = function () {
      success(httpRequest.response);
    };
    httpRequest.onerror = function () {
      error(httpRequest.response);
    };
    httpRequest.send();
  };
  const convertDataToWorkbook = (dataRows: any) => {
    var data = new Uint8Array(dataRows);
    var arr = [];

    for (var i = 0; i !== data.length; ++i) {
      arr[i] = String.fromCharCode(data[i]);
    }
    var bstr = arr.join("");
    return XLSX.read(bstr, { type: "binary" });
  };

  const populateGrid = (workbook: any) => {
    console.log("workbook ", workbook);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    console.log("workbook ", worksheet);
    const columns: Record<string, string> = {
      A: "dtc_no",
      B: "cpty_name",
      C: "tb_ticker",
      D: "cusip",
      E: "b/l",
      F: "quantity",
      G: "rate",
      H: "value",
      I: "trade_date",
      J: "settle_date",
      K: "status",
      L: "daily_debits",
      M: "contract_id",
      N:"is_new"
    };

    const rowData_ = rowData;
    const arrayData = rowData;
    var rowIndex = 2;
    console.log("row", worksheet["A" + rowIndex]);

    while (worksheet["A" + rowIndex]) {
      console.log("row");
      const row: any = {};
      Object.keys(columns).forEach(function (column) {
        console.log("params ", worksheet[column + rowIndex].w)
        console.log("column ", columns[column] )
        row[columns[column]] = worksheet[column + rowIndex].w;
      });
      if(row.quantity < 0){
        row.status = "Error"
      }
      if(row.dtc_no === ""){
        row.status = "Error"
      }
      setRowData(pres => [...pres!,row]);
      rowIndex++;
    }
  };
  useEffect(() => {
    console.log("rowData ", rowData);
  }, [rowData]);

  return (
    <>
      <div style={{ height: `${height}rem`, overflow: "auto" }}>
        <div className="subHeaderContract">
          <SubHeader title="Contract Booking" />
        </div>
        <div className="react-grid-item-contract">
          <div className="contractBooking-Button">
            <div className="title-subHeaderTitle">Contracts</div>
            <div className="clear-submit-btn-div">
              <a href="" className="templetelink">Download Blank Templete</a>
              <div className="upload-btn-main-div">
                <button className="excel-upload-btn">
                  <input
                    type="file"
                    className="FileUpload"
                    onChange={onChange}
                    accept=".xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlt,.xls,.xls"
                  />
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
                <div className="file-name">{excelFileName}{excelFileName === "" ? "" : <CancelIcon onClick={onClear} style={{ color: "#E90909", height: "0.9rem" }} />}</div>
              </div>
              <button
                type="submit"
                className="uploadSheet-submit-Btn"
              >
                Submit
              </button>
              <button className="clearAll-Btn" onClick={onClear}>
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
