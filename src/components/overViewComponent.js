import { useState } from "react";
import NewTransaction from "./newTransaction";

const OverViewComponent = ({ expense, income, AddNewTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p className="balanceStyle">Balance: ${income - expense} </p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`btn ${isShow && "cancle"}`}
        >
          {isShow ? "cancle" : "Add"}
        </button>
      </div>
      {isShow && (
        <NewTransaction AddNewTransaction={AddNewTransaction} setIsShow={setIsShow} />
      )}
      <div className="resultSection">
        <div className="boxStyle">
          <p>Expense</p>
          <p className="incomeStyle" style={{ color: "red" }}>
            ${expense}
          </p>
        </div>
        <div className="boxStyle">
          <p>Income</p>
          <p className="incomeStyle">${income}</p>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
