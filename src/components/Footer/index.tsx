import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const onClickNavigate = (page: string) => {
    navigate(`${page}`);
  };

  return (
    <div className="stagingDiv">
      <div
        className="stagingBtn"
        onClick={() => onClickNavigate("/aboutUsPage")}
      >
        Staging
      </div>
      <div className="copyRight-footer">
        Copyright <span className="copy">&nbsp;&copy;&nbsp;</span> South Street
        Securities Inc 2018-2022
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
