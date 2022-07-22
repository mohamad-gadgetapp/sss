import React, { InputHTMLAttributes, useState, useEffect } from "react";
import "./style.css";
import dummyData from "../../dummyData.json";

interface ContractProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
  errorBorrowonMatch?: string;
  errorCounterPartyonMatch?: string;
  errorSymbolonMatch?: string;
  errorQuantityonMatch?: string;
  errorLoanValueonMatch?: string;
  errorProfitCenteronMatch?: string;
  errorRateonMatch?: string;
  errorMarkonMatch?: string;
  errorTermDateonMatch?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  borrowFieldproponMatch?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  counterPartyFieldproponMatch?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  SymbolFieldproponMatch?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  QuantityFieldproponMatch?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  LoanValueFieldproponMatch?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  ProfitCenterFieldproponMatch?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  RateFieldproponMatch?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  // MarkFieldproponMatch?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  TermDateFieldproponMatch?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => any;
  onSearch?: React.DOMAttributes<HTMLDivElement>;
}

const ContractBooking = (props: ContractProps) => {
  const [symbol, setSymbolonMatch] = useState("");
  const [borrowFieldonMatch, setborrowFieldonMatch] = useState<any>("");
  const [cpartyFieldonMatch, setCpartyFieldonMatch] = useState<any>("");
  const [profitCenterFieldonMatch, setProfitCenterFieldonMatch] = useState("");
  const [rateFieldonMatch, setRateFieldFieldonMatch] = useState<any>("");
  const [quantityFieldonMatch, setQuantityFieldonMatch] = useState<any>("");
  const [loanValueFieldonMatch, setLoanValueFieldonMatch] = useState<any>("");
  const [markFieldonMatch, setMarkFieldonMatch] = useState("");
  const [termDateFieldonMatch, setTermDateFieldonMatch] = useState("");

  const [list, setList] = useState<Array<object>>(dummyData.dummyData);

  // const onChange = (event: any) => {
  //   setCpartyFieldonMatch(event.target.value);
  // };

  // const onChangeSymbol = (event: any) => {
  //   setSymbolonMatch(event.target.value);
  // };

  const onSearch = (searchTerm: any) => {
    setMarkFieldonMatch(searchTerm.LOAN_MARK);
    setCpartyFieldonMatch(searchTerm.NAME);
    console.log("search", searchTerm);
  };

  const onSearchSymbol = (searchTerm: any) => {
    setSymbolonMatch(searchTerm);
    console.log("search", searchTerm);
  };

  const onChangeBorrowonMatch = (e: any) => {
    setborrowFieldonMatch(e.target.value);
    if (props.borrowFieldproponMatch) {
      props.borrowFieldproponMatch(e);
    }
  };
  const onChangeCounterPartyonMatch = (e: any) => {
    setCpartyFieldonMatch(e.target.value);
    if (props.counterPartyFieldproponMatch)
      props.counterPartyFieldproponMatch(e);
  };
  const onChangeSymbolonMatch = (e: any) => {
    setSymbolonMatch(e.target.value);
    if (props.SymbolFieldproponMatch) props.SymbolFieldproponMatch(e);
  };
  const onChangeQuantityonMatch = (e: any) => {
    setQuantityFieldonMatch(e.target.value);
    if (props.QuantityFieldproponMatch) props.QuantityFieldproponMatch(e);
  };
  const onChangeLoanValueonMatch = (e: any) => {
    setLoanValueFieldonMatch(e.target.value);
    if (props.LoanValueFieldproponMatch) props.LoanValueFieldproponMatch(e);
  };
  const onChangeProfitCenteronMatch = (e: any) => {
    setProfitCenterFieldonMatch(e.target.value);
    if (props.ProfitCenterFieldproponMatch)
      props.ProfitCenterFieldproponMatch(e);
  };
  const onChangeRateonMatch = (e: any) => {
    setRateFieldFieldonMatch(e.target.value);
    if (props.RateFieldproponMatch) props.RateFieldproponMatch(e);
  };
  // const onChangeMarkonMatch = (e: any) => {
  //   setMarkFieldonMatch(e.target.value);
  //   if (props.MarkFieldproponMatch) props.MarkFieldproponMatch(e);
  // };
  const onChangeTermDateonMatch = (e: any) => {
    setTermDateFieldonMatch(e.target.value);
    if (props.TermDateFieldproponMatch) props.TermDateFieldproponMatch(e);
  };

  useEffect(() => {
    if (cpartyFieldonMatch === "") {
      setMarkFieldonMatch("");
    }
  }, [cpartyFieldonMatch]);

  return (
    <div style={{ height: `${props.height}rem` }}>
      <div>
        <div className="contractMainDiv">
          {/*<div className="mb-3 inputFieldDiv">*/}
          {/*  <label*/}
          {/*    htmlFor="exampleInputEmail1"*/}
          {/*    className="form-label inputLabelHeight"*/}
          {/*  >*/}
          {/*    Borrow/Loan*/}
          {/*  </label>*/}
          {/*  <input*/}
          {/*    className="form-control inputBorderNone"*/}
          {/*    placeholder="Borrow"*/}
          {/*    value={borrowFieldonMatch}*/}
          {/*    onChange={onChangeBorrowonMatch}*/}
          {/*  />*/}
          {/*  <span className="error-style">{props.errorBorrowonMatch}</span>*/}
          {/*</div>*/}
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Borrow/Loan
            </label>
            <select
              className="inputBorderNone input-style select-picker"
              value={borrowFieldonMatch}
              onChange={onChangeBorrowonMatch}
            >
              <option>Borrow</option>
              <option>Loan</option>
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
                className="form-control inputBorderNone"
                placeholder="1111"
                onChange={onChangeCounterPartyonMatch}
                value={cpartyFieldonMatch}
              />
              <span className="error-style">
                {props.errorCounterPartyonMatch}
              </span>
            </div>
            <div className="dropdown-dummyData">
              {list
                .filter((item: any) => {
                  const searchTerm = cpartyFieldonMatch.toLowerCase();
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
                    onClick={() => onSearch(item)}
                    key={item.NAME}
                    className="dropdown-row"
                  >
                    {item.NAME}
                  </div>
                ))}
            </div>
          </div>

          <div className="counterParty-dummyData">
            <div className="mb-3 inputFieldDiv">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inputLabelHeight"
              >
                <img src="" />
                Symbol
              </label>
              <input
                className="form-control inputBorderNone"
                placeholder="Symbol"
                value={symbol}
                onChange={onChangeSymbolonMatch}
              />
              <span className="error-style">{props.errorSymbolonMatch}</span>
            </div>
            <div className="dropdown-dummyData">
              {list
                .filter((item: any) => {
                  const searchTerm = symbol.toLowerCase();
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
                    onClick={() => onSearchSymbol(item.NAME)}
                    key={item.NAME}
                    className="dropdown-row"
                  >
                    {item.NAME}
                  </div>
                ))}
            </div>
          </div>

          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Quantity
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Quantity"
              value={quantityFieldonMatch}
              onChange={onChangeQuantityonMatch}
            />
            <span className="error-style">{props.errorQuantityonMatch}</span>
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Loan Value
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Loan Value"
              value={loanValueFieldonMatch}
              onChange={onChangeLoanValueonMatch}
            />
            <span className="error-style">{props.errorLoanValueonMatch}</span>
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Profit Center
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="C"
              value={profitCenterFieldonMatch}
              onChange={onChangeProfitCenteronMatch}
            />
            <span className="error-style">
              {props.errorProfitCenteronMatch}
            </span>
          </div>

          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Rate
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Rate"
              value={rateFieldonMatch}
              onChange={onChangeRateonMatch}
            />
            <span className="error-style">{props.errorRateonMatch}</span>
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Mark
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Mark"
              value={markFieldonMatch}
              // onChange={onChangeMarkonMatch}
            />
            {markFieldonMatch === "" && (
              <span className="error-style">{props.errorMarkonMatch}</span>
            )}
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
              className="form-control inputBorderNone"
              value={termDateFieldonMatch}
              onChange={onChangeTermDateonMatch}
            />
            <span className="error-style">{props.errorTermDateonMatch}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractBooking;
