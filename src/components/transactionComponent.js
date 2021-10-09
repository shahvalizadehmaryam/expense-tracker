import { useEffect, useState } from "react";
import Transaction from "./transaction";

const TransactionComponent = ({ transactionList ,onDelete}) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTransaction, setFilteredTransaction] =
    useState(transactionList);
  const onSearchClick = (search) => {
    if (!search || search === "") {
      setFilteredTransaction(transactionList);
      return;
    }

    const res = transactionList.filter((t) =>
      t.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTransaction(res);
    console.log(filteredTransaction);
    return filteredTransaction;
  };
  useEffect(() => {
    setFilteredTransaction(transactionList);
  }, [transactionList]);
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    onSearchClick(e.target.value);
  };

  if (!transactionList.length) return "add some transaction";
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={searchItem}
        onChange={changeHandler}
        className="search"
      />
      {filteredTransaction.length
        ? filteredTransaction.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))
        : "no item matches!"}
    </div>
  );
};

export default TransactionComponent;
