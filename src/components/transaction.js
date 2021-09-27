const Transaction = ({ transaction }) => {
  return (
    <div
      className="transactionList"
      style={{
        borderRight:
          transaction.income_expense === "expense" && "4px solid red",
      }}
    >
      <p>${transaction.amount}</p>
      <p>{transaction.description}</p>
    </div>
  );
};

export default Transaction;
