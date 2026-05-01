// Quiz Game Implementation
const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Math",
    question: "What is 12 x 12?",
    choices: ["124", "144", "164"],
    answer: "144"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  }
];

// Function to get a random question from the list
function getRandomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

// Function to get a random choice for the computer
function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// Function to determine the results of the quiz
function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
// Simulate the quiz game
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Question:", randomQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));