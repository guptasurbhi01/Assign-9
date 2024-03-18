// Question.js
import React, { useState, useEffect } from "react";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Question = ({ question, handleAnswer }) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleClick = (answer) => {
    handleAnswer(answer);
  };

  return (
    <div className="Question">
      <h2 dangerouslySetInnerHTML={{ __html: decodeHTML(question.question) }} />
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleClick(option)}>
              <span dangerouslySetInnerHTML={{ __html: decodeHTML(option) }} />
            </button>
          </li>
        ))}
      </ul>
      <p>Time Left: {timeLeft}</p>
    </div>
  );
};

export default Question;
