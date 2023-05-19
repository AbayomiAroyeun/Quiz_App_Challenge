const startButton = document.getElementById('start-btn');
const setNextBtn = document.getElementById('Next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;
const startPageEl = document.getElementById('start-page');
let timerElement = document.getElementById('timer');
let timerInterval;
const questionTime = 10; // Time per question in seconds
let score = 0;

startButton.addEventListener('click', startTheQuiz);
setNextBtn.addEventListener('click', setNextQuestion);

function startTheQuiz() {
  console.log('started');
  startPageEl.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  setNextBtn.classList.remove('hide');
  // shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  console.log(questions[currentQuestionIndex]);
  showQuestion(questions[currentQuestionIndex]);
  startTimer();
}

function setNextQuestion() {
  currentQuestionIndex++;
  clearInterval(timerInterval); // Clear previous timer
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
  } else {
    // Quiz completed
    endQuiz();
  }
}

function showQuestion(question) {
  console.log(question);
  questionElement.innerText = question.Questions;
  document.getElementById('choice1').textContent = question.Answer[0].text;
  document.getElementById('choice2').textContent = question.Answer[1].text;
  document.getElementById('choice3').textContent = question.Answer[2].text;
  document.getElementById('choice4').textContent = question.Answer[3].text;


  // Attach event listeners to answer buttons
  document.getElementById('choice1').addEventListener('click', function () {
    selectAnswer(question.Answer[0].correct);
  });
  document.getElementById('choice2').addEventListener('click', function () {
    selectAnswer(question.Answer[1].correct);
  });
  document.getElementById('choice3').addEventListener('click', function () {
    selectAnswer(question.Answer[2].correct);
  });
  document.getElementById('choice4').addEventListener('click', function () {
    selectAnswer(question.Answer[3].correct);
  });
}

function startTimer() {
  let time = questionTime;
  timerElement.textContent = time;

  timerInterval = setInterval(() => {
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
      // Time's up, move to next question
      clearInterval(timerInterval);
      setNextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerElement.textContent = '';
}

function endQuiz() {
  // Hide question container and next button
  questionContainerElement.classList.add('hide');
  setNextBtn.classList.add('hide');

  // Calculate final score
  const finalScore = (score / questions.length) * 100;

   // Create an element to display the final score
   const scoreElement = document.createElement('p');
   scoreElement.textContent = `Your final score: ${finalScore.toFixed(2)}%`;
 
   // Append the score element to the question container
   questionContainerElement.appendChild(scoreElement);
}

const questions = [
  {
    Questions: 'Commonly used data that do not include?',
    Answer: [
      { text: '1.alerts', correct: true },
      { text: '2.strings', correct: false },
      { text: '3.booleans', correct: false },
      { text: '4.numbers', correct: false },
    ],
  },
  {
    Questions: 'The condition in an if / else statement is enclosed with?',
    Answer: [
      { text: '1.quotes', correct: false },
      { text: '2.curly brackets', correct: false },
      { text: '3.parenthesis', correct: true },
      { text: '4.square brackets', correct: false },
    ],
  },
  {
    Questions:
      'A very useful tool used during development and debugging for printing content to the debugger is?',
    Answer: [
      { text: '1.terminal/bash', correct: false },
      { text: '2.console.log', correct: true },
      { text: '3.javascript', correct: false },
      { text: '4.for loops', correct: false },
    ],
  },
  {
    Questions: 'Arrays in Javascript can be used to store?',
    Answer: [
      { text: '1.numbers and strings', correct: false },
      { text: '2.other arrays', correct: false },
      { text: '3.booleans', correct: true },
      { text: '4.all of the above', correct: false },
    ],
  },
];

document.getElementById('answer-buttons').addEventListener('click', selectAnswer);