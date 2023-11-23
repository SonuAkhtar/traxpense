import React, { useState } from "react";
import "./expModel.css";

const ExpModel = ({ openModel, setOpenModel }) => {
  const [expData, setExpData] = useState({
    month: "",
    type: "",
    amount: null,
  });

  return (
    <>
      <div className={`expModel_container ${openModel ? "open" : ""}`}>
        <div className="expModel_wrapper">
          <div className="expModel_form">
            <div className="expModel_form_inputs">
              <input
                type="text"
                placeholder="Enter Month"
                value={expData.month}
              />
              <input
                type="text"
                placeholder="Enter Type"
                value={expData.type}
              />
              <input
                type="text"
                placeholder="Enter Amount"
                value={expData.amount}
              />
            </div>
            <div className="expModel_form_button">
              <button>Add Expense</button>
            </div>
          </div>
          <button
            className="expModel_close"
            onClick={() => setOpenModel(false)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ExpModel;
