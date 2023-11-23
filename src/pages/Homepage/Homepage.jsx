import React, { useState } from "react";

//components
import Button from "../../components/Button/Button";
import ExpModel from "../../components/ExpModel/ExpModel";
import ExpContainer from "../../components/ExpContainer/ExpContainer";

//imported CSS
import "./homepage.css";

const Homepage = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="home_container">
        <div className="home_title">All Expenses</div>

        <ExpContainer />

        <Button
          handleBtn={() => setOpenModel(true)}
          btnText={"Add New Expense"}
        />

        <ExpModel openModel={openModel} setOpenModel={setOpenModel} />
      </div>
    </>
  );
};

export default Homepage;
