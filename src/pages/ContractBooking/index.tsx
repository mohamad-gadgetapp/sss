import React,{useEffect, useState} from "react";
import TextField from "../../components/TextField";
import "./style.css";
import Button from "../../components/Button"
import SubHeader from "../../components/SubHeader"

const ContractBooking = ()  => {
  const [checkedRadio, setCheckedRadio] = useState("");

  const handleClick_ = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedRadio(event.target.value);
  }

  return (
    <>
      <div className="textFieldDiv">
      <SubHeader title="Contract Booking" handleClick={(e)=>{handleClick_(e)}}/>
        <TextField
          name="hello"
          label="input"
          quantity="Quantity"
          rate="Rate"
          counterParty="Counter Party"
          annotation="Annotation"
        />
       {checkedRadio === "nonmatch" && <TextField
          name="hello"
          label="input"
          quantity="Quantity"
          rate="Rate"
          counterParty="Counter Party"
          annotation="Annotation"
        />}
        <Button/>
      </div>
    </>
  );
}

export default ContractBooking;
