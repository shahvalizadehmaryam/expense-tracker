import { useEffect, useState } from "react";
import OverViewComponent from "./overViewComponent";
import TransactionComponent from "./transactionComponent";

const ExpenseApp = (props) => {
  const [transactionList, setTransactionList] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactionList.forEach((t) => {
      t.income_expense === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactionList]);

  const AddNewTransaction = (transaction) => {
    setTransactionList([transaction, ...transactionList]);
  };
  const deleteTransactionHandler = (id) => {
    const filteredData = transactionList.filter(
      (transaction) => transaction.id !== id
    );
    setTransactionList(filteredData);
  };
  return (
    <section className="container">
      <OverViewComponent
        expense={expense}
        income={income}
        AddNewTransaction={AddNewTransaction}
      />
      <TransactionComponent
        transactionList={transactionList}
        onDelete={deleteTransactionHandler}
      />
    </section>
  );
};

export default ExpenseApp;
