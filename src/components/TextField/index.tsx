import React, { FC, InputHTMLAttributes, useState } from "react";
import inputLogo from "./InputLogo.svg";
import "./style.css";
import Button from "../../components/Button";


interface ContractProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  quantity: string;
  rate: string;
  counterParty: string;
  annotation: string;
  height?: number;

}

const ContractBooking = (props : ContractProps) => {
    const [checkedRadio, setCheckedRadio] = useState("");

  const handleClick=(event: any) => { 
    setCheckedRadio(event.target.value);
  }
  return (
    <div style={{ height: `${props.height}rem` }}>
      <div>
        <div className="contractMainDiv">
        <div className="mb-3 inputFieldDiv">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label inputLabelHeight"
          >
            <img src={inputLogo} />
          </label>
          <input
            className="form-control inputBorderNone"
            placeholder="Symbol"
          />
        </div>
        <div className="mb-3 inputFieldDiv">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label inputLabelHeight"
          >
            {props.quantity}
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
            {props.rate}
          </label>
          <input className="form-control inputBorderNone" placeholder="Rate" />
        </div>
        <div className="mb-3 inputFieldDiv">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label inputLabelHeight"
          >
            {props.counterParty}
          </label>
          <input
            className="form-control inputBorderNone"
            placeholder="Counter Party"
          />
        </div>
        <div className="mb-3 inputFieldDiv">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label inputLabelHeight"
          >
            {props.annotation}
          </label>
          <input
            className="form-control inputBorderNone"
            placeholder="Annotation"
          />
        </div>
        {/* <div className="mb-3 inputFieldDiv">
          <div style={{display: "flex"}}>
            <div className="SubHeaderMatch">
              <input
                type="radio"
                name="match"
                id="match"
                className="matchRadio"
                onChange={(event) => handleClick(event)}
                value="match"
              />
              <label htmlFor="match" className="match">
                Match
              </label>
            </div>
            <div className="SubHeaderNonMatch">
              <input
                type="radio"
                name="match"
                id="nonmatch"
                className="nonMatchRadio"
                onChange={(event) => handleClick(event)}
                value="nonmatch"
                defaultChecked
              />
              <label htmlFor="nonmatch" className="nonmatch">
                Non Match
              </label>
            </div>
            <div className="SubHeaderNonMatch">
            <Button />
            </div>
          </div>
        </div> */}
        </div> 


        {/* {checkedRadio === "match" && 
          <div className="contractMainDiv">
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              <img src={inputLogo} />
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Symbol"
            />
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              {props.quantity}
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
              {props.rate}
            </label>
            <input className="form-control inputBorderNone" placeholder="Rate" />
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              {props.counterParty}
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Counter Party"
            />
          </div>
          <div className="mb-3 inputFieldDiv">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inputLabelHeight"
            >
              {props.annotation}
            </label>
            <input
              className="form-control inputBorderNone"
              placeholder="Annotation"
            />
          </div>
          </div>
        } */}
        
      </div>
    </div>
  );
};

export default ContractBooking;
