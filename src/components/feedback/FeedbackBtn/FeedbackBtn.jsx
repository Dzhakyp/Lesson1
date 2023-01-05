import React from "react";

export default function feedbackBtn({ handleFeedback }) {
  return (
    <div>
      <button onClick={handleFeedback}>good</button>
      <button onClick={handleFeedback}>neutral</button>
      <button onClick={handleFeedback}>bad</button>
    </div>
  );
}
