import React, { useState } from "react";
import AgGrid from "../../components/AgGrid";
import data from "../../contractsData.json";
import symbolData from "../../symbol.json";
import cpartyData from "../../dummyData.json";
import "./style.css";
import Header from "../../components/Header";
import logo from "../../assets/SouthLogoLoan.png";

const Loan = () => {
  const [rowData] = useState<Array<object>>([...data.contractsData]);
  const [symbolSelect] = useState<Array<object>>([...symbolData.Sec_master]);
  const [cpartySelect] = useState<Array<object>>([...cpartyData.dummyData]);
  const [heightAG_1] = useState(25);
  console.log("loandata ", rowData);

  const [card] = useState([
    { title: "Borrow Tickets", price: "123" },
    { title: "Borrow Tickets", price: "156" },
    { title: "Borrow Balance", price: "$869,367,559" },
    { title: "Loan Balance", price: "$869,367,559" },
    { title: "Cash - Excess/Deficit", price: "$869,367,559" },
    { title: "Imbalance/BOX", price: "$869,367,559" },
    { title: "Total - Excess/Deficit", price: "$869,367,559" },
    { title: "Spread(bps)", price: "66.33" },
    { title: "Daily PNL", price: "$12,558" },
  ]);
  return (
    <div style={{ backgroundColor: "#EAECEF" }}>
      <Header valid={true} />
      <div className="loanPage-MainDiv">
        <div className="filter-loan-div">
          <div className="title-subHeaderTitle">Filter</div>
          <div className="filter-select-main-div">
            <div className="filter-select-div">
              <div className="loanHeader-title">Symbol: </div>
              <select name="" id="" className="filter-select">
                {symbolSelect.map((item: any, index) => {
                  return <option value="">{item.Ticker}</option>;
                })}
              </select>
            </div>
            <div className="filter-select-div">
              <div className="loanHeader-title">Counter Party: </div>
              <select name="" id="" className="filter-select">
                {cpartySelect.map((item: any, index) => {
                  return <option value="">{item.NAME}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="logo-main-HeaderPart">
          {/*<div>*/}
          {/*  <img src={logo} className="loanLogo-img" alt="loanLogoImage"/>*/}
          {/*</div>*/}
          {card.map((item, index) => {
            return (
              <div className="borrow-ticket" key={index}>
                <div className="loanHeader-title">{item.title}</div>
                <div className="loanHeader-price">
                  {item.title === "Imbalance/BOX" ? (
                    <span style={{ color: "#039000" }}>{item.price}</span>
                  ) : item.title === "Daily PNL" ? (
                    <span style={{ color: "#E90909" }}>{item.price}</span>
                  ) : (
                    <span style={{ color: "#1E355E" }}>{item.price}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="react-grid-item-loan">
          <div className="title-subHeaderTitle"> Loans </div>
          <AgGrid rowData={rowData} height={heightAG_1} />
        </div>
        <div className="react-grid-item-loan">
          <div className="title-subHeaderTitle"> Borrow </div>
          <AgGrid rowData={rowData} height={heightAG_1} />
        </div>
      </div>
    </div>
  );
};

export default Loan;
