import React, { InputHTMLAttributes, useState, useEffect } from "react";
import "./style.css";
import dummyData from "../../dummyData.json";

interface ContractProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onSearch?: React.DOMAttributes<HTMLDivElement>;
}

const ContractBooking = (props: ContractProps) => {
  const [value, setValue] = useState("");
  const [symbol, setSymbol] = useState("");


  const [list, setList] = useState<Array<object>>(dummyData.dummyData);

  const onChange = (event: any) => {
    setValue(event.target.value);
  };
  
  const onChangeSymbol = (event: any) => {
    setSymbol(event.target.value);
  };

  const onSearch = (searchTerm: any) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };

  const onSearchSymbol = (searchTerm: any) => {
    setSymbol(searchTerm);
    console.log("search", searchTerm);
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
              <img src="" />
              Borrow/Loan
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Borrow"
            />
          </div>
          <div className="counterParty-dummyData">
            <div className="mb-3 inputFieldDiv">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inputLabelHeight"
              >
                <img src="" />
                Counter Party
              </label>
              <input
                className="form-control inputBorderNone"
                placeholder="1111"
                value={value}
                onChange={onChange}
              />
            </div>
            <div className="dropdown-dummyData">
              {list
                .filter((item: any) => {
                  const searchTerm = value.toLowerCase();
                  const partyName = item.cpty_name.toLowerCase();

                  return (
                    searchTerm &&
                    partyName.startsWith(searchTerm) &&
                    partyName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item: any) => (
                  <div
                    onClick={() => onSearch(item.cpty_name)}
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
                  const partyName = item.cpty_name.toLowerCase();

                  return (
                    searchTerm &&
                    partyName.startsWith(searchTerm) &&
                    partyName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item: any) => (
                  <div
                    onClick={() => onSearchSymbol(item.cpty_name)}
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
            />
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Profit Center
            </label>
            <input className="form-control inputBorderNone" placeholder="C" />
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Profit Center
            </label>
            <input className="form-control inputBorderNone" placeholder="C" />
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
            />
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              Term Date
            </label>
            <input type="date" className="form-control inputBorderNone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractBooking;
