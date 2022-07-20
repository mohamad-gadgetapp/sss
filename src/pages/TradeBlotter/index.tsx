import React, { useState } from "react";
import "./style.css";
import AgGrid from "../../components/AgGrid";
import tradingData from "../../tradeBooking.json";
import data from "../../loansData.json";

const TradeBlotter = () => {
  // interface TradeBlotterPageProps {
  //     height?: number;
  //     columns?: object;
  //     title?: string;
  // }
  const obj: any = {};
  const objSecond: any = {};
  const [rowData, setRowData] = useState<Array<object>>([
    ...tradingData.tradeBookingData,
  ]);
  const [rowDataLoan, setRowDataLoan] = useState<Array<object>>([
    ...data.loansData,
  ]);
  const [heightAG_1] = useState(30);
  const [details, setDetails] = useState<any>(() => {
    // getting stored value
    const saved: any = localStorage.getItem("rowData");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [checkStatus, setCheckStatus] = useState(false);
  const [newDetails, setNewDetails] = useState<any>(null);
  const [statusField, setStatusField] = useState<any>("");
  const [selectBorrow, setSelectBorrow] = useState("Borrow");
  const [selectLoan, setSelectLoan] = useState<any>("Loan");
  const [cpartyField, setCpartyField] = useState<any>("");
  const [cpartyFieldBorrow, setCpartyFieldBorrow] = useState("");
  const [securityField, setSecurityField] = useState<any>("");
  const [quantityField, setQuantityField] = useState<any>("");
  const [loanValueField, setLoanValueField] = useState<any>("");
  const [loanValueFieldBorrow, setLoanValueFieldBorrow] = useState("");
  // const [collateralField, setCollateralField] = useState<any>("");
  // const [collateralFieldBorrow, setCollateralFieldBorrow] = useState("");
  const [rateField, setRateField] = useState<any>("");
  const [hairCutField, setHairCutField] = useState<any>("");
  const [hairCutFieldBorrow, setHairCutFieldBorrow] = useState("");
  const [profitCenterField, setProfitCenterField] = useState<any>("");
  const [profitCenterFieldBorrow, setProfitCenterFieldBorrow] = useState("");
  const [termDateField, setTermDateField] = useState<any>("");
  const [termDateFieldBorrow, setTermDateFieldBorrow] = useState("");
  const [cpartyFieldError, setCpartyFieldError] = useState<any>("");
  const [cpartyFieldErrorBorrow, setCpartyFieldErrorBorrow] = useState<any>("");
  const [securityFieldError, setSecurityFieldError] = useState<any>("");
  const [quantityFieldError, setQuantityFieldError] = useState<any>("");
  const [loanValueFieldError, setLoanValueFieldError] = useState<any>("");
  // const [collateralFieldError, setCollateralFieldError] = useState<any>("");
  const [rateFieldError, setRateFieldError] = useState<any>("");
  const [hairCutFieldError, setHairCutFieldError] = useState<any>("");
  const [profitCenterFieldError, setProfitCenterFieldError] = useState<any>("");
  const [loanValueFieldErrorBorrow, setLoanValueFieldErrorBorrow] =
    useState<any>("");
  // const [collateralFieldErrorBorrow, setCollateralFieldErrorBorrow] =
  //   useState<any>("");
  const [hairCutFieldErrorBorrow, setHairCutFieldErrorBorrow] =
    useState<any>("");
  const [profitCenterFieldErrorBorrow, setProfitCenterFieldErrorBorrow] =
    useState<any>("");

  // const showData = () => {
  //     document.getElementById("tablePart").style.width = "70%";
  // }
  // var localData: any = localStorage.getItem("rowData");
  // let localData_ = JSON.parse(localData);
  // useEffect(() => {
  //
  //     setDetails(localData_);
  // }, [])
  //
  // useEffect(() => {
  //     console.log("dataNew: ", details);
  // }, [details])
  //
  const onCLickData = (data: any) => {
    console.log("data ,", data);
  };

  const checkboxOnChange = () => {};

  const clearTextFn = () => {
    setCpartyField("");
    setSecurityField("");
    setQuantityField("");
    setLoanValueField("");
    // setCollateralField("");
    setRateField("");
    setHairCutField("");
    setProfitCenterField("");
    setTermDateField("");
  };

  const bookFn = () => {
    let hasError = true;
    console.log("length", profitCenterField.length);
    // if (selectLoan === "") {
    //   setErrorField(true);
    //   hasError = false;
    // } else {
    //   setErrorField(false);
    // }
    if (checkStatus === true) {
      console.log("errorBorrow");
      if (cpartyField === "") {
        setCpartyFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setCpartyFieldError("");
      }
      if (securityField === "") {
        setSecurityFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setSecurityFieldError("");
      }
      if (quantityField === "") {
        setQuantityFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setQuantityFieldError("");
      }
      if (loanValueField === "") {
        setLoanValueFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setLoanValueFieldError("");
      }
      // if (collateralField === "" || collateralField.length > 1) {
      //   setCollateralFieldError("Enter Valid Text");
      //   hasError = false;
      // } else {
      //   setCollateralFieldError("");
      // }
      if (rateField === "") {
        setRateFieldError("Enter Valid Text");
        hasError = false;
      } else if (rateField < -999 || rateField > 999) {
        setRateFieldError("Enter Valid Rate");
        hasError = false;
      } else {
        setRateFieldError("");
      }
      if (hairCutField === "") {
        setHairCutFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setHairCutFieldError("");
      }
      if (profitCenterField.length > 1) {
        setProfitCenterFieldError("Enter 1 character");
        hasError = false;
      } else {
        setProfitCenterFieldError("");
      }
      if (cpartyFieldBorrow === "") {
        setCpartyFieldErrorBorrow("Enter Valid Text");
        hasError = false;
      } else {
        setCpartyFieldErrorBorrow("");
      }
      if (loanValueFieldBorrow === "") {
        setLoanValueFieldErrorBorrow("Enter Valid Text");
        hasError = false;
      } else {
        setLoanValueFieldErrorBorrow("");
      }
      // if (collateralFieldBorrow === "" || collateralFieldBorrow.length > 1) {
      //   setCollateralFieldErrorBorrow("Enter Valid Text");
      //   hasError = false;
      // } else {
      //   setCollateralFieldErrorBorrow("");
      // }
      if (hairCutFieldBorrow === "") {
        setHairCutFieldErrorBorrow("Enter Valid Text");
        hasError = false;
      } else {
        setHairCutFieldErrorBorrow("");
      }
      if (profitCenterFieldBorrow.length > 1) {
        setProfitCenterFieldErrorBorrow("Enter 1 character");
        hasError = false;
      } else {
        setProfitCenterFieldErrorBorrow("");
      }
    } else {
      if (cpartyField === "") {
        setCpartyFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setCpartyFieldError("");
      }
      if (securityField === "") {
        setSecurityFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setSecurityFieldError("");
      }
      if (quantityField === "") {
        setQuantityFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setQuantityFieldError("");
      }
      if (loanValueField === "") {
        setLoanValueFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setLoanValueFieldError("");
      }
      // if (collateralField === "" || collateralField.length > 1) {
      //   setCollateralFieldError("Enter Valid Text");
      //   hasError = false;
      // } else {
      //   setCollateralFieldError("");
      // }
      if (rateField === "") {
        setRateFieldError("Enter Valid Text");
        hasError = false;
      } else if (rateField < -999 || rateField > 999) {
        setRateFieldError("Enter Valid Rate");
        hasError = false;
      } else {
        setRateFieldError("");
      }
      if (hairCutField === "") {
        setHairCutFieldError("Enter Valid Text");
        hasError = false;
      } else {
        setHairCutFieldError("");
      }
      if (profitCenterField.length > 1) {
        setProfitCenterFieldError("Enter 1 character");
        hasError = false;
      } else {
        setProfitCenterFieldError("");
      }
    }

    ////////////////////////////////////////////////////////////////////

    if (hasError === true) {
      if (checkStatus === true) {
        obj["status"] = "Sent";
        obj["trade_type"] = selectLoan;
        obj["cparty"] = cpartyField;
        obj["security"] = securityField;
        obj["quantity"] = quantityField;
        obj["loan_value"] = loanValueField;
        // obj["collateral_code"] = collateralField;
        obj["rate"] = rateField;
        obj["haircut"] = hairCutField;
        obj["profit_center"] = profitCenterField;
        obj["term_date"] = termDateField;
        objSecond["status"] = "Pending";
        objSecond["trade_type"] = selectBorrow;
        objSecond["cparty"] = cpartyFieldBorrow;
        objSecond["security"] = securityField;
        objSecond["quantity"] = quantityField;
        objSecond["loan_value"] = loanValueFieldBorrow;
        // objSecond["collateral_code"] = collateralFieldBorrow;
        objSecond["rate"] = rateField;
        objSecond["haircut"] = hairCutFieldBorrow;
        objSecond["profit_center"] = profitCenterFieldBorrow;
        objSecond["term_date"] = termDateFieldBorrow;
        setRowData([...rowData, obj, objSecond]);
      } else {
        obj["status"] = "Sent";
        obj["trade_type"] = selectLoan;
        obj["cparty"] = cpartyField;
        obj["security"] = securityField;
        obj["quantity"] = quantityField;
        obj["loan_value"] = loanValueField;
        // obj["collateral_code"] = collateralField;
        obj["rate"] = rateField;
        obj["haircut"] = hairCutField;
        obj["profit_center"] = profitCenterField;
        obj["term_date"] = termDateField;
        setRowData([...rowData, obj]);
      }
      clearTextFn();
      document.getElementsByTagName("input")[0].focus();
    }
  };

  return (
    <div className="main-div-TradeBlotter">
      <div id="tablePart" className="left-part">
        <div className="main-div-TradeBooking">
          <div className="header-TradeBooking">
            <span className="title-style">Trade Booking</span>
            <svg
              className="upArrow-TradeBooking"
              fill="#000"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              ></path>
            </svg>
          </div>
          <div className="search-main-div">
            {/* <form action=""> */}
            <div className="search-table">
              <div className="checkbox-div">
                <input
                  type="checkbox"
                  name=""
                  id="match"
                  tabIndex={1}
                  onChange={() => setCheckStatus(!checkStatus)}
                />
                <label htmlFor="match" className="label-style">
                  Match
                </label>
              </div>
              <div className="table-div">
                <table className="table-style">
                  <thead>
                    <tr>
                      <td className="table-data-cell">B/L</td>
                      <td className="table-data-cell">Cparty</td>
                      <td className="table-data-cell">Security</td>
                      <td className="table-data-cell">Quantity</td>
                      <td className="table-data-cell">Loan Value</td>
                      {/* <td className="table-data-cell">Collateral Code</td> */}
                      <td className="table-data-cell">Rate</td>
                      <td className="table-data-cell">Mark</td>
                      <td className="table-data-cell">Profit Center</td>
                      <td className="table-data-cell">Term Date</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="select-data-cell">
                        <select
                          className="select-style"
                          value={selectLoan}
                          onChange={(e) => setSelectLoan(e.target.value)}
                        >
                          <option>Loan</option>
                          <option>Borrow</option>
                        </select>
                      </td>
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="text"
                            name=""
                            id="cparty"
                            required
                            className="input-style"
                            value={cpartyField}
                            onChange={(e) => setCpartyField(e.target.value)}
                          />

                          <span className="error-style">
                            {cpartyFieldError}
                          </span>
                        </div>
                      </td>
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="text"
                            name=""
                            id="security"
                            className="input-style"
                            value={securityField}
                            onChange={(e) => setSecurityField(e.target.value)}
                            required
                          />
                          <span className="error-style">
                            {securityFieldError}
                          </span>
                        </div>
                      </td>
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="text"
                            name=""
                            id="quantity"
                            className="input-style"
                            value={quantityField}
                            onChange={(e) => setQuantityField(e.target.value)}
                            required
                          />
                          <span className="error-style">
                            {quantityFieldError}
                          </span>
                        </div>
                      </td>
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="text"
                            name=""
                            id="loanValue"
                            className="input-style"
                            value={loanValueField}
                            onChange={(e) => setLoanValueField(e.target.value)}
                            required
                          />
                          <span className="error-style">
                            {loanValueFieldError}
                          </span>
                        </div>
                      </td>
                      {/* <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="text"
                            name=""
                            id="collateralCode"
                            className="input-style"
                            value={collateralField}
                            onChange={(e) => setCollateralField(e.target.value)}
                            required
                          />
                          <span className="error-style">
                            {collateralFieldError}
                          </span>
                        </div>
                      </td> */}
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="number"
                            name=""
                            id="rate"
                            className="input-style"
                            value={rateField}
                            onChange={(e) => setRateField(e.target.value)}
                            required
                          />
                          <span className="error-style">{rateFieldError}</span>
                        </div>
                      </td>
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="text"
                            name=""
                            id="haircut"
                            className="input-style"
                            value={hairCutField}
                            onChange={(e) => setHairCutField(e.target.value)}
                            required
                          />
                          <span className="error-style">
                            {hairCutFieldError}
                          </span>
                        </div>
                      </td>
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="text"
                            name=""
                            id="profitCenter"
                            className="input-style"
                            value={profitCenterField}
                            onChange={(e) =>
                              setProfitCenterField(e.target.value)
                            }
                          />
                          <span className="error-style">
                            {profitCenterFieldError}
                          </span>
                        </div>
                      </td>
                      <td className="table-data-cell">
                        <div className="table-data-cell-innerDiv">
                          <input
                            type="date"
                            name=""
                            id="termDate"
                            className="input-style"
                            value={termDateField}
                            onChange={(e) => setTermDateField(e.target.value)}
                          />
                        </div>
                      </td>
                    </tr>
                    {checkStatus && (
                      <tr>
                        <td className="select-data-cell">
                          <select
                            className="select-style"
                            value={selectBorrow}
                            onChange={(e) => setSelectBorrow(e.target.value)}
                          >
                            <option>Loan</option>
                            <option>Borrow</option>
                          </select>
                        </td>
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="text"
                              name=""
                              id="cparty"
                              required
                              className="input-style"
                              onChange={(e) =>
                                setCpartyFieldBorrow(e.target.value)
                              }
                            />
                            <span className="error-style">
                              {cpartyFieldErrorBorrow}
                            </span>
                          </div>
                        </td>
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="text"
                              name=""
                              id="security"
                              className="input-style"
                              value={securityField}
                              onChange={(e) => setSecurityField(e.target.value)}
                              required
                            />
                            <span className="error-style">
                              {securityFieldError}
                            </span>
                          </div>
                        </td>
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="text"
                              name=""
                              id="quantity"
                              className="input-style"
                              value={quantityField}
                              onChange={(e) => setQuantityField(e.target.value)}
                              required
                            />
                            <span className="error-style">
                              {quantityFieldError}
                            </span>
                          </div>
                        </td>
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="text"
                              name=""
                              id="loanValue"
                              className="input-style"
                              onChange={(e) =>
                                setLoanValueFieldBorrow(e.target.value)
                              }
                              required
                            />
                            <span className="error-style">
                              {loanValueFieldErrorBorrow}
                            </span>
                          </div>
                        </td>
                        {/* <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="text"
                              name=""
                              id="collateralCode"
                              className="input-style"
                              onChange={(e) =>
                                setCollateralFieldBorrow(e.target.value)
                              }
                              required
                            />
                            <span className="error-style">
                              {collateralFieldErrorBorrow}
                            </span>
                          </div>
                        </td> */}
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="number"
                              name=""
                              id="rate"
                              className="input-style"
                              value={rateField}
                              onChange={(e) => setRateField(e.target.value)}
                              required
                            />
                            <span className="error-style">
                              {rateFieldError}
                            </span>
                          </div>
                        </td>
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="text"
                              name=""
                              id="haircut"
                              className="input-style"
                              onChange={(e) =>
                                setHairCutFieldBorrow(e.target.value)
                              }
                              required
                            />
                            <span className="error-style">
                              {hairCutFieldErrorBorrow}
                            </span>
                          </div>
                        </td>
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="text"
                              name=""
                              id="profitCenter"
                              className="input-style"
                              onChange={(e) =>
                                setProfitCenterFieldBorrow(e.target.value)
                              }
                            />
                            <span className="error-style">
                              {profitCenterFieldErrorBorrow}
                            </span>
                          </div>
                        </td>
                        <td className="table-data-cell">
                          <div className="table-data-cell-innerDiv">
                            <input
                              type="date"
                              name=""
                              id="termDate"
                              className="input-style"
                              onChange={(e) =>
                                setTermDateFieldBorrow(e.target.value)
                              }
                            />
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="book-div">
                <button
                  type="submit"
                  className="button-style"
                  onClick={() => bookFn()}
                >
                  Book
                </button>
              </div>
            </div>
            {/* </form> */}
            <div className="submit-div">
              <div className="checkbox-div">
                <input type="checkbox" name="" id="selectAll" />
                <label htmlFor="selectAll" className="label-style">
                  Select All
                </label>
              </div>
              <div className="button-div">
                <button className="button-style">Upload Template</button>
                <button className="button-style">Upload</button>
                <button className="button-style">Clear</button>
                <button className="button-style">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <AgGrid rowData={rowData} height={heightAG_1} type="trade" />
        <div className="main-div-TradeBooking">
          <div className="header-TradeBooking">
            <span className="title-style">Trade Browser</span>
            <svg
              className="upArrow-TradeBooking"
              fill="#000"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              ></path>
            </svg>
          </div>
          <div className="search-main-div">
            <div className="date-table-div">
              <table className="date-table-style">
                <tbody>
                  <tr>
                    <td className="date-table-data-cell">
                      <label htmlFor="fromDate">From</label>
                      <input
                        type="date"
                        name=""
                        id="fromDate"
                        className="date-input-style"
                      />
                    </td>
                    <td className="date-table-data-cell">
                      <label htmlFor="toDate">To</label>
                      <input
                        type="date"
                        name=""
                        id="toDate"
                        className="date-input-style"
                      />
                    </td>
                    <td className="security-table-data-cell">
                      <label htmlFor="fromDate">Security</label>
                      <input
                        type="text"
                        name=""
                        id="fromDate"
                        className="date-input-style"
                      />
                    </td>
                    <td className="input-table-data-cell">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input-style"
                      />
                    </td>
                    <td className="query-table-data-cell">
                      <button className="button-style">Query</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="main-div-TradeBooking">
          <div className="title-subHeaderTitle"> Borrow</div>
          <AgGrid
            rowData={rowDataLoan}
            height={heightAG_1}
            type="loan"
            onClickHan={onCLickData}
          />
        </div>
        <div className="main-div-TradeBooking">
          <div className="title-subHeaderTitle"> Loan</div>
          <AgGrid rowData={rowDataLoan} height={heightAG_1} type="loan" />
        </div>
      </div>
      <div id="data" className="right-part">
        <div className="main-div-TradeBooking">
          <div className="header-TradeBooking">
            <span className="title-style">Security Info</span>
            <svg
              className="upArrow-TradeBooking"
              fill="#000"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              ></path>
            </svg>
          </div>
          <div className="security-div">
            <div className="security-input-main-div">
              <div className="security-input">
                <label htmlFor="fromDate">Security</label>
                <input
                  type="text"
                  name=""
                  id="fromDate"
                  className="security-input-style"
                />
              </div>
            </div>
            <div className="date-table-div">
              <table className="date-table-style">
                <tbody>
                  <tr>
                    <td className="securityInfo-table-data-cell">Country</td>
                    <td className="securityInfo-table-data-cell">Name</td>
                    <td className="securityInfo-table-data-cell">Cusip</td>
                  </tr>
                  {details !== null && (
                    <tr>
                      <td className="securityInfo-table-data-cell">
                        {details.cparty}
                      </td>
                      <td className="securityInfo-table-data-cell">
                        {details.collateral_code}
                      </td>
                      <td className="securityInfo-table-data-cell">
                        {details.haircut}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="date-table-div">
              <table className="date-table-style">
                <tbody>
                  <tr>
                    <td className="securityInfo-table-data-cell">Price</td>
                    <td className="securityInfo-table-data-cell">Isin</td>
                    <td className="securityInfo-table-data-cell">Sedol</td>
                  </tr>
                  {details !== null && (
                    <tr>
                      <td className="securityInfo-table-data-cell">
                        {details.cparty}
                      </td>
                      <td className="securityInfo-table-data-cell">
                        {details.collateral_code}
                      </td>
                      <td className="securityInfo-table-data-cell">
                        {details.haircut}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="main-div-TradeBooking">
          <div className="header-TradeBooking">
            <span className="title-style">Counter Party</span>
            <svg
              className="upArrow-TradeBooking"
              fill="#000"
              stroke="#fff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              ></path>
            </svg>
          </div>
          <div className="security-div">
            <div className="security-input-main-div">
              <div className="security-input">
                <label htmlFor="fromDate">Cparty</label>
                <input
                  type="text"
                  name=""
                  id="fromDate"
                  className="security-input-style"
                />
              </div>
            </div>
            <div className="counter-main-div font-style">
              <div className="counter-inner-style">Name:</div>
              <div className="counter-inner-style">Borrow Haircut:</div>
              <div className="counter-inner-style">Loan Haircut:</div>
              <div className="counter-inner-style">Borrow Limit:</div>
              <div className="counter-inner-style">Borrow Limit:</div>
              <div className="counter-inner-style">Rounding:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeBlotter;
