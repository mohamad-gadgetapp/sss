// import React from 'react'
import "./style.css";

interface SubHeaderProps {
  title?: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <div className="SubHeaderMainDiv">
      <div className="subHeaderTitle">{title}</div>
      <div className="matchMainDiv">
        <div className="SubHeaderMatch">
          <input type="radio" name="match" id="match" className="match"/>
          <label htmlFor="match">Match</label>
        </div>
        <div className="SubHeaderNonMatch">
          <input type="radio" name="match" id="nonmatch" className="nonmatch"/>
          <label htmlFor="nonmatch">Non Match</label>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
