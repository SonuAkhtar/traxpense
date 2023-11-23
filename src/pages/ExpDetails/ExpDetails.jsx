import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// imported CSS
import "./expDetails.css";

const ExpDetails = () => {
  const location = useLocation();
  const { data } = location.state;

  //states to store API Data
  const [salary, setSalary] = useState(data.salary);
  const [highExp, setHighExp] = useState(data.spent.highExp);
  const [otherExp, setOtherExp] = useState(data.spent.others);

  // states to show/hide inputs
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

  // method to manage other Expenses
  useEffect(() => {
    let totalAmount = 0;

    otherExp.forEach((item) => {
      totalAmount += Number(item.amount);
    });

    console.log(otherExp);

    setOtherTotal(totalAmount - otherExp[otherExp.length - 1].amount);
    setOtherLast(otherExp[otherExp.length - 1].amount);
  }, []);

  return (
    <div className="expDetails_container">
      <div className="expDetails_wrapper">
        <div className="expHeader">
          <span className="expHeader_month">{data.month}</span>
          <span className="expHeader_bar">|</span>
          <span className="expHeader_year">{data.year}</span>
        </div>

        <div className="expDetails_main">
          <section className="expSection salary">
            <div className="expSection_header">
              <div className="expSection_title">Salary</div>
              <button
                className="add_btn"
                onClick={() => setShowSalaryInput(!showSalaryInput)}
              >
                <i
                  className={`fas fa-times ${showSalaryInput ? "open" : ""}`}
                />
              </button>
            </div>
            <div className="expSection_details">
              {salary.map((item, i) => (
                <div key={i} className="details_card">
                  <div className="details_card_name">
                    {item.name}
                    <span>:</span>
                  </div>
                  <div className="details_card_amount">{item.amount}</div>
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
          </section>

          <section className="expSection highExp">
            <div className="expSection_header">
              <div className="expSection_title">High Expenses</div>
              <button
                className="add_btn"
                onClick={() => setShowHighInput(!showHighInput)}
              >
                <i className={`fas fa-times ${showHighInput ? "open" : ""}`} />
              </button>
            </div>
            <div className="expSection_details">
              {highExp.map((item, i) => (
                <div key={i} className="details_card">
                  <div className="details_card_name">
                    {item.name} <span>:</span>
                  </div>
                  <div className="details_card_amount">{item.amount}</div>
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
          </section>

          <section className="expSection otherExp">
            <div className="expSection_header">
              <div className="expSection_title">Other Expenses</div>
              <button
                className="add_btn"
                onClick={() => setShowOtherInput(!showOtherInput)}
              >
                <i className={`fas fa-times ${showOtherInput ? "open" : ""}`} />
              </button>
            </div>
            <div className="expSection_details">
              <div className="details_card">
                <div className="details_card_amount">{otherTotal}</div>
                {/* <div className="otherExp_time">{`item.time`}</div> */}
              </div>
              <span>+</span>
              <div className="details_card">
                <div className="details_card_amount">{otherLast}</div>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExpDetails;
