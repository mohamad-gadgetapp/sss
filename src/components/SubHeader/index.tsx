import React, { useState } from 'react'
import "./style.css";

interface SubHeaderProps {
  title?: string;
  value?: string | 'match';
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SubHeader = ({ title, handleClick }: SubHeaderProps) => {
  const [selected, setSelected] = useState("yes");

  return (
    <div className="SubHeaderMainDiv ">
      <div className="drag-handle">
        <div className="subHeaderTitle">{title}</div>
      </div>
      <div className="matchMainDiv">
        <div className="SubHeaderMatch">
          <input
            type="radio"
            name="match"
            id="match"
            className="matchRadio"
            onChange={handleClick}
            value="match"
            defaultChecked
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
          />
          <label htmlFor="nonmatch" className="nonmatch">
            Non Match
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
