import React, { InputHTMLAttributes, useState, useEffect } from "react";
import "./style.css";
import dummyData from "../../dummyData.json";

interface ContractProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onChangeBorrow?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onSearch?: React.DOMAttributes<HTMLDivElement>;
  handleSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ContractBooking = (props: ContractProps) => {
  const [symbol, setSymbol] = useState("");
  const [selectLoan, setSelectLoan] = useState<any>("");
  const [cpartyField, setCpartyField] = useState<any>("");
  const [profitCenterField, setProfitCenterField] = useState("");
  const [rateField, setRateFieldField] = useState<any>("");
  const [quantityField, setQuantityField] = useState<any>("");
  const [loanValueField, setLoanValueField] = useState<any>("");
  const [markField, setMarkField] = useState("");
  const [termDateField, setTermDateField] = useState("");

  const [list, setList] = useState<Array<object>>(dummyData.dummyData);

  const handleSubmit = () => {};

  const onChange = (event: any) => {
    setCpartyField(event.target.value);
  };

  const onChangeSymbol = (event: any) => {
    setSymbol(event.target.value);
  };

  const onSearch = (searchTerm: any) => {
    setCpartyField(searchTerm);
    console.log("search", searchTerm);
  };

  const onSearchSymbol = (searchTerm: any) => {
    setSymbol(searchTerm);
    console.log("search", searchTerm);
  };

  const onChangeData = (e: any) => {
    setSelectLoan(e.target.value);
    if (props.onChangeBorrow) props.onChangeBorrow(e);
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
            <input
              className="form-control inputBorderNone"
              placeholder="Borrow"
              value={selectLoan}
              onChange={onChangeData}
            />
            <span className="error-style"></span>
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
                // value={value}
                onChange={onChange}
                value={cpartyField}
                // onChange={(e) => setCpartyField(e.target.value)}
              />
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
                    onClick={() => onSearch(item.NAME)}
                    key={item.cpty_name}
                    className="dropdown-row"
                  >
                    {item.cpty_name}
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
                    key={item.cpty_name}
                    className="dropdown-row"
                  >
                    {item.cpty_name}
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
              onChange={(e) => setQuantityField(e.target.value)}
            />
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
              onChange={(e) => setLoanValueField(e.target.value)}
            />
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
              onChange={(e) => setProfitCenterField(e.target.value)}
            />
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
              onChange={(e) => setRateFieldField(e.target.value)}
            />
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
              onChange={(e) => setMarkField(e.target.value)}
            />
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
              onChange={(e) => setTermDateField(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractBooking;
