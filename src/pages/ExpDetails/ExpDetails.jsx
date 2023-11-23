import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./expDetails.css";

const ExpDetails = () => {
  const location = useLocation();
  const { data } = location.state;

  const [salary, setSalary] = useState(data.salary);
  const [highExp, setHighExp] = useState(data.spent.highExp);
  const [otherExp, setOtherExp] = useState(data.spent.others);

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
  const [otherTotal, setOtherTotal] = useState(0);
  const [otherLast, setOtherLast] = useState(0);

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

    let totalAmount = 0;

    otherExp.forEach((item) => {
      totalAmount += Number(item.amount);
    });

    setOtherTotal(totalAmount);
    setOtherLast(otherAmt);
  };

  return (
    <div className="expDetails_container">
      <div className="expDetails_wrapper">
        <div className="expTitle">
          <span className="expTitle_month">{data.month}</span>
          <span className="expTitle_bar">|</span>
          <span className="expTitle_year">{data.year}</span>
        </div>

        <div className="expDetails_main">
          <div className="salary">
            <div className="salary_header">
              <div className="salary_title">Salary</div>
              <button
                className="add_btn"
                onClick={() => setShowSalaryInput(!showSalaryInput)}
              >
                <i
                  className={`fas fa-times ${showSalaryInput ? "open" : ""}`}
                />
              </button>
            </div>
            <div className="salary_details">
              {salary.map((item, i) => (
                <div key={i} className="salary_card">
                  <div className="salary_card_name">
                    {item.name}
                    <span>:</span>
                  </div>
                  <div className="salary_card_amount">{item.amount}</div>
                </div>
              ))}
            </div>
            <div
              className={`expDetails_inputs_area ${
                showSalaryInput ? "show" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Name"
                className="input_name"
                value={salaryName}
                onChange={(e) => setSalaryName(e.target.value)}
              />
              <input
                type="text"
                className="input_amount"
                placeholder="Amount"
                value={salaryAmt}
                onChange={(e) => setSalaryAmt(e.target.value)}
              />
              <button onClick={handleNewSalary}>ADD</button>
            </div>
          </div>

          <div className="highExp">
            <div className="highExp_header">
              <div className="highExp_title">High Expenses</div>
              <button
                className="add_btn"
                onClick={() => setShowHighInput(!showHighInput)}
              >
                <i className={`fas fa-times ${showHighInput ? "open" : ""}`} />
              </button>
            </div>
            <div className="highExp_details">
              {highExp.map((item, i) => (
                <div key={i} className="highExp_card">
                  <div className="highExp_card_name">
                    {item.name} <span>:</span>
                  </div>
                  <div className="highExp_card_amount">{item.amount}</div>
                </div>
              ))}
            </div>

            <div
              className={`expDetails_inputs_area ${
                showHighInput ? "show" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Name"
                className="input_name"
                value={highName}
                onChange={(e) => setHighName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount"
                className="input_amount"
                value={highAmt}
                onChange={(e) => setHighAmt(e.target.value)}
              />
              <button onClick={handleNewHigh}>ADD</button>
            </div>
          </div>

          <div className="otherExp">
            <div className="otherExp_header">
              <div className="otherExp_title">Other Expenses</div>
              <button
                className="add_btn"
                onClick={() => setShowOtherInput(!showOtherInput)}
              >
                <i className={`fas fa-times ${showOtherInput ? "open" : ""}`} />
              </button>
            </div>
            <div className="otherExp_details">
              <div className="otherExp_card">
                <div className="otherExp_amount">{otherTotal}</div>
                {/* <div className="otherExp_time">{`item.time`}</div> */}
              </div>
              <span>+</span>
              <div className="otherExp_card">
                <div className="otherExp_amount">{otherLast}</div>
                {/* <div className="otherExp_time">{`item.time`}</div> */}
              </div>
            </div>

            <div
              className={`expDetails_inputs_area ${
                showOtherInput ? "show" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Name"
                className="input_name"
                value={otherName}
                onChange={(e) => setOtherName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount"
                className="input_amount"
                value={otherAmt}
                onChange={(e) => setOtherAmt(e.target.value)}
              />
              <button onClick={handleNewOther}>ADD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpDetails;
