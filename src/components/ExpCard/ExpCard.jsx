import React from "react";
import "./expCard.css";

const ExpCard = ({ data }) => {
  console.log(data);
  return (
    <div className="expCard_container">
      <div className="expCard_wrapper">
        <div className="expCard_title">{data.month}</div>
        <div className="expCard_time">{data.time}</div>
      </div>
    </div>
  );
};

export default ExpCard;
