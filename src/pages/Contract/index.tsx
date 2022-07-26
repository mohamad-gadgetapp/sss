import React, { useEffect, useState } from "react";
import AgGrid from "../../components/AgGrid";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SubHeader from "../../components/SubHeader";
import * as XLSX from "xlsx";
import data from "../../contractsData.json";
import CancelIcon from "@mui/icons-material/Cancel";

interface ContractPageProps {
  height?: number;
  columns?: object;
  title?: string;
}

const Contract = ({ height, title }: ContractPageProps) => {
  const [rowData, setRowData] = useState<Array<object>>([
    ...data.contractsData,
  ]);
  const [heightAG_1] = useState(30);
  const [excelFileName, setExcelFileName] = useState("");
  const [workbookData, setworkbookData] = useState<any>(null);
  // const [excelData, setExcelData] = useState<any>(null);

  const [baLinConttract, setBaLinContract] = useState("");
  const [counterPartyinConttract, setCounterPartyinContract] = useState("");
  const [tickerContract, setTickerContract] = useState("");
  const [quantityContract, setQuantityContract] = useState<any>("");
  const [rateFieldContract, setRateFieldContract] = useState("");
  const [markFieldContract, setMarkFieldContract] = useState("");
  const [contractValueContract,setContractValueContract] = useState("");
  const [profitCenterFieldContract, setProfitCenterFieldContract] = useState("");
  const [termDateFieldContract,setTermDateFieldContract] = useState("")

  const [baLinConttractisMatch, setBaLinContractisMatch] = useState("");
  const [counterPartyinConttractisMatch, setCounterPartyinContractisMatch] = useState("");
  const [tickerContractisMatch, setTickerContractisMatch] = useState("");
  const [quantityContractisMatch, setQuantityContractisMatch] = useState("");
  const [rateFieldContractisMatch, setRateFieldContractisMatch] = useState("");
  const [markFieldContractisMatch, setMarkFieldContractisMatch] = useState("");
  const [contractValueContractisMatch,setContractValueContractisMatch] = useState("");
  const [profitCenterFieldContractisMatch, setProfitCenterFieldContractisMatch] = useState("");
  const [termDateFieldContractisMatch,setTermDateFieldContractisMatch] = useState("")



  const [errorBaL, setErrorBaL] = useState("");
  const [errorCounterParty, setErrorCounterParty] = useState("");
  const [errorTicker, setErrorTicker] = useState("");
  const [errorQuantity, setErrorQuantity] = useState("");
  const [errorRate, setErrorRate] = useState("");
  const [errorMark, setErrorMark] = useState("");
  const [errorContractValue, setErrorContractValue] = useState("")
  const [errorProfitCenter, setErrorProfitCenter] = useState("");
  const [errorTermDate, setErrorTermDate] = useState("");

  const [errorBaLisMatch, setErrorBaLisMatch] = useState("");
  const [errorCounterPartyisMatch, setErrorCounterPartyisMatch] = useState("");
  const [errorTickerisMatch, setErrorTickerisMatch] = useState("");
  const [errorQuantityisMatch, setErrorQuantityisMatch] = useState("");
  const [errorRateisMatch, setErrorRateisMatch] = useState("");
  const [errorMarkisMatch, setErrorMarkisMatch] = useState("");
  const [errorContractValueisMatch, setErrorContractValueisMatch] = useState("")
  const [errorProfitCenterisMatch, setErrorProfitCenterisMatch] = useState("");
  const [errorTermDateisMatch, setErrorTermDateisMatch] = useState("");



  const onSubmit = () => {
    alert("on Submit");
    document.getElementsByTagName("input")[0].focus();
        let hasError = true;
    // if (baLinConttract === "") {
    //   setErrorBaL("Please enter the value");
       
    //   hasError = false;
    // } else {
    //   setErrorBaL("");
    // }
    if(counterPartyinConttract == ""){
      setErrorCounterParty("Please enter the value");
      hasError = false;
    } else {
      setErrorCounterParty("");
    }
    if(tickerContract == "") {
      setErrorTicker("Please enter the value");
      hasError = false;
    } else {
      setErrorTicker("");
    }
    if(quantityContract == "") {
      setErrorQuantity("Please enter the value");
      hasError = false;
    }else if(quantityContract < 0) {
      setErrorQuantity("Please enter positive number");
      hasError = false;
    } else {
      setErrorQuantity("");
    }
    if(rateFieldContract == ""){
      setErrorRate("Please enter the value");
      hasError = false;
    } else {
      setErrorRate("");
    }
    if(markFieldContract == ""){
      setErrorMark("Please enter the value");
      hasError = false;
    }else{
      setErrorMark("");
    }
    if(contractValueContract == ""){
      setErrorContractValue("Please enter the value");
      hasError = false;
    }else{
      setErrorContractValue("");
    }
    if(profitCenterFieldContract == ""){
      setErrorProfitCenter("Please enter the value");
      hasError = false;
    }else{
      setErrorProfitCenter("");
    }
    if(termDateFieldContract == ""){
      setErrorTermDate("Please enter the date");
      hasError = false;
    }else{
      setErrorTermDate("");
    }
    // if(baLinConttractisMatch == ""){
    //   setErrorBaLisMatch("Please enter the value")
    //   hasError = false;
    // }else{
    //   setErrorBaLisMatch("")
    // }
    if(counterPartyinConttractisMatch == ""){
      setErrorCounterPartyisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorCounterPartyisMatch("")
    }
    if(tickerContractisMatch == ""){
      setErrorTickerisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorTickerisMatch("")
    }
    if(quantityContractisMatch == ""){
      setErrorQuantityisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorQuantityisMatch("")
    }
    if(rateFieldContractisMatch == ""){
      setErrorRateisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorRateisMatch("")
    }
    if(markFieldContractisMatch == ""){
      setErrorMarkisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorMarkisMatch("")
    }
    if(contractValueContractisMatch == ""){
      setErrorContractValueisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorContractValueisMatch("")
    }
    if(profitCenterFieldContractisMatch == ""){
      setErrorProfitCenterisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorProfitCenterisMatch("")
    }
    if(termDateFieldContractisMatch == ""){
      setErrorTermDateisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorTermDateisMatch("")
    }
    if(hasError){
      console.log("data",baLinConttract,
      counterPartyinConttract,
      tickerContract,
      quantityContract,
      rateFieldContract,
      markFieldContract,
      contractValueContract,
      profitCenterFieldContract,
      termDateFieldContract,
      baLinConttractisMatch,
      counterPartyinConttractisMatch,
      tickerContractisMatch,
      quantityContractisMatch,
      rateFieldContractisMatch,
      markFieldContractisMatch,
      contractValueContractisMatch,
      profitCenterFieldContractisMatch,
      termDateFieldContractisMatch,)
    }
  };




  const onClear = () => {
    setRowData([...data.contractsData]);
    setExcelFileName("");
    setworkbookData([]);
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
      N: "is_new",
    };

    const rowData_ = rowData;
    const arrayData = rowData;
    var rowIndex = 2;
    console.log("row", worksheet["A" + rowIndex]);

    while (worksheet["A" + rowIndex]) {
      console.log("row");
      const row: any = {};
      Object.keys(columns).forEach(function (column) {
        console.log("params ", worksheet[column + rowIndex].w);
        console.log("column ", columns[column]);
        row[columns[column]] = worksheet[column + rowIndex].w;
      });
      if (row.quantity < 0) {
        row.status = "Error";
      }
      if (row.dtc_no === "") {
        row.status = "Error";
      }
      setRowData((pres) => [...pres!, row]);
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
          <SubHeader
            title="Trade Entry"
            onClick={onSubmit}
            borrowAndLoneFieldprop={(e:any) => {
              setBaLinContract(e.target.value);
            }}
            counterPartyFieldprop={(e:any) => {setCounterPartyinContract(e.target.value)}}
            TickerFieldprop={(e:any) => {setTickerContract(e.target.value)}}
            QuantityFieldprop={(e:any) => {setQuantityContract(e.target.value)}}
            RateFieldprop={(e:any) => {setRateFieldContract(e.target.value)}}
            MarkFieldprop={(e:any) => {setMarkFieldContract(e.target.value)}}
            ContractValueFieldprop={(e:any) => {setContractValueContract(e.target.value)}}
            ProfitCenterFieldprop={(e:any) => {setProfitCenterFieldContract(e.target.value)}}
            TermDateFieldprop={(e:any) => {setTermDateFieldContract(e.target.value)}}
            borrowAndLoneFieldisMatchprop={(e:any) => {
              setBaLinContractisMatch(e.target.value);
            }}
            counterPartyFieldisMatchprop={(e:any) => {setCounterPartyinContractisMatch(e.target.value)}}
            TickerFieldisMatchprop={(e:any) => {setTickerContractisMatch(e.target.value)}}
            QuantityFieldisMatchprop={(e:any) => {setQuantityContractisMatch(e.target.value)}}
            RateFieldisMatchprop={(e:any) => {setRateFieldContractisMatch(e.target.value)}}
            MarkFieldisMatchprop={(e:any) => {setMarkFieldContractisMatch(e.target.value)}}
            ContractValueFieldisMatchprop={(e:any) => {setContractValueContractisMatch(e.target.value)}}
            ProfitCenterFieldisMatchprop={(e:any) => {setProfitCenterFieldContractisMatch(e.target.value)}}
            TermDateFieldisMatchprop={(e:any) => {setTermDateFieldContractisMatch(e.target.value)}}

            errorCounterParty={errorCounterParty}
            errorTicker={errorTicker}
            errorQuantity={errorQuantity}
            errorRate={errorRate}
            errorMark={errorMark}
            errorContractValue={errorContractValue}
            errorProfitCenter={errorProfitCenter}
            errorTermDate={errorTermDate}

            errorCounterPartyisMatch={errorCounterPartyisMatch}
            errorTickerisMatch={errorTickerisMatch}
            errorQuantityisMatch={errorQuantityisMatch}
            errorRateisMatch={errorRateisMatch}
            errorMarkisMatch={errorMarkisMatch}
            errorContractValueisMatch={errorContractValueisMatch}
            errorProfitCenterisMatch={errorProfitCenterisMatch}
            errorTermDateisMatch={errorTermDateisMatch}
            
          />
        </div>
        <div className="react-grid-item-contract">
          <div className="contractBooking-Button">
            <div className="title-subHeaderTitle">Bulk Trade Entry</div>
            <div className="clear-submit-btn-div">
              <a href="" className="templetelink">
                Download Blank Templete
              </a>
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
                <div className="file-name">
                  {excelFileName}
                  {excelFileName === "" ? (
                    ""
                  ) : (
                    <CancelIcon
                      onClick={onClear}
                      style={{ color: "#E90909", height: "0.9rem" }}
                    />
                  )}
                </div>
              </div>
              <button type="submit" className="uploadSheet-submit-Btn">
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
