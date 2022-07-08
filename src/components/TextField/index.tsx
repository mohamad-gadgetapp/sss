import React, { FC, InputHTMLAttributes } from "react";
import inputLogo from "./InputLogo.svg";
import "./style.css";

interface ContractProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  quantity: string;
  rate: string;
  counterParty: string;
  annotation: string;
  height?: number;
}

const ContractBooking: FC<ContractProps> = (props) => {
  return (
    <div style={{ height: `${props.height}rem` }}>
      <div className="contractMainDiv">
        <div className="mb-3 inputFieldDiv">
          <label htmlFor="exampleInputEmail1" className="form-label inputLabelHeight">
            <img src={inputLogo} />
          </label>
          <input
            className="form-control inputBorderNone"
          />
        </div>
        <div className="mb-3 inputFieldDiv">
          <label htmlFor="exampleInputEmail1" className="form-label inputLabelHeight">
            {props.quantity}
          </label>
          <input
            className="form-control inputBorderNone"
          />
        </div>
        <div className="mb-3 inputFieldDiv">
          <label htmlFor="exampleInputEmail1" className="form-label inputLabelHeight">
            {props.rate}
          </label>
          <input
            className="form-control inputBorderNone"
          />
        </div>
        <div className="mb-3 inputFieldDiv">
          <label htmlFor="exampleInputEmail1" className="form-label inputLabelHeight">
            {props.counterParty}
          </label>
          <input
            className="form-control inputBorderNone"
          />
        </div>
        <div className="mb-3 inputFieldDiv">
          <label htmlFor="exampleInputEmail1" className="form-label inputLabelHeight">
            {props.annotation}
          </label>
          <input
            className="form-control inputBorderNone"
          />
        </div>
      </div>
    </div>
  );
};

export default ContractBooking;
