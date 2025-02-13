const textAreaEl = document.querySelector(".text-area");
const questionEl = document.querySelector(".question");
const answerEl = document.querySelector(".answer");
const submitEl = document.querySelector(".submit");
const modes = document.querySelector(".light-mode");
const startGameEl = document.querySelector(".start-game");
const contentEl = document.querySelector(".content");

// array create for question answer and suggestions
let createAsk = [
  {
    question: "what is the name of google company owner ?",
    answer: "Sundar Pichai",
    suggestion: "Pichai,Alphabet,",
  },
  {
    question: "what is full form of dsa ?",
    answer: "Data Structures and Algorithms",
    suggestion: "direct selling,data base,data structures",
  },
  {
    question: "tell me full name of Chhatrapati shivaji maharaj ?",
    answer: "Shivaji Shahaji Bhonsale",
    suggestion: "shivajimaharaja,chhatrapati,Shahaji Bhonsale",
  },
  {
    question: "how many days it take to write indian constitution ?",
    answer: "165 days",
    suggestion: "150,200,165",
  },
  {
    question: "most difficult programming languages ?",
    answer: "JavaScript",
    suggestion: "c++,python,javascript",
  },
  {
    question: "writer of ramcharitmanas? ",
    answer: "Tulsidas",
    suggestion: "valmiki,Tulsidas,rambhadracharya",
  },
];

// randomly question 

const randomQuestion = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let indexnum = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[indexnum];
    arr[indexnum] = temp;
  }
  return arr;
};

createAsk = randomQuestion(createAsk);

let emptyQues = 0;
let timerset;

// start game and display question
startGameEl.addEventListener("click", () => {
  textAreaEl.style.display = "flex";
  startGameEl.style.display = "none";
  displayQuestion();
});

//  answer was submit then next question was show 
submitEl.addEventListener("click", () => {
  const userAnswer = answerEl.value.trim().toLowerCase();
  const cuurentQuestion = createAsk[emptyQues];
  const correctAnswer = cuurentQuestion.answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    emptyQues++;
    displayQuestion();
    answerEl.value = "";
  } else {
    alert("your answer was wrong wait i give you suggestion 😊 ");
    displaySuggestion(cuurentQuestion.suggestion);
  }
  answerEl.value = "";
});

// question display 
function displayQuestion() {
  if (emptyQues > createAsk.length) {
    emptyQues = 0;
  }
  const cuurentQuestion = createAsk[emptyQues];
  questionEl.textContent = cuurentQuestion.question;
}

// answer was wrong then this function was call suggestion 
function displaySuggestion(suggestion) {
  const existingSuggestion = contentEl.querySelector("span");
  if (existingSuggestion) {
    existingSuggestion.remove();
  }

  const createSuggestion = document.createElement("span");
  contentEl.appendChild(createSuggestion);
  timerset = setInterval(() => {
    createSuggestion.textContent = suggestion;
  }, 2000);

  setTimeout(() => {
    clearInterval(timerset);
    createSuggestion.remove();
    displayQuestion();
  }, 4000);
}

// background color chnage

const RandomBgColor = [
  " #1f4251fe ",
  "#335e70fe",
  "#063346fe",
  "#207ca3fe",
  "#56a0c0be",
  "#3a9dc877",
];

const backGroundColor = () => {
  const bg = Math.ceil(Math.random() * RandomBgColor.length);
  const color = RandomBgColor[bg];
  return color;
};

// dark light mood 

modes.addEventListener("click", () => {
  document.querySelector("body").style.background = backGroundColor();
  modes.textContent="🌙"
});
