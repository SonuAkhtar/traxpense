import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// imported CSS
import "./expDetails.css";

const ExpDetails = () => {
  const location = useLocation();
  const { data } = location.state;

  //states to store API Data
  const [dataSavings, setDataSavings] = useState(data.savings);
  const [dataHighExp, setDataHighExp] = useState(data.spent.highExp);
  const [dataOtherExp, setDataOtherExp] = useState(data.spent.othersExp);

  // states to show/hide inputs
  const [showSavingsInput, setShowSavingsInput] = useState(false);
  const [showHighInput, setShowHighInput] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const [showOtherAll, setShowOtherAll] = useState(false);

  // states to manage input values
  //---Savings
  const [savingsVal, setSavingsVal] = useState({
    text: "",
    amount: "",
  });

  //---Expenses types
  const [expMonthly, setExpMonthly] = useState({
    text: "",
    amount: null,
  });

  const [expHigh, setExpHigh] = useState({
    text: "",
    amount: null,
  });

  const [expOthers, setExpOthers] = useState({
    text: "",
    amount: null,
  });

  const [otherTotal, setOtherTotal] = useState(0);
  const [otherLast, setOtherLast] = useState(0);

  // methods to handle when an input value changes
  const handleInputChange = (e, type) => {
    switch (type) {
      case "savings":
        setSavingsVal((s) => ({
          ...s,
          [e.target.name]: e.target.value,
        }));
        break;

      case "spent_high":
        setExpHigh((s) => ({
          ...s,
          [e.target.name]: e.target.value,
        }));
        break;

      case "spent_others":
        setExpOthers((s) => ({
          ...s,
          [e.target.name]: e.target.value,
        }));
        break;

      default:
        break;
    }
  };

  // methods to handle when a new item is added
  const handleNewExp = (type) => {
    switch (type) {
      case "savings":
        setDataSavings([
          ...dataSavings,
          { name: savingsVal.text, amount: savingsVal.amount },
        ]);
        setSavingsVal({ text: "", amount: "" });
        break;

      case "spent_high":
        setDataHighExp([
          ...dataHighExp,
          { name: expHigh.text, amount: expHigh.amount },
        ]);
        setExpHigh({ text: "", amount: "" });
        break;

      case "spent_others":
        setDataOtherExp([
          ...dataOtherExp,
          { name: expOthers.text, amount: expOthers.amount },
        ]);
        setExpOthers({ text: "", amount: "" });
        break;

      default:
        break;
    }
  };

  // method to manage other Expenses
  useEffect(() => {
    let totalAmount = 0;

    dataOtherExp.forEach((item) => {
      totalAmount += Number(item.amount);
    });

    setOtherTotal(totalAmount - dataOtherExp[dataOtherExp.length - 1].amount);
    setOtherLast(dataOtherExp[dataOtherExp.length - 1].amount);
  }, [dataOtherExp]);

  // method to show/hide inputs
  const showHideInput = (type) => {
    switch (type) {
      case "savings":
        setShowSavingsInput(!showSavingsInput);
        setShowHighInput(false);
        setShowOtherInput(false);
        break;

      case "spent_high":
        setShowSavingsInput(false);
        setShowHighInput(!showHighInput);
        setShowOtherInput(false);
        break;

      case "spent_others":
        setShowSavingsInput(false);
        setShowHighInput(false);
        setShowOtherInput(!showOtherInput);
        break;

      default:
        break;
    }
  };

  return (
    <div className="expDetails_container">
      <div className="expDetails_wrapper">
        <div className="expHeader">
          <span className="expHeader_month">{data.month}</span>
          <span className="expHeader_bar">|</span>
          <span className="expHeader_year">{data.year}</span>
        </div>

        <div className="expDetails_main">
          {/* ----- Section Savings ----- */}
          <section className="expSection savings">
            <div className="expSection_header">
              <div className="expSection_title">Savings</div>
              <button
                className="add_btn"
                onClick={() => showHideInput("savings")}
              >
                <i
                  className={`fas fa-times ${showSavingsInput ? "open" : ""}`}
                />
              </button>
            </div>
            <div className="expSection_details">
              {dataSavings.map((item, i) => (
                <div key={i} className="details_card">
                  <div className="details_card_name">
                    {item.name}
                    <span>:</span>
                  </div>
                  <div className="details_card_amount">
                    <span className="rupee_sign">&#8377;</span>
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`expDetails_inputs_area ${
                showSavingsInput ? "show" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Name"
                className="input_name"
                name="text"
                value={savingsVal.text}
                onChange={(e) => handleInputChange(e, "savings")}
              />
              <input
                type="text"
                className="input_amount"
                placeholder="Amount"
                name="amount"
                value={savingsVal.amount}
                onChange={(e) => handleInputChange(e, "savings")}
              />
              <button onClick={() => handleNewExp("savings")}>ADD</button>
            </div>
          </section>

          {/* ----- Section Spent High ----- */}
          <section className="expSection highExp">
            <div className="expSection_header">
              <div className="expSection_title">High Expenses</div>
              <button
                className="add_btn"
                onClick={() => showHideInput("spent_high")}
              >
                <i className={`fas fa-times ${showHighInput ? "open" : ""}`} />
              </button>
            </div>
            <div className="expSection_details">
              {dataHighExp.map((item, i) => (
                <div key={i} className="details_card">
                  <div className="details_card_name">
                    {item.name} <span>:</span>
                  </div>
                  <div className="details_card_amount">
                    <span className="rupee_sign">&#8377;</span>
                    {item.amount}
                  </div>
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
                name="text"
                value={expHigh.text}
                onChange={(e) => handleInputChange(e, "spent_high")}
              />
              <input
                type="text"
                placeholder="Amount"
                className="input_amount"
                name="amount"
                value={expHigh.amount}
                onChange={(e) => handleInputChange(e, "spent_high")}
              />
              <button onClick={() => handleNewExp("spent_high")}>ADD</button>
            </div>
          </section>

          {/* ----- Section Spent Others ----- */}
          <section className="expSection otherExp">
            <div className="expSection_header">
              <div className="expSection_title">Other Expenses</div>
              <button
                className="add_btn"
                onClick={() => showHideInput("spent_others")}
              >
                <i className={`fas fa-times ${showOtherInput ? "open" : ""}`} />
              </button>
            </div>
            <div className="expSection_details">
              <div className="details_card">
                <div
                  className={`details_card_amount others ${
                    showOtherAll && "show"
                  }`}
                >
                  <span className="rupee_sign">&#8377;</span>
                  {otherTotal}
                </div>
                {/* <div className="otherExp_time">{`item.time`}</div> */}

                <div
                  className={`expOthers_all_amount ${showOtherAll && "show"}`}
                >
                  <span className="plus">=</span>
                  {dataOtherExp.map((item, i) => (
                    <div key={i}>
                      <span className="details_card_amount">{item.amount}</span>
                      <span className="plus">+</span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="plus">+</span>
              <div className="details_card">
                <div
                  onClick={() => setShowOtherAll(!showOtherAll)}
                  className="details_card_amount"
                >
                  <span className="rupee_sign">&#8377;</span>
                  {otherLast}
                </div>
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
                name="text"
                value={expOthers.text}
                onChange={(e) => handleInputChange(e, "spent_others")}
              />
              <input
                type="text"
                placeholder="Amount"
                className="input_amount"
                name="amount"
                value={expOthers.amount}
                onChange={(e) => handleInputChange(e, "spent_others")}
              />
              <button onClick={() => handleNewExp("spent_others")}>ADD</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExpDetails;
