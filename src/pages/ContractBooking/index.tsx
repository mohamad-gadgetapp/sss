import React from 'react'
import TextField from "../../components/TextField/index"
import "./style.css"

function ContractBooking() {
  return (
    <div className='textFieldDiv'>
        <TextField name="hello" label="input" quantity='Quantity' rate='Rate' counterParty='Counter Party' annotation='Annotation'/>
    </div>
  )
}

export default ContractBooking