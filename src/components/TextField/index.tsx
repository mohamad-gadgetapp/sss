import React, { FC, InputHTMLAttributes } from "react";
import inputLogo from "./Inputlogo.svg";
import "./style.css";

interface ContractProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  quantity: string;
  rate: string;
  counterParty: string;
  annotation: string;
}

const ContractBooking: FC<ContractProps> = (props) => {
  return (
    <div>
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
