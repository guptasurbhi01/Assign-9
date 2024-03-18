import React from "react";
import "./EndScreen.css";

const EndScreen = ({ score, restartQuiz }) => {
  return (
    <div className="EndScreen">
      <h2>Quiz Ended!</h2>
      <p>Your score: {score}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
