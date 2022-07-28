import React, { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import TextFieldonMatch from "../../components/TextFieldonMatch";
import Button from "../../components/Button";
import "./style.css";
import dummyData from "../../dummyData.json";
import symbol from "../../symbol.json";

interface SubHeaderProps {
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  borrowAndLoneFieldprop?: (event: any) => any;
  counterPartyFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  TickerFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  QuantityFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  ContractValueFieldprop?: (event: any) => any;
  ProfitCenterFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  RateFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  MarkFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  TermDateFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  borrowAndLoneFieldisMatchprop?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  counterPartyFieldisMatchprop?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  TickerFieldisMatchprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  QuantityFieldisMatchprop?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  ContractValueFieldisMatchprop?: (event: any) => any;
  ProfitCenterFieldisMatchprop?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  RateFieldisMatchprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  MarkFieldisMatchprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  TermDateFieldisMatchprop?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  errorCounterParty?: string;
  errorTicker?: string;
  errorQuantity?: string;
  errorRate?: string;
  errorMark?: string;
  errorContractValue?: string;
  errorProfitCenter?: string;
  errorTermDate?: string;

  errorCounterPartyisMatch?: string;
  errorTickerisMatch?: string;
  errorQuantityisMatch?: string;
  errorRateisMatch?: string;
  errorMarkisMatch?: string;
  errorContractValueisMatch?: string;
  errorProfitCenterisMatch?: string;
  errorTermDateisMatch?: string;

  CounterPartyClick?: any;
  TickerSearch?: any;
  CounterPartyClickisMatch?: any;
  TickerSearchMatch?: any;
}

const SubHeader = ({
  title,
  onClick,
  borrowAndLoneFieldprop,
  counterPartyFieldprop,
  TickerFieldprop,
  QuantityFieldprop,
  ContractValueFieldprop,
  ProfitCenterFieldprop,
  RateFieldprop,
  MarkFieldprop,
  TermDateFieldprop,
  borrowAndLoneFieldisMatchprop,
  counterPartyFieldisMatchprop,
  TickerFieldisMatchprop,
  QuantityFieldisMatchprop,
  ContractValueFieldisMatchprop,
  ProfitCenterFieldisMatchprop,
  RateFieldisMatchprop,
  MarkFieldisMatchprop,
  TermDateFieldisMatchprop,
  CounterPartyClick,
  TickerSearch,
  CounterPartyClickisMatch,
  TickerSearchMatch,
  errorCounterParty,
  errorTicker,
  errorQuantity,
  errorRate,
  errorMark,
  errorContractValue,
  errorProfitCenter,
  errorTermDate,
  errorCounterPartyisMatch,
  errorTickerisMatch,
  errorQuantityisMatch,
  errorRateisMatch,
  errorMarkisMatch,
  errorContractValueisMatch,
  errorProfitCenterisMatch,
  errorTermDateisMatch,
}: SubHeaderProps) => {
  const [checkedRadio, setCheckedRadio] = useState(false);
  const [borrowAndLoanField, setBorrowAndLoan] = useState("Loan");
  const [counterPartyField, setCounterPartyField] = useState<any>("");
  const [tickerField, setTickerField] = useState("");
  const [quantityField, setQuantityField] = useState<any>("");
  const [rateField, setRateField] = useState<any>("0");
  const [markField, setMarkField] = useState("");
  const [contractValueField, setContractValueField] = useState("");
  const [profitCenterField, setProfitCenterField] = useState("");
  const [termDateField, setTermDateField] = useState("");

  const [cpartyInputStatus, setCpartyInputStatus] = useState(false);
  const [cpartyBorrowInputStatus, setCpartyBorrowInputStatus] = useState(false);
  const [securityInputStatus, setSecurityInputStatus] = useState(false);
  const [securityBorrowInputStatus, setSecurityBorrowInputStatus] =
    useState(false);
  const [allIndex, setAllIndex] = useState<any>("")

  const [borrowAndLoanFieldisMatch, setBorrowAndLoanFieldisMatch] =
    useState("Borrow");
  const [counterPartyFieldisMatch, setCounterPartyFieldisMatch] = useState("");
  const [tickerFieldisMatch, setTickerFieldisMatch] = useState("");
  const [quantityFieldisMatch, setQuantityFieldisMatch] = useState("");
  const [rateFieldisMatch, setRateFieldisMatch] = useState("0");
  const [markFieldisMatch, setMarkFieldisMatch] = useState("");
  const [contractFieldisMatch, setContractFieldisMatch] = useState("");
  const [profitCenterFieldisMatch, setProfitCenterFieldisMatch] = useState("");
  const [termDateFieldisMatch, setTermDateFieldisMatch] = useState("");

  const [list, setList] = useState<Array<object>>(dummyData.dummyData);
  const [tickerList, setTickerList] = useState<Array<object>>(
    symbol.Sec_master
  );

  const [counterPartyName, setCounterPartyName] = useState("");
  const [tickerName, setTickerName] = useState("");
  const [tickerPrice, setTickerPrice] = useState("");
  // const [counterPartyselectedItem, setCounterPartyselectedItem] = useState<any>("");

  const handleClick = (event: any) => {
    setCheckedRadio(event.target.checked);
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const onChangeBorrowAndLoan = (e: any) => {
    setBorrowAndLoan(e.target.value);
    console.log("subheader bali", e.target.value);
    if (borrowAndLoneFieldprop) {
      if (e.target.value != "") {
        borrowAndLoneFieldprop(e.target.value);
      } else {
        borrowAndLoneFieldprop("Loan");
      }
    }
  };

  const onChangeCounterParty = (e: any) => {
    setCounterPartyField(e.target.value);
    // setCounterPartyFieldisMatch(e.target.value);
    if (counterPartyFieldprop) {
      counterPartyFieldprop(e);
    }
  };

  const onChangeTicker = (e: any) => {
    setTickerField(e.target.value);
    if (TickerFieldprop) {
      TickerFieldprop(e);
    }
    if (e.target.value === "") {
      setTickerFieldisMatch("");
    }
  };

  const onChangeRate = (e: any) => {
    setRateField(e.target.value);
    if (RateFieldprop) {
      RateFieldprop(e);
    }
    let contractValue = parseInt(quantityField) * parseInt(e.target.value);
    // console.log("contractValue ", contractValue);
    setContractValueField(JSON.stringify(contractValue));
    if (ContractValueFieldprop) {
      ContractValueFieldprop(JSON.stringify(contractValue));
    }
  };

  const onChangeQuantity = (e: any) => {
    setQuantityField(e.target.value);
    setQuantityFieldisMatch(e.target.value);
    if (QuantityFieldprop) {
      QuantityFieldprop(e);
    }
    let contractValue = parseInt(e.target.value) * parseInt(rateField);
    setContractValueField(JSON.stringify(contractValue));
    if (ContractValueFieldprop) {
      ContractValueFieldprop(JSON.stringify(contractValue));
    }
  };

  const onChangeMark = (e: any) => {
    setMarkField(e.target.value);
    if (MarkFieldprop) {
      MarkFieldprop(e);
    }
  };

  const onChangeContractValue = (e: any) => {
    setContractValueField(e.target.value);
    if (ContractValueFieldprop) {
      ContractValueFieldprop(e);
    }
  };

  const onChangeProfitCenter = (e: any) => {
    setProfitCenterField(e.target.value);
    if (ProfitCenterFieldprop) {
      ProfitCenterFieldprop(e);
    }
  };

  const onChangeTermDate = (e: any) => {
    setTermDateFieldisMatch(e.target.value);
    setTermDateField(e.target.value);
    if (TermDateFieldprop) {
      TermDateFieldprop(e);
    }
  };

  const onChangeBorrowAndLoanisMatch = (e: any) => {
    setBorrowAndLoanFieldisMatch(e.target.value);
    if (borrowAndLoneFieldisMatchprop) {
      borrowAndLoneFieldisMatchprop(e);
    }
  };

  const onChangeCounterPartyisMatch = (e: any) => {
    setCounterPartyFieldisMatch(e.target.value);
    if (counterPartyFieldisMatchprop) {
      counterPartyFieldisMatchprop(e);
    }
  };

  const onChangeTickerisMatch = (e: any) => {
    setTickerFieldisMatch(e.target.value);
    if (TickerFieldisMatchprop) {
      TickerFieldisMatchprop(e);
    }
  };

  const onChangeRateisMatch = (e: any) => {
    setRateFieldisMatch(e.target.value);
    if (RateFieldisMatchprop) {
      RateFieldisMatchprop(e);
    }
    let contractValue =
      parseInt(quantityFieldisMatch) * parseInt(e.target.value);
    setContractFieldisMatch(JSON.stringify(contractValue));
    if (ContractValueFieldisMatchprop) {
      ContractValueFieldisMatchprop(JSON.stringify(contractValue));
    }
  };

  const onChangeQuantityisMatch = (e: any) => {
    setQuantityFieldisMatch(e.target.value);
    if (QuantityFieldisMatchprop) {
      QuantityFieldisMatchprop(e);
    }
    let contractValue = parseInt(e.target.value) * parseInt(rateFieldisMatch);
    setContractFieldisMatch(JSON.stringify(contractValue));
    if (ContractValueFieldisMatchprop) {
      ContractValueFieldisMatchprop(JSON.stringify(contractValue));
    }
  };

  const onChangeMarkisMatch = (e: any) => {
    setMarkFieldisMatch(e.target.value);
    if (MarkFieldisMatchprop) {
      MarkFieldisMatchprop(e);
    }
  };

  const onChangeContractValueisMatch = (e: any) => {
    setContractFieldisMatch(e.target.value);
    if (ContractValueFieldisMatchprop) {
      ContractValueFieldisMatchprop(e);
    }
  };

  const onChangeProfitCenterisMatch = (e: any) => {
    setProfitCenterFieldisMatch(e.target.value);
    if (ProfitCenterFieldisMatchprop) {
      ProfitCenterFieldisMatchprop(e);
    }
  };

  // const onChangeTermDateisMatch = (e: any) => {
  //   setTermDateFieldisMatch(e.target.value);
  //   if (TermDateFieldisMatchprop) {
  //     TermDateFieldisMatchprop(e);
  //   }
  // };

  const onSearch = (item: any) => {
    if (CounterPartyClick) {
      // if (MarkFieldisMatchprop) {
      //   MarkFieldisMatchprop(item.CPTY_ID);
      // }
      CounterPartyClick(item);
      // setCounterPartyselectedItem(item);
      if (borrowAndLoanField === "Borrow") {
        setMarkField(item.BORROW_MARK);
      } else if (borrowAndLoanField === "Loan") {
        setMarkField(item.LOAN_MARK);
      }
      // CounterPartyClickisMatch(item);
      if (MarkFieldprop) {
        MarkFieldprop(item.CPTY_ID);
      }
    }
    // setMarkField(item.CPTY_ID);
    // setMarkFieldisMatch(item.CPTY_ID);
    setCounterPartyField(item.CPTY_ID);
    setCounterPartyName(item.NAME);
    if (item != "") {
      setCpartyInputStatus(true);
    }
    console.log("counterParty Length ", item.length)
  };

  const onTickerSearchValue = (item: any) => {
    if (TickerSearch) {
      
      // console.log("tickerItem 01", item)
      TickerSearch(item);
    }
    if (TickerSearchMatch) {
      TickerSearchMatch(item);
    }
    setTickerField(item.Ticker);
    setTickerFieldisMatch(item.Ticker);
    setTickerName(item.Name);
    setTickerPrice(item.Price);
     console.log("tickerItem ", item)

    if (tickerField != "") {
      setSecurityInputStatus(false);
    }
    
  };

  const onCounterSearchisMatch = (item: any) => {
    if (CounterPartyClickisMatch) {
      CounterPartyClickisMatch(item);
      if (MarkFieldisMatchprop) {
        MarkFieldisMatchprop(item.CPTY_ID);
      }
    }
    if (borrowAndLoanFieldisMatch === "Borrow") {
      setMarkFieldisMatch(item.BORROW_MARK);
    } else if (borrowAndLoanFieldisMatch === "Loan") {
      setMarkFieldisMatch(item.LOAN_MARK);
    }
    console.log("markField item ", item)

    setCounterPartyFieldisMatch(item.NAME);
    if (item != "") {
      setCpartyBorrowInputStatus(true);
    }
  };

  const onTickerSearchisMatch = (item: any) => {
    if (TickerSearchMatch) {
      TickerSearchMatch(item.Ticker);
    }
    setTickerFieldisMatch(item.Ticker);
    if (item != "") {
      setCpartyBorrowInputStatus(true);
    }
    // setCpartyBorrowInputStatus(true)

  };

  useEffect(() => {
    if (counterPartyField === "") {
      setMarkField("");
    }
    if (counterPartyFieldisMatch === "") {
      setMarkFieldisMatch("");
    }
  }, [counterPartyField, counterPartyFieldisMatch]);

  const selectLoanBorrow = () => {
    if (checkedRadio) {
      if (borrowAndLoanField === "Borrow") {
        console.log("if loan");
        setBorrowAndLoanFieldisMatch("Loan");
      } else if (borrowAndLoanField === "Loan") {
        console.log("else loan");
        setBorrowAndLoanFieldisMatch("Borrow");
      }
    }
  };

  useEffect(() => {
    selectLoanBorrow();
  }, [borrowAndLoanField, borrowAndLoanFieldisMatch]);
  useEffect(() => {
   
     console.log("tickerField.length ", tickerField.length);
     console.log("securityInputStatus ", securityInputStatus);
    
  }, [tickerFieldisMatch]);

  return (
    <div className="SubHeaderMainDiv">
      <div className="">
        <div className="subHeaderTitle drag-handle">{title}</div>
        <div className="SubHeaderMatch">
          <input
            type="checkbox"
            name="match"
            id="match"
            className="matchRadio"
            onChange={handleClick}
            tabIndex={1}
          />
          <label htmlFor="match" className="match">
            Match
          </label>
        </div>
        <div className="subheaderChildDiv">
          <div>
            <div className="subHeaderTextFieldDiv">
              <div className="mb-3 inputFieldDiv loanfield">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label inputLabelHeight"
                >
                  Borrow/Loan
                </label>
                <select
                  className="inputBorderNone input-style select-picker"
                  value={borrowAndLoanField}
                  onChange={onChangeBorrowAndLoan}
                >
                  <option>Loan</option>
                  <option>Borrow</option>
                </select>
              </div>
              <div className="counterParty-dummyData">
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Counter Party
                  </label>
                  <input
                    className="input-style form-control inputBorderNone"
                    placeholder="1111"
                    onChange={onChangeCounterParty}
                    value={counterPartyField}
                    onFocus={() => setCpartyInputStatus(true)}
                    onBlur={() => setCpartyInputStatus(false)}
                  />
                  {counterPartyField != "" && (
                    <div className="counterParty-Name">{counterPartyName}</div>
                  )}
                  <div className="error-style">{errorCounterParty}</div>
                </div>
                {counterPartyField != "" && (
                  <div className="dropdown-dummyData">
                    <div
                      className={
                        cpartyInputStatus == true
                          ? "tablemaibdiv"
                          : "tablemaibdivhide"
                      }
                    >
                      <div className="tabelrowhade">CPTY_ID</div>
                      <div className="tabelrowhadename">NAME</div>
                      <div className="tabelrowhade">BORROW</div>
                      <div className="tabelrowhade">LOAN</div>
                    </div>

                    {list
                      .filter((item: any) => {
                        const searchTerm = counterPartyField.toLowerCase();
                        const partyName = item.NAME.toLowerCase();

                        return (
                          searchTerm &&
                          partyName.startsWith(searchTerm) &&
                          partyName !== searchTerm
                        );
                      })
                      .slice(0, 10)
                      .map((item: any, index) => (
                        <div
                          onClick={() => onSearch(item)}
                          key={index}
                          className="dropdown-row"
                        >
                          <div className="tabelrowhade">{item.CPTY_ID}</div>
                          <div className="tabelrowhadename">{item.NAME}</div>
                          <div className="tabelrowhade">{item.BORROW_MARK}</div>
                          <div className="tabelrowhade">{item.LOAN_MARK}</div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <div className="counterParty-dummyData">
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    <img src="" />
                    Ticker
                  </label>
                  <input
                    className="input-style form-control inputBorderNone"
                    placeholder="GOOG"
                    value={tickerField}
                    onChange={onChangeTicker}
                    onFocus={() => setSecurityInputStatus(true)}
                    onBlur={() => setSecurityInputStatus(false)}
                  />
                  {tickerField != "" && (
                    <div className="counterParty-Name">
                      {tickerName}(${tickerPrice})
                    </div>
                  )}
                  <div className="error-style">{errorTicker}</div>
                </div>
                {tickerField != "" && (
                  <div className="dropdown-dummyData">
                    <div
                      className={
                        securityInputStatus == true
                          ? "tablemaibdiv"
                          : "tablemaibdivhide"
                      }
                    >
                      <div className="tabelrowhade">TICKER</div>
                      <div className="tabelrowhadename">CUSIP</div>
                      <div className="tabelrowhade">NAME</div>
                      <div className="tabelrowhade">PRICE</div>
                      <div className="tabelrowhade">DATE</div>
                    </div>
                    {tickerList
                      .filter((item: any) => {
                        // console.log("item ", item)
                        const searchTerm = tickerField.toLowerCase();
                        const partyName = item.Ticker.toLowerCase();  
                        return (
                          searchTerm &&
                          partyName.startsWith(searchTerm) &&
                          partyName !== searchTerm
                        );
                      })
                      .slice(0, 10)
                      .map((item: any, index) => (
                        
                        // console.log("tickerItem 05", index),
                        <div
                          onClick={() => onTickerSearchValue(item)}
                          key={index}
                          className="dropdown-row"
                        >
                          
 
                          <div className="tabelrowhade">{item.Ticker}</div>
                          <div className="tabelrowhadename">{item.CUSIP}</div>
                          <div className="tabelrowhade">{item.Name}</div>
                          <div className="tabelrowhade">{item.Price}</div>
                          <div className="tabelrowhade">{item.Date}</div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              <div className="mb-3 inputFieldDiv">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label inputLabelHeight"
                >
                  Quantity
                </label>
                <input
                  className="form-control input-style inputBorderNone"
                  placeholder="Quantity"
                  value={quantityField}
                  onChange={onChangeQuantity}
                  type="number"
                />
                <div className="error-style">{errorQuantity}</div>
              </div>
              <div className="mb-3 inputFieldDiv">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label inputLabelHeight"
                >
                  Rate
                </label>
                <input
                  className="form-control input-style inputBorderNone"
                  placeholder="Rate"
                  value={rateField}
                  onChange={onChangeRate}
                  type="number"
                />
                <div className="error-style">{errorRate}</div>
              </div>
              <div className="mb-3 inputFieldDiv">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label inputLabelHeight"
                >
                  Mark
                </label>
                <input
                  className="form-control input-style inputBorderNone"
                  placeholder="Mark"
                  value={markField}
                  onChange={onChangeMark}
                />
                {markField === "" && (
                  <div className="error-style">{errorMark}</div>
                )}
              </div>
              <div className="mb-3 inputFieldDiv">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label inputLabelHeight"
                >
                  Contract Value
                </label>
                <input
                  className="form-control input-style inputBorderNone"
                  placeholder="Contract Value"
                  value={contractValueField}
                  // disabled={true}
                  onChange={onChangeContractValue}
                />
                <div className="error-style">{errorContractValue}</div>
              </div>
              <div className="mb-3 inputFieldDiv">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label inputLabelHeight"
                >
                  Profit Center
                </label>
                <input
                  className="form-control input-style inputBorderNone"
                  placeholder=""
                  value={profitCenterField}
                  onChange={onChangeProfitCenter}
                />
                {/* <div className="error-style">{errorProfitCenter}</div> */}
              </div>
              <div className="mb-3 inputFieldDiv">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label inputLabelHeight"
                >
                  Term Date
                </label>
                <input
                  type="date"
                  className="form-control input-style inputBorderNone"
                  value={termDateField}
                  onChange={onChangeTermDate}
                  min={disablePastDate()}
                />
                {/* <div className="error-style">{errorTermDate}</div> */}
              </div>
            </div>

            {checkedRadio == true && (
              <div className="subHeaderTextFieldDiv">
                <div className="mb-3 inputFieldDiv loanfield">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Borrow/Loan
                  </label>
                  <select
                    className="inputBorderNone input-style select-picker"
                    value={borrowAndLoanFieldisMatch}
                    onChange={onChangeBorrowAndLoanisMatch}
                  >
                    <option>Loan</option>
                    <option>Borrow</option>
                  </select>
                </div>
                <div className="counterParty-dummyData">
                  <div className="mb-3 inputFieldDiv">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label inputLabelHeight"
                    >
                      Counter Party
                    </label>
                    <input
                      className="input-style form-control inputBorderNone"
                      placeholder="1111"
                      onChange={onChangeCounterPartyisMatch}
                      value={counterPartyFieldisMatch}
                      onFocus={() => setCpartyBorrowInputStatus(true)}
                      onBlur={() => setCpartyBorrowInputStatus(false)}
                      // onKeyDown={handleKeyDown}
                    />
                    {counterPartyFieldisMatch != "" && (
                    <div className="counterParty-Name">{counterPartyName}</div>
                  )}
                    <div className="error-style">
                      {errorCounterPartyisMatch}
                    </div>
                  </div>
                  {counterPartyFieldisMatch != "" && (
                    <div className="dropdown-dummyData">
                      <div
                        className={
                          cpartyBorrowInputStatus == true
                            ? "tablemaibdivhide"
                            : "tablemaibdiv"
                        }
                      >
                        <div className="tabelrowhade">CPTY_ID</div>
                        <div className="tabelrowhadename">NAME</div>
                        <div className="tabelrowhade">BORROW</div>
                        <div className="tabelrowhade">LOAN</div>
                      </div>
                      {list
                        .filter((item: any) => {
                          const searchTerm =
                            counterPartyFieldisMatch.toLowerCase();
                          const partyName = item.NAME.toLowerCase();

                          return (
                            searchTerm &&
                            partyName.startsWith(searchTerm) &&
                            partyName !== searchTerm
                          );
                        })
                        .slice(0, 10)
                        .map((item: any, index) => (
                          <div
                            onClick={() => onCounterSearchisMatch(item)}
                            key={index}
                            className="dropdown-row"
                          >
                            <div className="tabelrowhade">{item.CPTY_ID}</div>
                            <div className="tabelrowhadename">{item.NAME}</div>
                            <div className="tabelrowhade">
                              {item.BORROW_MARK}
                            </div>
                            <div className="tabelrowhade">{item.LOAN_MARK}</div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                <div className="counterParty-dummyData">
                  <div className="mb-3 inputFieldDiv">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label inputLabelHeight"
                    >
                      <img src="" />
                      Ticker
                    </label>
                    <input
                      className="input-style form-control inputBorderNone"
                      placeholder="GOOG"
                      value={tickerFieldisMatch}
                      onChange={onChangeTickerisMatch}
                      onFocus={() => setSecurityBorrowInputStatus(true)}
                      onBlur={() => setSecurityBorrowInputStatus(false)}
                    />
                    {tickerFieldisMatch != "" && (
                    <div className="counterParty-Name">
                      {tickerName}(${tickerPrice})
                    </div>)}
                    <div className="error-style">{errorTickerisMatch}</div>
                  </div>
                  {tickerFieldisMatch != "" && (
                    <div className="dropdown-dummyData">
                      <div
                        className={
                          securityBorrowInputStatus == true
                            ? "tablemaibdiv"
                            : "tablemaibdivhide"
                        }
                      >
                        <div className="tabelrowhade">TICKER</div>
                        <div className="tabelrowhadename">CUSIP</div>
                        <div className="tabelrowhade">NAME</div>
                        <div className="tabelrowhade">PRICE</div>
                        <div className="tabelrowhade">DATE</div>
                      </div>
                      {tickerList
                        .filter((item: any) => {
                          const searchTerm = tickerFieldisMatch.toLowerCase();
                          const partyName = item.Ticker.toLowerCase();

                          return (
                            searchTerm &&
                            partyName.startsWith(searchTerm) &&
                            partyName !== searchTerm
                          );
                        })
                        .slice(0, 10)
                        .map((item: any, index) => (
                          <>
                      
                            <div
                              onClick={() => onTickerSearchisMatch(item)}
                              key={index}
                              className="dropdown-row"
                            >
                              <div className="tabelrowhade">{item.Ticker}</div>
                              <div className="tabelrowhadename">
                                {item.CUSIP}
                              </div>
                              <div className="tabelrowhade">{item.Name}</div>
                              <div className="tabelrowhade">{item.Price}</div>
                              <div className="tabelrowhade">{item.Date}</div>
                            </div>
                          </>
                        ))}
                    </div>
                  )}
                </div>
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Quantity
                  </label>
                  <input
                    className="form-control input-style inputBorderNone"
                    placeholder="Quantity"
                    value={quantityFieldisMatch}
                    onChange={onChangeQuantityisMatch}
                    type="number"
                  />
                  <div className="error-style">{errorQuantityisMatch}</div>
                </div>
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Rate
                  </label>
                  <input
                    className="form-control input-style inputBorderNone"
                    placeholder="Rate"
                    value={rateFieldisMatch}
                    onChange={onChangeRateisMatch}
                    type="number"
                  />
                  <div className="error-style">{errorRateisMatch}</div>
                </div>
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Mark
                  </label>
                  <input
                    className="form-control input-style inputBorderNone"
                    placeholder="Mark"
                    value={markFieldisMatch}
                    onChange={onChangeMarkisMatch}
                  />
                  {markFieldisMatch === "" && (
                    <div className="error-style">{errorMarkisMatch}</div>
                  )}
                </div>
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Contract Value
                  </label>
                  <input
                    className="form-control input-style inputBorderNone"
                    placeholder="Contract Value"
                    value={contractFieldisMatch}
                    // disabled={true}
                    onChange={onChangeContractValueisMatch}
                  />
                  <div className="error-style">{errorContractValueisMatch}</div>
                </div>
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Profit Center
                  </label>
                  <input
                    className="form-control input-style inputBorderNone"
                    placeholder=""
                    value={profitCenterFieldisMatch}
                    onChange={onChangeProfitCenterisMatch}
                  />
                  {/* <div className="error-style">{errorProfitCenterisMatch}</div> */}
                </div>
                <div className="mb-3 inputFieldDiv">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label inputLabelHeight"
                  >
                    Term Date
                  </label>
                  <input
                    type="date"
                    className="form-control input-style inputBorderNone"
                    value={termDateFieldisMatch}
                    onChange={onChangeTermDate}
                    min={disablePastDate()}
                  />
                  {/* {termDateField != "" && (
                    <div className="error-style">{errorTermDateisMatch}</div>
                  )} */}
                </div>
              </div>
            )}
          </div>
          <div className="textField-submitBtn">
            <button type="submit" className="SubmitButton" onClick={onClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
