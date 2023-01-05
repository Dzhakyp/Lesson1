import React from "react";
import stat from "../../../stat.json";
import StatItem from "../StatItem";

export default function StatList() {
  return (
    <ul className="list">
      {stat.map((item) => (
        <StatItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
