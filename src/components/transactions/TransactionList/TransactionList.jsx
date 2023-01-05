import React from "react";
import transactions from "../../../transaction.json";
import TransactionItem from "../TransactionItem";

export default function StatList() {
  return (
    <ul className="list__trans">
      {transactions.map((item) => (
        <TransactionItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
