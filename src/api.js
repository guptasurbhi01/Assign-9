export const fetchQuestions = async () => {
  const response = await fetch("https://opentdb.com/api.php?amount=5");
  const data = await response.json();
  console.log(data);

  return data.results.map((question) => ({
    question: question.question,
    correct_answer: question.correct_answer,
    options: [...question.incorrect_answers, question.correct_answer], 
  }));
};
