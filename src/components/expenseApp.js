import { useEffect, useState } from "react";
import NewTransaction from "./newTransaction";
import OverViewComponent from "./overViewComponent";
import TransactionComponent from "./transactionComponent";

const ExpenseApp = () => {
  const [transactionList, setTransactionList] = useState([]);
  // const [isShow, setIsShow] = useState(false);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  // const showFormHandler = () => {
  //   const show = !isShow;
  //   setIsShow(show);
  // };
  const AddNewTransaction = (transaction) => {
    console.log(transaction);
    if (transaction.income_expense === "income") {
      setIncome((prevState) => prevState + parseFloat(+transaction.amount));
    } else {
      setExpense((prevState) => prevState + parseFloat(+transaction.amount));
    }

    setTransactionList([transaction, ...transactionList]);
  };
  return (
    <section className="container">
      <OverViewComponent
        expense={expense}
        income={income}
        AddNewTransaction={AddNewTransaction}
      />

      {/* Transactions */}
      <TransactionComponent transactionList={transactionList} />
      {/* {isShow && <NewTransaction onAddTransaction={AddNewTransaction} />} */}
    </section>
  );
};

export default ExpenseApp;
