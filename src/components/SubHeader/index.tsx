import React, { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import TextFieldonMatch from "../../components/TextFieldonMatch";
import Button from "../../components/Button";
import "./style.css";
import dummyData from "../../dummyData.json";

interface SubHeaderProps {
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  borrowAndLoneFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  counterPartyFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  TickerFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  QuantityFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  ContractValueFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
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
  ContractValueFieldisMatchprop?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
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
  const [rateField, setRateField] = useState<any>("");
  const [markField, setMarkField] = useState("");
  const [contractValueField, setContractValueField] = useState("");
  const [profitCenterField, setProfitCenterField] = useState("");
  const [termDateField, setTermDateField] = useState("");

  const [cpartyInputStatus, setCpartyInputStatus] = useState(false);
  const [cpartyBorrowInputStatus, setCpartyBorrowInputStatus] = useState(false);
  const [securityInputStatus, setSecurityInputStatus] = useState(false);
  const [securityBorrowInputStatus, setSecurityBorrowInputStatus] =
    useState(false);

  const [borrowAndLoanFieldisMatch, setBorrowAndLoanFieldisMatch] =
    useState("Borrow");
  const [counterPartyFieldisMatch, setCounterPartyFieldisMatch] = useState("");
  const [tickerFieldisMatch, setTickerFieldisMatch] = useState("");
  const [quantityFieldisMatch, setQuantityFieldisMatch] = useState("");
  const [rateFieldisMatch, setRateFieldisMatch] = useState("");
  const [markFieldisMatch, setMarkFieldisMatch] = useState("");
  const [contractFieldisMatch, setContractFieldisMatch] = useState("");
  const [profitCenterFieldisMatch, setProfitCenterFieldisMatch] = useState("");
  const [termDateFieldisMatch, setTermDateFieldisMatch] = useState("");

  const [list, setList] = useState<Array<object>>(dummyData.dummyData);

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
    if (borrowAndLoneFieldprop) {
      borrowAndLoneFieldprop(e);
    }
  };

  const onChangeCounterParty = (e: any) => {
    setCounterPartyField(e.target.value);
    if (counterPartyFieldprop) {
      counterPartyFieldprop(e);
    }
  };

  const onChangeTicker = (e: any) => {
    setTickerField(e.target.value);
    if (TickerFieldprop) {
      TickerFieldprop(e);
    }
  };

  const onChangeRate = (e: any) => {
    setRateField(e.target.value);
    if (RateFieldprop) {
      RateFieldprop(e);
    }
  };

  const onChangeQuantity = (e: any) => {
    setQuantityField(e.target.value);
    if (QuantityFieldprop) {
      QuantityFieldprop(e);
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
  };

  const onChangeQuantityisMatch = (e: any) => {
    setQuantityFieldisMatch(e.target.value);
    if (QuantityFieldisMatchprop) {
      QuantityFieldisMatchprop(e);
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

  const onChangeTermDateisMatch = (e: any) => {
    setTermDateFieldisMatch(e.target.value);
    if (TermDateFieldisMatchprop) {
      TermDateFieldisMatchprop(e);
    }
  };

  const onSearch = (item: any) => {
    setMarkField(item.CPTY_ID);
    setCounterPartyField(item.NAME);
    if(item != ""){
      setCpartyBorrowInputStatus(true);
    }
  };
  const onSearchSymbol = (item: any) => {
    // setMarkFieldisMatch(item.CPTY_ID);
    setTickerField(item.NAME);
    if(item != ""){
      setCpartyBorrowInputStatus(true);
    }
  };

  useEffect(() => {
    if (counterPartyField === "") {
      setMarkField("");
    }
  }, [counterPartyField]);

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
    console.log("kmdsaj");
  }, [borrowAndLoanField, borrowAndLoanFieldisMatch]);

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
                    // onFocus={() => setCpartyInputStatus(true)}
                    // onBlur={() => setCpartyInputStatus(false)}
                  />

                  <div className="error-style">{errorCounterParty}</div>
                </div>
                {counterPartyField != "" && (
                  <div className="dropdown-dummyData">
                    <div className={cpartyBorrowInputStatus == true ? "tablemaibdivhide" : "tablemaibdiv" }>
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
                    // onFocus={() => setSecurityInputStatus(true)}
                    // onBlur={() => setSecurityInputStatus(false)}
                  />
                  <div className="error-style">{errorTicker}</div>
                </div>
                {tickerField != "" && (
                  <div className="dropdown-dummyData">
                    <div className={cpartyBorrowInputStatus == true ? "tablemaibdivhide" : "tablemaibdiv" }>
                      <div className="tabelrowhade">CPTY_ID</div>
                      <div className="tabelrowhadename">NAME</div>
                      <div className="tabelrowhade">BORROW</div>
                      <div className="tabelrowhade">LOAN</div>
                    </div>
                    {list
                      .filter((item: any) => {
                        const searchTerm = tickerField.toLowerCase();
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
                          onClick={() => onSearchSymbol(item)}
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
                <div className="error-style">{errorProfitCenter}</div>
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
                <div className="error-style">{errorTermDate}</div>
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

                    <div className="error-style">{errorCounterPartyisMatch}</div>
                  </div>
                  {cpartyBorrowInputStatus && (
                    <div className="dropdown-dummyData">
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
                        .map((item: any) => (
                          <div
                            // onClick={() => onSearch(item)}
                            key={item.NAME}
                            className="dropdown-row"
                          >
                            {item.NAME}
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
                    <div className="error-style">{errorTickerisMatch}</div>
                  </div>
                  {securityBorrowInputStatus && (
                    <div className="dropdown-dummyData">
                      {list
                        .filter((item: any) => {
                          const searchTerm = tickerFieldisMatch.toLowerCase();
                          const partyName = item.NAME.toLowerCase();

                          return (
                            searchTerm &&
                            partyName.startsWith(searchTerm) &&
                            partyName !== searchTerm
                          );
                        })
                        .slice(0, 10)
                        .map((item: any) => (
                          <div
                            // onClick={() => onSearchSymbol(item.NAME)}
                            key={item.NAME}
                            className="dropdown-row"
                          >
                            {item.NAME}
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
                    value={quantityFieldisMatch}
                    onChange={onChangeQuantityisMatch}
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
                  <div className="error-style">{errorProfitCenterisMatch}</div>
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
                    onChange={onChangeTermDateisMatch}
                    min={disablePastDate()}
                  />
                  <div className="error-style">{errorTermDateisMatch}</div>
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
