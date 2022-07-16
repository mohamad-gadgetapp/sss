import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import "./style.css";

interface SubHeaderProps {
  title?: string;
  value?: string | "match";
}

const SubHeader = ({ title }: SubHeaderProps) => {
  const [selected, setSelected] = useState("yes");
  const [checkedRadio, setCheckedRadio] = useState("");

  const handleClick = (event: any) => {
    setCheckedRadio(event.target.value);
  };

  return (
    <div className="SubHeaderMainDiv">
      <div className="">
        <div className="subHeaderTitle drag-handle">{title}</div>

        <div className="subheaderChildDiv">
          <div>
            <TextField
              name="hello"
              label="input"
              quantity="Quantity"
              rate="Rate"
              counterParty="Counter Party"
              annotation="Annotation"
            />
          
          {checkedRadio === "match" && (
          <TextField
            name="hello"
            label="input"
            quantity="Quantity"
            rate="Rate"
            counterParty="Counter Party"
            annotation="Annotation"
          />
        )}
        </div>
          <div>
            <div className="matchMainDiv">
              <div className="SubHeaderMatch">
                <input
                  type="radio"
                  name="match"
                  id="match"
                  className="matchRadio"
                  onChange={handleClick}
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
                  onChange={handleClick}
                  value="nonmatch"
                  defaultChecked
                />
                <label htmlFor="nonmatch" className="nonmatch">
                  Non Match
                </label>
              </div>
              <Button/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SubHeader;
