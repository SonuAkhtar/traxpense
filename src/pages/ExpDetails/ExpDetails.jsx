import React, { useState } from "react";
import "./expDetails.css";

const ExpDetails = () => {
  const [salary, setSalary] = useState([
    { name: "Salary", amount: 100000 },
    { name: "Bank", amount: 200000 },
  ]);
  const [highExp, setHighExp] = useState([
    { name: "RD", amount: 30000 },
    { name: "SIP", amount: 10000 },
    { name: "EMI", amount: 5000 },
  ]);
  const [otherExp, setOtherExp] = useState([
    { time: "1.23 pm", amount: 50 },
    { time: "1.23 pm", amount: 60 },
    { time: "1.23 pm", amount: 100 },
  ]);

  // states to manage input show
  const [showSalaryInput, setShowSalaryInput] = useState(false);
  const [showHighInput, setShowHighInput] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  // states to manage input values
  const [salaryName, setSalaryName] = useState("");
  const [salaryAmt, setSalaryAmt] = useState(null);

  const [highName, setHighName] = useState("");
  const [highAmt, setHighAmt] = useState(null);

  const [otherName, setOtherName] = useState("");
  const [otherAmt, setOtherAmt] = useState(null);

  // methods to handle when a new item is added
  const handleNewSalary = () => {
    setSalary([...salary, { name: salaryName, amount: salaryAmt }]);
    setSalaryName("");
    setSalaryAmt(null);
  };

  const handleNewHigh = () => {
    setHighExp([...highExp, { name: highName, amount: highAmt }]);
    setHighName("");
    setHighAmt(null);
  };

  const handleNewOther = () => {
    setOtherExp([...otherExp, { name: otherName, amount: otherAmt }]);
    setOtherName("");
    setOtherAmt(null);
  };

  return (
    <div className="expDetails_container">
      <div className="expDetails_wrapper">
        <div className="expTitle">November, 2023</div>

        <div className="salary">
          <div className="salary_header">
            <div className="salary_title">Salary</div>
            <button className="add_btn">Add</button>
          </div>
          <div className="salary_details">
            {salary.map((item) => (
              <div className="salary_card">
                <div className="salary_card_name">{item.name}</div>
                <div className="salary_card_amount">{item.amount}</div>
              </div>
            ))}
          </div>

          <div className="salary_inputs">
            <input
              type="text"
              placeholder="Name"
              value={salaryName}
              onChange={(e) => setSalaryName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Amount"
              value={salaryAmt}
              onChange={(e) => setSalaryAmt(e.target.value)}
            />
            <button onClick={handleNewSalary}>Add High</button>
          </div>
        </div>

        <div className="highExp">
          <div className="highExp_header">
            <div className="highExp_title">High Expenses</div>
            <button className="add_btn">Add</button>
          </div>
          <div className="highExp_details">
            {highExp.map((item) => (
              <div className="highExp_card">
                <div className="highExp_card_name">{item.name}</div>
                <div className="highExp_card_amount">{item.amount}</div>
              </div>
            ))}
          </div>

          <div className="highExp_inputs">
            <input
              type="text"
              placeholder="Name"
              value={highName}
              onChange={(e) => setHighName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Amount"
              value={highAmt}
              onChange={(e) => setHighAmt(e.target.value)}
            />
            <button onClick={handleNewHigh}>Add High</button>
          </div>
        </div>

        <div className="otherExp">
          <div className="otherExp_header">
            <div className="otherExp_title">Other Expenses</div>
            <button className="add_btn">Add</button>
          </div>
          <div className="otherExp_details">
            {otherExp.map((item) => (
              <div className="otherExp_card">
                <div className="otherExp_amount">{item.amount}</div>
                <div className="otherExp_time">{item.time}</div>
              </div>
            ))}
          </div>

          <div className="otherExp_inputs">
            <input
              type="text"
              placeholder="Name"
              value={otherName}
              onChange={(e) => setOtherName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Amount"
              value={otherAmt}
              onChange={(e) => setOtherAmt(e.target.value)}
            />
            <button onClick={handleNewOther}>Add High</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpDetails;
