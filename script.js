var startComp = document.getElementById("startComponent");
var quizComp = document.getElementById("quizComponent");
var endComp = document.getElementById("endComponent");
var highScoresComp = document.getElementById("highScores");
var startQuiz_btn = document.getElementById("startQuiz");
var time_elem = document.getElementById("time");
var score_elem = document.getElementById("score");
var finalScore = document.getElementById("finalScore");
var quiz_elem = document.getElementById("quiz");
var result = document.getElementById("result");
var resultText = document.getElementById("resultText");
var saveForm = document.getElementById("saveForm");
var initial_elem = document.getElementById("initials");
var highScoresUl = document.getElementById("highScoresUl");
var goBack_elem = document.getElementById("goBack");
var clearScores_elem = document.getElementById("clearScores");
var viewHighScore_btns = document.querySelectorAll(".view-highscore");

var highScores = [];

var gameState = {
  time: 75,
  score: 0,
  playing: false,
  timer: null,
  currentQuiz: -1,
};

// hide the intro section
// show the quiz section
// start the timer
function startQuiz() {
  startComp.style.display = "none";
  quizComp.style.display = "block";
  resetGame();
  gameState.playing = true;
  startTimer();
  updateQuiz();
}

// quiz's questions
// multiple choice answers
// the correct answer 
var quizes = [
  {
    id: 1,
    question: "Arrays in javascript can be used to store",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: 4,
  },
  {
    id: 2,
    question:
      "What is the HTML tag under which you can write the JavaScript code?",
    choices: ["<javascript>", "<js>", "<script>", "<scripted>"],
    correctAnswer: 3,
  },
  {
    id: 3,
    question:
      "Which method adds a new item to the end of an array and returns the new length?",
    choices: ["shift()", "return()", "add()", "push()"],
    correctAnswer: 4,
  },
  {
    id: 4,
    question: "Commonly used data types Do not include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: 3,
  },
  {
    id: 5,
    question:
      "String values must be enclosed within ______ when being assigned to variables?",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: 3,
  },
];


// takes in a quiz object and create HTML elements and appends it to the UI
function showQuiz(quiz) {
  let h2 = document.createElement("h2");
  h2.innerText = quiz.question;
  let choices = document.createElement("div");
  choices.classList.add("choices");
  quiz.choices.forEach((choice, index) => {
    let btn = document.createElement("button");
    btn.classList.add("btn-primary");
    btn.innerText = `${index + 1}. ${choice}`;
    btn.addEventListener("click", () => {
      // check if the correctAnswer is equal to the element's index + 1
      if (quiz.correctAnswer === index + 1) {
        gameState.score += 20;
        resultText.innerText = "Correct!";
      } else {
        resultText.innerText = "Wrong!";
        gameState.time -= 10;
      }
      showResult();
      updateQuiz();
    });
    choices.append(btn);
  });
  quiz_elem.innerHTML = "";
  quiz_elem.append(h2, choices);
}

// show Correct/Wrong message after each question
// and hide it after 2 seconds
function showResult() {
  score_elem.innerText = gameState.score;
  result.style.display = "block";
  let id = setTimeout(() => {
    result.style.display = "none";
    clearTimeout(id);
  }, 2000);
}

// show the next quiz
// if there is no next quiz, then end the game
function updateQuiz() {
  gameState.currentQuiz += 1;
  if (gameState.currentQuiz >= quizes.length) endQuiz();
  else showQuiz(quizes[gameState.currentQuiz]);
}

// resets the timer if it is running //
// hide the quiz section //
// display the final scores section //
function endQuiz() {
  clearInterval(gameState.timer);
  quizComp.style.display = "none";
  endComp.style.display = "block";
  finalScore.innerText = gameState.score;
  resetGame();
}



// reset the game state to inital values 
function resetGame() {
  gameState.time = 75;
  gameState.score = 0;
  gameState.playing = false;
  gameState.timer = null;
  gameState.currentQuiz = -1;
}

function updateTimeBoard() {
  time_elem.innerText = gameState.time;
}

// if there's already a timer running
// then clear the timer
// and restart the timer
function startTimer() {
  if (gameState.timer) {
    clearInterval(gameState.timer);
  }
  gameState.timer = setInterval(() => {
    gameState.time--;
    if (gameState.time <= 0) {
      endQuiz();
    }
    updateTimeBoard();
  }, 1000);
}


// loop through the highscores array
// create li for each highscore
// and append it to the UI
function showHighScores() {
  startComp.style.display = "none";
  quizComp.style.display = "none";
  endComp.style.display = "none";
  highScoresComp.style.display = "block";
  highScoresUl.innerHTML = "";
  highScores.forEach((score, index) => {
    let li = document.createElement("li");
    li.innerText = `${index + 1}. ${score}`;
    li.classList.add("highScores-li");
    highScoresUl.append(li);
  });
}

// append the initial and the final score to the highscores array
function saveScore(event) {
  event.preventDefault();
  var initial = initial_elem.value;
  highScores.push(`${initial} - ${finalScore.innerText}`);
  initial_elem.value = "";
  showHighScores();
}

// hide the highscores section
// show the intro section
function goBack() {
  highScoresComp.style.display = "none";
  startComp.style.display = "block";
}

// reset the highscores array
function clearScores() {
  highScores.length = 0;
  highScoresUl.innerHTML = "";
}

startQuiz_btn.addEventListener("click", startQuiz);
saveForm.addEventListener("submit", saveScore);
goBack_elem.addEventListener("click", goBack);
clearScores_elem.addEventListener("click", clearScores);
viewHighScore_btns.forEach((button) =>
  button.addEventListener("click", showHighScores)
);