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
        <div className="title">All Expenses</div>
        <div className="expense_area">No expense yet!</div>
        <div className="expCards_container">
          {testData.map((data) => (
            <Link key={data.id} to={`/details/${data.id}`}>
              <ExpCard data={data} />
            </Link>
          ))}
        </div>
        <div className="new_button">
          <button onClick={() => setOpenModel(true)}>Add New</button>
        </div>
      </div>

      <ExpModel openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
};

export default Homepage;
