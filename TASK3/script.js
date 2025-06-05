const quiz = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Syntax", "Creative Style System", "Compact Style Script"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which language is primarily used for web development interactivity?",
    options: ["JavaScript", "Python", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What is the purpose of HTML?",
    options: ["Structure", "Styling", "Scripting", "Database"],
    answer: "Structure"
  }
];

let currentQuestion = 0;

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");
const jokeBtn = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Navbar Toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Display Quiz Question
function loadQuiz() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q.answer);
    optionsEl.appendChild(btn);
  });
  progressEl.textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;
}

// Check Answer
function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("Correct! Well done!");
  } else {
    alert(`Wrong! The correct answer is: ${correct}`);
  }
  optionsEl.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#4caf50";
    } else if (btn.textContent === selected && selected !== correct) {
      btn.style.backgroundColor = "#f44336";
    }
  });
}

// Next Button
nextBtn.onclick = () => {
  currentQuestion = (currentQuestion + 1) % quiz.length;
  loadQuiz();
};

// Fetch Joke
jokeBtn.onclick = async () => {
  jokeDisplay.textContent = "Fetching a joke...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    jokeDisplay.textContent = `${data.setup} - ${data.punchline}`;
    jokeDisplay.style.opacity = "0";
    setTimeout(() => {
      jokeDisplay.style.opacity = "1";
    }, 100);
  } catch (err) {
    jokeDisplay.textContent = "Oops! Couldn't fetch a joke. Try again!";
  }
};

// Initialize
loadQuiz();