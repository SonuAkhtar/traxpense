import React from "react";

// imported CSS
import "./button.css";

const Button = ({ handleBtn, btnText }) => {
  return (
    <div className="button_container">
      <button onClick={handleBtn}>{btnText}</button>
    </div>
  );
};

export default Button;
