import React from "react";

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total}</p>
      <p>Positive Feedback percentage: {percentage}%</p>
    </div>
  );
}
