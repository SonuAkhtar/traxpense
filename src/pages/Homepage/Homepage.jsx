import React, { useState } from "react";
import ExpModel from "../../components/ExpModel/ExpModel";
import ExpCard from "../../components/ExpCard/ExpCard";
import { Link } from "react-router-dom";
import "./homepage.css";

import { testData } from "../../testData";

const Homepage = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="home_container">
        <div className="home_title">All Expenses</div>
        {testData.length > 0 ? (
          <div className="expCards_container">
            {testData.map((data) => (
              <Link
                key={data.id}
                to={`/details/${data.id}`}
                state={{ data: data }}
              >
                <ExpCard data={data} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="expense_area">No expense yet!</div>
        )}
        <div className="home_new_button">
          <button onClick={() => setOpenModel(true)}>Add New Expense</button>
        </div>
        <ExpModel openModel={openModel} setOpenModel={setOpenModel} />
      </div>
    </>
  );
};

export default Homepage;
