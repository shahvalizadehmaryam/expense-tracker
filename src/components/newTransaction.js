import { useState } from "react/cjs/react.development";

const NewTransaction = ({ AddNewTransaction, setIsShow }) => {
  const [transaction, setTransaction] = useState({
    amount: "",
    description: "",
    income_expense: "",
  });
  const inputChangeHandler = (evt) => {
    setTransaction({
      ...transaction,
      [evt.target.name]: evt.target.value,
      id: Math.floor(Math.random() * 100),
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    AddNewTransaction(transaction);
    setIsShow(false);
    setTransaction({
      amount: 0,
      description: "",
      income_expense: "expense",
    });
  };
  return (
    <>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={transaction.amount}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={transaction.description}
          onChange={inputChangeHandler}
          required
        />
        <div onChange={inputChangeHandler} className="radioBox">
          <input
            type="radio"
            id="expense"
            value="expense"
            name="income_expense"
            required
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            id="income"
            value="income"
            name="income_expense"
            required
          />
          <label htmlFor="income">Income</label>
        </div>

        <button type="submit" className="btn primary">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default NewTransaction;
