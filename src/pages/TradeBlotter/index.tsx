import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
import AgGrid from "../../components/AgGrid";
import tradingData from "../../tradeBooking.json";
import data from "../../loansData.json";
import { countBy } from "lodash";

const TradeBlotter = () => {
  // interface TradeBlotterPageProps {
  //     height?: number;
  //     columns?: object;
  //     title?: string;
  // }

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
  const [newDetails, setNewDetails] = useState<any>(null);
  const [selectBorrow, setSelectBorrow] = useState("");
  const [selectLoan, setSelectLoan] = useState("");
  const [cpartyField, setCpartyField] = useState("");
  const [cpartyFieldBorrow, setCpartyFieldBorrow] = useState("");
  const [securityField, setSecurityField] = useState("");
  const [securityFieldBorrow, setSecurityFieldBorrow] = useState("");
  const [quantityField, setQuantityField] = useState("");
  const [quantityFieldBorrow, setQuantityFieldBorrow] = useState("");
  const [loanValueField, setloanValueField] = useState("");
  const [loanValueFieldBorrow, setloanValueFieldBorrow] = useState("");
  const [collateralField, setCollateralField] = useState("");
  const [collateralFieldBorrow, setCollateralFieldBorrow] = useState("");
  const [rateField, setRateField] = useState("");
  const [rateFieldBorrow, setRateFieldBorrow] = useState("");
  const [hairCutField, setHairCutField] = useState("");
  const [hairCutFieldBorrow, setHairCutFieldBorrow] = useState("");
  const [profitCenterField, setProfitCenterField] = useState("");
  const [profitCenterFieldBorrow, setProfitCenterFieldBorrow] = useState("");
  const [termDateField, setTermDateField] = useState("");
  const [termDateFieldBorrow, setTermDateFieldBorrow] = useState("");

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
            <div className="search-table">
              <div className="checkbox-div">
                <input type="checkbox" name="" id="match" />
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
                      <td className="table-data-cell">Collateral Code</td>
                      <td className="table-data-cell">Rate</td>
                      <td className="table-data-cell">Haircut</td>
                      <td className="table-data-cell">Profit Center</td>
                      <td className="table-data-cell">Term Date</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="select-data-cell">
                        <select className="select-style">
                          <option>Loan</option>
                          <option>Borrow</option>
                        </select>
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="cparty"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="security"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="quantity"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="loanValue"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="collateralCode"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="rate"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="haircut"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="profitCenter"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="termDate"
                          className="input-style"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="select-data-cell">
                        <select className="select-style">
                          <option>Borrow</option>
                          <option>Loan</option>
                        </select>
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="cparty"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="security"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="quantity"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="loanValue"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="collateralCode"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="rate"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="haircut"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="profitCenter"
                          className="input-style"
                        />
                      </td>
                      <td className="table-data-cell">
                        <input
                          type="text"
                          name=""
                          id="termDate"
                          className="input-style"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="book-div">
                <button className="button-style">Book</button>
              </div>
            </div>
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
