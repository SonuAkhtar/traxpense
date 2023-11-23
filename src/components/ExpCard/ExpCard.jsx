import React from "react";
import "./expCard.css";

const ExpCard = ({ data }) => {
  return (
    <div className="expCard_container">
      <div className="expCard_wrapper">
        <div className="expCard_title">
          <span className="expCard_month">{data.month}</span>
          <span className="bar">|</span>
          <span className="expCard_year">{data.year}</span>
        </div>
        <div className="expCard_time">{data.time}</div>
      </div>
    </div>
  );
};

export default ExpCard;
