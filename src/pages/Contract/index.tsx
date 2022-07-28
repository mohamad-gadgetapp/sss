import React, { useEffect, useState } from "react";
import AgGrid from "../../components/AgGrid";
import "./style.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SubHeader from "../../components/SubHeader";
import * as XLSX from "xlsx";
import data from "../../contractsData.json";
import CancelIcon from "@mui/icons-material/Cancel";
import Header from "../../components/Header";

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
  const [statusRow, setStatusRow] = useState<any>("");
  const [excelFileName, setExcelFileName] = useState("");
  const [workbookData, setworkbookData] = useState<any>(null);
  // const [excelData, setExcelData] = useState<any>(null);

  const [baLinConttract, setBaLinContract] = useState("");
  const [counterPartyinConttract, setCounterPartyinContract] = useState("");
  const [tickerContract, setTickerContract] = useState("");
  const [quantityContract, setQuantityContract] = useState<any>("");
  const [rateFieldContract, setRateFieldContract] = useState("");
  const [markFieldContract, setMarkFieldContract] = useState("");
  const [contractValueContract, setContractValueContract] = useState("");
  const [profitCenterFieldContract, setProfitCenterFieldContract] =
    useState("");
  const [termDateFieldContract, setTermDateFieldContract] = useState("");

  const [baLinConttractisMatch, setBaLinContractisMatch] = useState("");
  const [counterPartyinConttractisMatch, setCounterPartyinContractisMatch] =
    useState("");
  const [tickerContractisMatch, setTickerContractisMatch] = useState("");
  const [quantityContractisMatch, setQuantityContractisMatch] = useState("");
  const [rateFieldContractisMatch, setRateFieldContractisMatch] = useState("");
  const [markFieldContractisMatch, setMarkFieldContractisMatch] = useState<any>("");
  const [contractValueContractisMatch, setContractValueContractisMatch] =
    useState("");
  const [
    profitCenterFieldContractisMatch,
    setProfitCenterFieldContractisMatch,
  ] = useState<any>("");
  const [termDateFieldContractisMatch, setTermDateFieldContractisMatch] =
    useState("");

  const [errorBaL, setErrorBaL] = useState("");
  const [errorCounterParty, setErrorCounterParty] = useState("");
  const [errorTicker, setErrorTicker] = useState("");
  const [errorQuantity, setErrorQuantity] = useState("");
  const [errorRate, setErrorRate] = useState("");
  const [errorMark, setErrorMark] = useState("");
  const [errorContractValue, setErrorContractValue] = useState("");
  const [errorProfitCenter, setErrorProfitCenter] = useState("");
  const [errorTermDate, setErrorTermDate] = useState("");

  const [errorBaLisMatch, setErrorBaLisMatch] = useState("");
  const [errorCounterPartyisMatch, setErrorCounterPartyisMatch] = useState("");
  const [errorTickerisMatch, setErrorTickerisMatch] = useState("");
  const [errorQuantityisMatch, setErrorQuantityisMatch] = useState("");
  const [errorRateisMatch, setErrorRateisMatch] = useState("");
  const [errorMarkisMatch, setErrorMarkisMatch] = useState("");
  const [errorContractValueisMatch, setErrorContractValueisMatch] =
    useState("");
  const [errorProfitCenterisMatch, setErrorProfitCenterisMatch] = useState("");
  const [errorTermDateisMatch, setErrorTermDateisMatch] = useState("");

  const [counterPartySearch, setCounterPartySearch] = useState("");
  const [tickerSearch, setTickerSearch] = useState("");
  const [counterPartySearchisMatch, setCounterPartySearchisMatch] =
    useState("");
  const [tickerSearchisMatch, setTickerSearchisMatch] = useState("");

  const onSubmit = () => {
     console.log("on Submit",baLinConttract);
    const objData = {
      b_l: baLinConttract == "" ? "Loan" : baLinConttract,
      cpty_name: counterPartySearch,
      tb_ticker: tickerSearch,
      quantity: quantityContract,
      rate: rateFieldContract,
      cpty_id: markFieldContract,
      value: contractValueContract,
      profit_center: profitCenterFieldContract,
      term_date: termDateFieldContract,
      status: "sent",
      cusip: "@37833100",
      daily_accruals: "956.22",
      settle_date_diff: "14-JUN 22-C2257-1",
      contract_id: "14-JUN 22-C2257-1",
    };
    const objDataMatch = {
      b_l: baLinConttract == "Borrow" ? "Loan" : "Borrow",
      cpty_name: counterPartySearchisMatch,
      tb_ticker: tickerSearchisMatch,
      quantity: quantityContract,
      rate: rateFieldContractisMatch,
      cpty_id: markFieldContractisMatch,
      value: contractValueContractisMatch,
      profit_center: profitCenterFieldContractisMatch,
      term_date: termDateFieldContractisMatch,
      status: "sent",
      cusip: "@37833100",
      daily_accruals: "956.22",
      settle_date_diff: "14-JUN 22-C2257-1",
      contract_id: "14-JUN 22-C2257-1",
    };

    document.getElementsByTagName("input")[0].focus();
    let hasError = true;
    // if (baLinConttract === "") {
    //   setErrorBaL("Please enter the value");

    //   hasError = false;
    // } else {
    //   setErrorBaL("");
    // }
    console.log("borrowandLoan", baLinConttract);
    if (counterPartyinConttract == "") {
      setErrorCounterParty("Please enter the value");
      hasError = false;
    } else {
      setErrorCounterParty("");
    }
    if (tickerContract == "") {
      setErrorTicker("Please enter the value");
      hasError = false;
    } else {
      setErrorTicker("");
    }
    if (quantityContract == "") {
      setErrorQuantity("Please enter the value");
      hasError = false;
    } else if (quantityContract < 0) {
      setErrorQuantity("Please enter positive number");
      hasError = false;
    } else {
      setErrorQuantity("");
    }
    if (rateFieldContract == "") {
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
    if (contractValueContract == "") {
      setErrorContractValue("Please enter the value");
      hasError = false;
    } else {
      setErrorContractValue("");
    }
    // if (profitCenterFieldContract == "") {
    //   setErrorProfitCenter("Please enter the value");
    //   hasError = false;
    // } else {
    //   setErrorProfitCenter("");
    // }
    // if (termDateFieldContract == "") {
    //   setErrorTermDate("Please enter the date");
    //   hasError = false;
    // } else {
    //   setErrorTermDate("");
    // }
    // if(baLinConttractisMatch == ""){
    //   setErrorBaLisMatch("Please enter the value")
    //   hasError = false;
    // }else{
    //   setErrorBaLisMatch("")
    // }
    if (counterPartyinConttractisMatch == "") {
      setErrorCounterPartyisMatch("Please enter the value");
      hasError = false;
    } else {
      setErrorCounterPartyisMatch("");
    }
    if (tickerSearchisMatch == "") {
      setErrorTickerisMatch("Please enter the value");
      hasError = false;
    } else {
      setErrorTickerisMatch("");
    }
    // if (quantityContractisMatch == "") {
    //   setErrorQuantityisMatch("Please enter the value");
    //   hasError = false;
    // }
    // else if(parseInt(quantityContractisMatch) < 0){
    //   setErrorQuantityisMatch("Please enter positive value");
    //   hasError = false;
    // } else {
    //   setErrorQuantityisMatch("");
    // }
    if (rateFieldContractisMatch == "") {
      setErrorRateisMatch("Please enter the value");
      hasError = false;
    } else {
      setErrorRateisMatch("");
    }
    if(markFieldContractisMatch == ""){
      setErrorMarkisMatch("Please enter the value")
      hasError = false;
    }else{
      setErrorMarkisMatch("")
    }
    if (contractValueContractisMatch == "") {
      setErrorContractValueisMatch("Please enter the value");
      hasError = false;
    } else {
      setErrorContractValueisMatch("");
    }
    // if (profitCenterFieldContractisMatch == "") {
    //   setErrorProfitCenterisMatch("Please enter the value");
    //   hasError = false;
    // } else {
    //   setErrorProfitCenterisMatch("");
    // }
    // if (termDateFieldContractisMatch == "") {
    //   setErrorTermDateisMatch("Please enter the value");
    //   hasError = false;
    // } else {
    //   setErrorTermDateisMatch("");
    // }
    console.log(hasError);
    if (hasError === true) {
      console.log("InputData");
      setRowData([objData, objDataMatch, ...rowData]);
      console.log("data ", objData)
      console.log("matchdata ", objDataMatch)
    } else {
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
      A: "b_l",
      B: "cpty_id",
      C: "cpty_name",
      D: "tb_ticker",
      E: "cusip",
      F: "quantity",
      G: "rate",
      H: "value",
      I: "trade_date",
      J: "settle_date",
      K: "profit_center",
      L: "term_date",
      M: "daily_accruals",
      N: "settle_date_diff",
      O: "contract_id",
      P: "status",
      Q: "is_new",
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
      row.status = "New";
      if (row.quantity < 0) {
        row.status = "Error";
      }
      if (row.dtc_no === "") {
        row.status = "Error";
      }
      if (row.status === "New") {
        setStatusRow("Complete");
      }
      setRowData((pres) => [row, ...pres!]);
      rowIndex++;
    }
  };
  useEffect(() => {
    console.log("rowData ", rowData);
  }, [rowData]);

  return (
    <>
      <Header valid={false} />
      <div style={{ height: `${height}rem`, overflow: "auto", backgroundColor: "#EAECEF" }}>
        <div className="subHeaderContract">
          <SubHeader
            title=" Single Trade Entry"
            onClick={onSubmit}
            borrowAndLoneFieldprop={(e: any) => {
              setBaLinContract(e);
              // console.log("bali",e)
            }}
            counterPartyFieldprop={(e: any) => {
              setCounterPartyinContract(e.target.value);
            }}
            TickerFieldprop={(e: any) => {
              setTickerContract(e.target.value);
            }}
            QuantityFieldprop={(e: any) => {
              setQuantityContract(e.target.value);
            }}
            RateFieldprop={(e: any) => {
              setRateFieldContract(e.target.value);
            }}
            MarkFieldprop={(e: any) => {
              setMarkFieldContract(e);
            }}
            ContractValueFieldprop={(e: any) => {
              setContractValueContract(e);
            }}
            ProfitCenterFieldprop={(e: any) => {
              setProfitCenterFieldContract(e.target.value);
            }}
            TermDateFieldprop={(e: any) => {
              setTermDateFieldContract(e.target.value);
            }}
            borrowAndLoneFieldisMatchprop={(e: any) => {
              setBaLinContractisMatch(e.target.value);
            }}
            CounterPartyClick={(item: any) => {
              setCounterPartySearch(item.NAME);
            }}
            CounterPartyClickisMatch={(item: any) => {
              console.log("search dfksd ", item)
              setCounterPartySearchisMatch(item.NAME);
            }}
            // CounterPartyClickisMatch={(item: any) => {console.log(item)}}
            TickerSearch={(item: any) => {
              console.log("ticketdu ", item.Ticker)
              setTickerSearch(item.Ticker);
            }}
            TickerSearchMatch={(item: any) => {
              console.log("tickeryu 02", item.Ticker)
              setTickerSearchisMatch(item.Ticker);
            }}
            counterPartyFieldisMatchprop={(e: any) => {
              setCounterPartyinContractisMatch(e.target.value);
            }}
            TickerFieldisMatchprop={(e: any) => {
              setTickerContractisMatch(e.target.value);
            }}
            QuantityFieldisMatchprop={(e: any) => {
              setQuantityContractisMatch(e.target.value);
            }}
            RateFieldisMatchprop={(e: any) => {
              setRateFieldContractisMatch(e.target.value);
            }}
            MarkFieldisMatchprop={(e: any) => {
              setMarkFieldContractisMatch(e);
            }}
            ContractValueFieldisMatchprop={(e: any) => {
              setContractValueContractisMatch(e);
            }}
            ProfitCenterFieldisMatchprop={(e: any) => {
              setProfitCenterFieldContractisMatch(e.target.value);
            }}
            TermDateFieldisMatchprop={(e: any) => {
              setTermDateFieldContractisMatch(e.target.value);
            }}
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
            // errorProfitCenterisMatch={errorProfitCenterisMatch}
            // errorTermDateisMatch={errorTermDateisMatch}
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
