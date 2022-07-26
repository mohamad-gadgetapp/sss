import React, { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import TextFieldonMatch from "../../components/TextFieldonMatch";
import Button from "../../components/Button";
import "./style.css";

interface SubHeaderProps {
  title?: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  const [checkedRadio, setCheckedRadio] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [selectBorrow, setSelectBorrow] = useState<any>("Borrow");
  const [cpartyField, setCpartyField] = useState<any>("");
  const [profitCenterField, setProfitCenterField] = useState("");
  const [rateField, setRateFieldField] = useState<any>("");
  const [quantityField, setQuantityField] = useState<any>("");
  const [loanValueField, setLoanValueField] = useState<any>("");
  const [markField, setMarkField] = useState("");
  const [termDateField, setTermDateField] = useState("");

  const [errorBorrow, setErrorBorrow] = useState("");
  const [errorCounterParty, setErrorCounterParty] = useState("");
  const [errorSymbol, setErrorSymbol] = useState("");
  const [errorQuantity, setErrorQuantity] = useState("");
  const [errorLoanValue, setErrorLoanValue] = useState("");
  const [errorProfitCenter, setErrorProfitCenter] = useState("");
  const [errorRate, setErrorRate] = useState("");
  const [errorMark, setErrorMark] = useState("");
  const [errorTermDate, setErrorTermDate] = useState("");

  const [symbolonMatch, setSymbolonMatch] = useState("");
  const [selectBorrowonMatch, setSelectBorrowonMatch] = useState<any>("Loan");
  const [cpartyFieldonMatch, setCpartyFieldonMatch] = useState<any>("");
  const [profitCenterFieldonMatch, setProfitCenterFieldonMatch] = useState("");
  const [rateFieldonMatch, setRateFieldFieldonMatch] = useState<any>("");
  const [quantityFieldonMatch, setQuantityFieldonMatch] = useState<any>("");
  const [loanValueFieldonMatch, setLoanValueFieldonMatch] = useState<any>("");
  const [markFieldonMatch, setMarkFieldonMatch] = useState("");
  const [termDateFieldonMatch, setTermDateFieldonMatch] = useState("");

  const [errorBorrowonMatch, setErrorBorrowonMatch] = useState("");
  const [errorCounterPartyonMatch, setErrorCounterPartyonMatch] = useState("");
  const [errorSymbolonMatch, setErrorSymbolonMatch] = useState("");
  const [errorQuantityonMatch, setErrorQuantityonMatch] = useState("");
  const [errorLoanValueonMatch, setErrorLoanValueonMatch] = useState("");
  const [errorProfitCenteronMatch, setErrorProfitCenteronMatch] = useState("");
  const [errorRateonMatch, setErrorRateonMatch] = useState("");
  const [errorMarkonMatch, setErrorMarkonMatch] = useState("");
  const [errorTermDateonMatch, setErrorTermDateonMatch] = useState("");

  const handleClick = (event: any) => {
    setCheckedRadio(event.target.checked);
  };



  const handleSubmit = () => {
    document.getElementsByTagName("input")[0].focus();
    let hasError = true;
    if (selectBorrow === "") {
      setErrorBorrow("Enter the field");
      hasError = false;
    } else {
      setErrorBorrow("");
    }
    if (cpartyField === "") {
      setErrorCounterParty("Enter the field");
      hasError = false;
    } else {
      setErrorCounterParty("");
    }
    if (profitCenterField === "") {
      setErrorProfitCenter("Enter the field");
      hasError = false;
    } else {
      setErrorProfitCenter("");
    }
    if (rateField === "") {
      setErrorRate("Enter the field");
      hasError = false;
    } else {
      setErrorRate("");
    }
    if (quantityField === "") {
      setErrorQuantity("Enter the field");
      hasError = false;
    } else {
      setErrorQuantity("");
    }
    if (symbol === "") {
      setErrorSymbol("Enter the field");
      hasError = false;
    } else {
      setErrorSymbol("");
    }
    if (loanValueField === "") {
      setErrorLoanValue("Enter the field");
      hasError = false;
    } else {
      setErrorLoanValue("");
    }
    if (markField === "") {
      setErrorMark("Enter the field");
      hasError = false;
    } else {
      setErrorMark("");
    }
    if (termDateField === "") {
      setErrorTermDate("Enter the field");
      hasError = false;
    } else {
      setErrorTermDate("");
    }

    if (checkedRadio == true) {
      let hasErroronMatch = true;

      if (selectBorrowonMatch === "") {
        setErrorBorrowonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorBorrowonMatch("");
      }
      if (cpartyFieldonMatch === "") {
        setErrorCounterPartyonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorCounterPartyonMatch("");
      }
      if (profitCenterFieldonMatch === "") {
        setErrorProfitCenteronMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorProfitCenteronMatch("");
      }
      if (rateFieldonMatch === "") {
        setErrorRateonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorRateonMatch("");
      }
      if (quantityFieldonMatch === "") {
        setErrorQuantityonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorQuantityonMatch("");
      }
      if (symbolonMatch === "") {
        setErrorSymbolonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorSymbolonMatch("");
      }
      if (loanValueFieldonMatch === "") {
        setErrorLoanValueonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorLoanValueonMatch("");
      }
      if (markFieldonMatch === "") {
        setErrorMarkonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorMarkonMatch("");
      }
      if (termDateFieldonMatch === "") {
        setErrorTermDateonMatch("Enter the field");
        hasErroronMatch = false;
      } else {
        setErrorTermDateonMatch("");
      }
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      alert("Enter Key " + event.target.checked);
      setCheckedRadio(true);
    }
  };

  // const func = (event:any)=>{

  // }

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
              onKeyPress={handleKeyPress}
            />
            <label htmlFor="match" className="match">
              Match
            </label>
          </div>
        <div className="subheaderChildDiv">

          <div>
            <TextField
              borrowFieldprop={(e) => {
                setSelectBorrow(e.target.value);
              }}
              counterPartyFieldprop={(e) => {
                setCpartyField(e.target.value);
              }}
              SymbolFieldprop={(e) => {
                setSymbol(e.target.value);
              }}
              QuantityFieldprop={(e) => {
                setQuantityField(e.target.value);
              }}
              LoanValueFieldprop={(e) => {
                setLoanValueField(e.target.value);
              }}
              ProfitCenterFieldprop={(e) => {
                setProfitCenterField(e.target.value);
              }}
              RateFieldprop={(e) => {
                setRateFieldField(e.target.value);
              }}
              MarkFieldprop={(e) => {
                setMarkField(e.target.value);
              }}
              TermDateFieldprop={(e) => {
                setTermDateField(e.target.value);
              }}
              errorBorrow={errorBorrow}
              errorCounterParty={errorCounterParty}
              errorSymbol={errorSymbol}
              errorQuantity={errorQuantity}
              errorLoanValue={errorLoanValue}
              errorProfitCenter={errorProfitCenter}
              errorRate={errorRate}
              errorMark={errorMark}
              errorTermDate={errorTermDate}
            />
            {checkedRadio == true && (
              <TextFieldonMatch
                borrowFieldproponMatch={(e) => {
                  setSelectBorrowonMatch(e.target.value);
                }}
                counterPartyFieldproponMatch={(e) => {
                  setCpartyFieldonMatch(e.target.value);
                }}
                SymbolFieldproponMatch={(e) => {
                  setSymbolonMatch(e.target.value);
                }}
                QuantityFieldproponMatch={(e) => {
                  setQuantityFieldonMatch(e.target.value);
                }}
                LoanValueFieldproponMatch={(e) => {
                  setLoanValueFieldonMatch(e.target.value);
                }}
                ProfitCenterFieldproponMatch={(e) => {
                  setProfitCenterFieldonMatch(e.target.value);
                }}
                RateFieldproponMatch={(e) => {
                  setRateFieldFieldonMatch(e.target.value);
                }}
                // MarkFieldproponMatch={(e) => {
                //   setMarkFieldonMatch(e.target.value);
                // }}
                TermDateFieldproponMatch={(e) => {
                  setTermDateFieldonMatch(e.target.value);
                }}

                errorBorrowonMatch={errorBorrowonMatch}
                errorCounterPartyonMatch={errorCounterPartyonMatch}
                errorSymbolonMatch={errorSymbolonMatch}
                errorQuantityonMatch={errorQuantityonMatch}
                errorLoanValueonMatch={errorLoanValueonMatch}
                errorProfitCenteronMatch={errorProfitCenteronMatch}
                errorRateonMatch={errorRateonMatch}
                errorMarkonMatch={errorMarkonMatch}
                errorTermDateonMatch={errorTermDateonMatch}
              />
            )}
          </div>
          <div className="contractBooking-Btn">
            <Button onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
