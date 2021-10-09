import { FaTrashAlt } from "react-icons/fa";
const Transaction = ({ transaction, onDelete }) => {
  return (
    <>
      <div
        className="transactionList"
        style={{
          borderRight:
            transaction.income_expense === "expense" && "4px solid red",
        }}
      >
        <p>{transaction.description}</p>
        <p>${transaction.amount}</p>
        <button onClick={() => onDelete(transaction.id)} className="btnTrash">
          <FaTrashAlt className="trash" />
        </button>
      </div>
    </>
  );
};

export default Transaction;
