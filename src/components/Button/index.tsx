import React from "react";
import "./style.css";

interface ButtonProps{
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({title, onClick}: ButtonProps) => {
  return (
    <div>
      <button type="submit" className="submit-Btn" onClick={onClick}>
        {title == null || title == "" ? "Submit" : title}
      </button>
    </div>
  );
};

export default Button;
