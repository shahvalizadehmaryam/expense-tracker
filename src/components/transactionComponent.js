import Transaction from "./transaction";

const TransactionComponent = ({ transactionList }) => {
  return (
    <div>
      {transactionList.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionComponent;
