import React from "react";

export default function StatItem({ label, percentage }) {
  return (
    <li className="item">
      <h2 className="title">{label}</h2>
      <p className="text">{percentage}</p>
    </li>
  );
}
