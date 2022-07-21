import React, { useState } from "react";
import TextField from "../../components/TextField";
import TextFieldonMatch from "../../components/TextField";
import Button from "../../components/Button";
import "./style.css";

interface SubHeaderProps {
  title?: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  const [checkedRadio, setCheckedRadio] = useState(false);
  const [selectLoan, setSelectLoan] = useState<any>("");
  const handleClick = (event: any) => {
      setCheckedRadio(event.target.checked);
  };

  const handleSubmit = () => {
    document.getElementsByTagName("input")[0].focus();
  };

  const handleKeyPress = (event: any) => {
    if(event.key === 'Enter'){
      alert("Enter Key " + event.target.checked)
          setCheckedRadio(true)
     }
  };

// const func = (event:any)=>{

// }

  return (
    <div className="SubHeaderMainDiv">
      <div className="">
        <div className="subHeaderTitle drag-handle">{title}</div>
        <div className="subheaderChildDiv">
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
        
          <div>
            <TextField onChangeBorrow={(e)=>{console.log("set kdncjsa ", e.target.value)}} handleSubmit={handleSubmit}/>
              {checkedRadio == true && <TextFieldonMatch />}
          </div>
          <div className="contractBooking-Btn">
          <Button onClick={handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
