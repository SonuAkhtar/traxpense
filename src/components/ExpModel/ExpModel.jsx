import React, { useState } from "react";
import "./expModel.css";

const ExpModel = ({ openModel, setOpenModel }) => {
  const [expData, setExpData] = useState({
    month: "",
    type: "",
    amount: 0,
  });
  return (
    <>
      <div className={`expModel_container ${openModel ? "open" : ""}`}>
        <div className="expModel_form">
          <input type="text" value={expData.month} />
          <input type="text" value={expData.type} />
          <input type="text" value={expData.amount} />
          <button>Add Expense</button>
        </div>
        <button onClick={() => setOpenModel(false)}>Close</button>
      </div>
    </>
  );
};

export default ExpModel;
