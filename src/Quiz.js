import React, { useState, useEffect } from "react";
import Question from "./Question";
import EndScreen from "./EndScreen";
import { fetchQuestions } from "./api";
import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetchQuestions().then((data) => {
      setQuestions(data);
    });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentIndex(nextQuestion);
    } else {
      setGameOver(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="Quiz">
      {!gameOver && questions.length > 0 && (
        <Question
          question={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      )}
      {gameOver && <EndScreen score={score} restartQuiz={restartQuiz} />}
    </div>
  );
};

export default Quiz;
