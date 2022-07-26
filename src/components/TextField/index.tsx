import React, {
  InputHTMLAttributes,
  useState,
  useEffect,
  Fragment,
} from "react";
import "./style.css";
import dummyData from "../../dummyData.json";

interface ContractProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
  errorBorrow?: string;
  errorCounterParty?: string;
  errorSymbol?: string;
  errorQuantity?: string;
  errorLoanValue?: string;
  errorProfitCenter?: string;
  errorRate?: string;
  errorMark?: string;
  errorTermDate?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  borrowFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  counterPartyFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  SymbolFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  QuantityFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  LoanValueFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  ProfitCenterFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  RateFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  MarkFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  TermDateFieldprop?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onSearch?: React.DOMAttributes<HTMLDivElement>;
}

const ContractBooking = (props: ContractProps) => {
  const [symbol, setSymbol] = useState("");
  const [borrowField, setborrowField] = useState<any>("");
  const [cpartyField, setCpartyField] = useState<any>("");
  const [profitCenterField, setProfitCenterField] = useState("");
  const [rateField, setRateFieldField] = useState<any>("");
  const [quantityField, setQuantityField] = useState<any>("");
  const [loanValueField, setLoanValueField] = useState<any>("");
  const [markField, setMarkField] = useState("");
  const [termDateField, setTermDateField] = useState("");

  const [list, setList] = useState<Array<object>>(dummyData.dummyData);

  const onSearch = (searchTerm: any) => {
    setMarkField(searchTerm.LOAN_MARK);
    setCpartyField(searchTerm.NAME);
    console.log("search", searchTerm);
  };

  const onSearchSymbol = (searchTerm: any) => {
    setSymbol(searchTerm);
    console.log("search", searchTerm);
  };

  const onChangeBorrow = (e: any) => {
    setborrowField(e.target.value);
    if (props.borrowFieldprop) props.borrowFieldprop(e);
  };
  const onChangeCounterParty = (e: any) => {
    setCpartyField(e.target.value);
    if (props.counterPartyFieldprop) props.counterPartyFieldprop(e);
  };
  const onChangeSymbol = (e: any) => {
    setSymbol(e.target.value);
    if (props.SymbolFieldprop) props.SymbolFieldprop(e);
  };
  const onChangeQuantity = (e: any) => {
    setQuantityField(e.target.value);
    if (props.QuantityFieldprop) props.QuantityFieldprop(e);
  };
  const onChangeLoanValue = (e: any) => {
    setLoanValueField(e.target.value);
    if (props.LoanValueFieldprop) props.LoanValueFieldprop(e);
  };
  const onChangeProfitCenter = (e: any) => {
    setProfitCenterField(e.target.value);
    if (props.ProfitCenterFieldprop) props.ProfitCenterFieldprop(e);
  };
  const onChangeRate = (e: any) => {
    setRateFieldField(e.target.value);
    if (props.RateFieldprop) props.RateFieldprop(e);
  };
  const onChangeMark = (e: any) => {
    setMarkField(e.target.value);
    if (props.MarkFieldprop) props.MarkFieldprop(e);
  };
  const onChangeTermDate = (e: any) => {
    setTermDateField(e.target.value);
    if (props.TermDateFieldprop) props.TermDateFieldprop(e);
  };

  useEffect(() => {
    if (cpartyField === "") {
      setMarkField("");
    }
  }, [cpartyField]);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};


  return (
    <div style={{ height: `${props.height}rem` }}>
      <div>
        <div className="contractMainDiv">
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Borrow/Loan
            </label>
            <select
              className="inputBorderNone input-style select-picker"
              value={borrowField}
              onChange={onChangeBorrow}
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
                C Party
              </label>
              <input
                className="form-control inputBorderNone"
                placeholder="1111"
                onChange={onChangeCounterParty}
                value={cpartyField}
                // onKeyDown={handleKeyDown}
              />

              <span className="error-style">{props.errorCounterParty}</span>
            </div>
            <div className="dropdown-dummyData">
              {list
                .filter((item: any) => {
                  const searchTerm = cpartyField.toLowerCase();
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
                onChange={onChangeSymbol}
              />
              <span className="error-style">{props.errorSymbol}</span>
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
              value={quantityField}
              onChange={onChangeQuantity}
            />
            <span className="error-style">{props.errorQuantity}</span>
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
              value={loanValueField}
              onChange={onChangeLoanValue}
            />
            <span className="error-style">{props.errorLoanValue}</span>
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
              value={profitCenterField}
              onChange={onChangeProfitCenter}
            />
            <span className="error-style">{props.errorProfitCenter}</span>
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
              value={rateField}
              onChange={onChangeRate}
            />
            <span className="error-style">{props.errorRate}</span>
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
              value={markField}
              onChange={onChangeMark}
            />
            {markField === "" && (
              <span className="error-style">{props.errorMark}</span>
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
              value={termDateField}
              onChange={onChangeTermDate}
              min={disablePastDate()}
            />
            <span className="error-style">{props.errorTermDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractBooking;
