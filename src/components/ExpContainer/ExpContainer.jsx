import React from "react";
import { Link } from "react-router-dom";
import { testData } from "../../testData";

// components
import ExpCard from "../../components/ExpCard/ExpCard";

// imported CSS
import "./expContainer.css";

const ExpContainer = () => {
  return (
    <div className="expContainer">
      {testData.length > 0 ? (
        <div className="expContainer_wrapper">
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
        <div className="no_expense_text">No expense yet!</div>
      )}
    </div>
  );
};

export default ExpContainer;
