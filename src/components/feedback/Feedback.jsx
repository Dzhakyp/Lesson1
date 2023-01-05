import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackBtn from "./FeedbackBtn";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleFeedback = (e) => {
    this.setState((prevState) => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1,
      total: prevState.total + 1,
    }));
  };
  countTotal = () => {
    return this.state.total;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;

    const positiveFeedback = (100 / this.state.total) * this.state.good;
    return Math.floor(positiveFeedback);
  };
  render() {
    const hasFeedback = Boolean(this.state.total);
    return (
      <div>
        <h1>please leave feedback</h1>
        <FeedbackBtn handleFeedback={this.handleFeedback} />
        <h2>Statistics</h2>
        {hasFeedback && (
          <Statistics
            {...this.state}
            percentage={this.countPositiveFeedback()}
          />
        )}
      </div>
    );
  }
}
