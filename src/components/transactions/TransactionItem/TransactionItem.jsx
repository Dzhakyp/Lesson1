import React from "react";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <li className="item__list">
      <p className="text__trans">{type}</p>
      <p className="text__trans">{amount}</p>
      <p className="text__trans">{currency}</p>
    </li>
  );
}
