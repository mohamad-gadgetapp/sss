import React, { useState } from "react";
import AgGrid from "../../components/AgGrid";
import data from "../../loansData.json";
import "./style.css";
import logo from "../../assets/SouthLogoLoan.png";

const Loan = () => {
  const [rowData] = useState<Array<object>>([...data.loansData]);
  const [heightAG_1] = useState(30);
  console.log("loandata ",rowData)

  const [card] = useState([
    { title: "Borrow Ticket", price: "123" },
    { title: "Borrow Ticket", price: "123" },
    { title: "Borrow Balance", price: "$869,367,559" },
    { title: "Loan Balance", price: "$869,367,559" },
    { title: "Cash - Excess/Deficit", price: "$869,367,559" },
    { title: "Imbalamce/BOx", price: "$869,367,559" },
    { title: "Total - Excess/Deficit", price: "$869,367,559" },
    { title: "Spread(bps)", price: "66.33" },
    { title: "Daily PNL", price: "$12,558" },
  ]);
  return (
    <>
      <div className="loanPage-MainDiv">
        <div className="logo-main-HeaderPart">
          <div>
            <img src={logo} className="loanLogo-img" alt="loanLogoImage"/>
          </div>
          {card.map((item, index) => {
            return (
              <div className="borrow-ticket">
                <div className="loanHeader-title">{item.title}</div>
                <div className="loanHeader-price">{item.price}</div>
              </div>
            );
          })}
        </div>
        <div className="react-grid-item-loan">
          <div className="title-subHeaderTitle"> Loan </div>
          <AgGrid rowData={rowData} height={heightAG_1} type="loan" />
        </div>
        <div className="react-grid-item-loan">
          <div className="title-subHeaderTitle"> Borrow </div>
          <AgGrid rowData={rowData} height={heightAG_1} type="loan" />
        </div>
      </div>
    </>
  );
};

export default Loan;
